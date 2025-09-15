'use server';

interface Response {
  results: {
    short_id: string;
    result: {
      data: number[];
      labels: string[];
      count: number;
      aggregated_value: number;
      label: string;
      breakdown_value: string[];
      action: {
        math: string;
        type: string;
      };
    }[];
  }[];
}

const GetInsights = async (shortId?: string) => {
  try {
    const url = `https://eu.posthog.com/api/projects/39308/insights?refresh=lazy_async`;
    const request = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.POSTHOG_API_KEY}`
      },
      cache: 'no-store'
    });

    if (!request.ok) {
      throw new Error('Failed to fetch data');
    }

    // Log the response size before parsing
    const responseText = await request.text();
    const response: Response = JSON.parse(responseText);
    const filteredResponse = response.results.filter(
      (e) => e.short_id === shortId
    )[0]?.result;

    return filteredResponse;
  } catch (error) {
    // Optionally log the error for debugging
    console.error('GetInsights error:', error);
    return null;
  }
};

// Helper: Get numeric insight ID from short_id
export const getInsightIdByShortId = async (
  shortId: string
): Promise<number | null> => {
  try {
    const url = `https://eu.posthog.com/api/projects/39308/insights?refresh=lazy_async`;
    const request = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.POSTHOG_API_KEY}`
      },
      cache: 'no-store'
    });
    if (!request.ok) {
      const errorBody = await request.text();
      console.error(
        'PostHog API error (getInsightIdByShortId):',
        request.status,
        errorBody
      );
      return null;
    }
    const responseText = await request.text();
    const response: any = JSON.parse(responseText);
    const found = response.results.find((e: any) => e.short_id === shortId);
    return found ? found.id : null;
  } catch (error) {
    console.error('getInsightIdByShortId error:', error);
    return null;
  }
};

// Fetch a single insight by numeric ID
export const GetInsightById = async (id: number) => {
  try {
    if (!id) throw new Error('id is required');
    const url = `https://eu.posthog.com/api/projects/39308/insights/${id}`;
    const request = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.POSTHOG_API_KEY}`
      },
      cache: 'no-store'
    });
    if (!request.ok) {
      const errorBody = await request.text();
      console.error(
        'PostHog API error (GetInsightById):',
        request.status,
        errorBody
      );
      throw new Error(`Failed to fetch data: ${request.status}`);
    }
    const responseText = await request.text();

    const response = JSON.parse(responseText);
    return response.result || response;
  } catch (error) {
    console.error('GetInsightById error:', error);
    return null;
  }
};

// New HogQL-based query for unique users
export const GetUniqueUsersHogQL = async () => {
  try {
    const currentDate = new Date();
    const currentDateString = currentDate
      .toISOString()
      .replace('T', ' ')
      .substring(0, 19);

    const url = `https://eu.posthog.com/api/projects/39308/query/`;
    const payload = {
      query: {
        kind: 'HogQLQuery',
        query: `
        SELECT
    arrayMap(number -> plus(
      toStartOfInterval(
        assumeNotNull(
          toDateTime('2024-11-14 10:00:18')
        ),
        toIntervalMonth(1)
      ),
      toIntervalMonth(number)
    ), range(0,
      plus(
        coalesce(
          dateDiff(
            'month', toStartOfInterval(
              assumeNotNull(
                toDateTime('2024-11-14 10:00:18')
              ),
              toIntervalMonth(1)
            ),
            toStartOfInterval(assumeNotNull(toDateTime('${currentDateString}')), toIntervalMonth(1))
          )
        ), 1
      )
    )) AS date,
    arrayMap(_match_date -> arraySum(arraySlice(groupArray(ifNull(count, 0)), indexOf(groupArray(day_start) AS _days_for_count, _match_date) AS _index, plus(minus(arrayLastIndex(x -> equals(x, _match_date), _days_for_count), _index), 1))), date) AS total
FROM
    (SELECT
        sum(total) AS count,
        day_start
    FROM
        (SELECT
            count(DISTINCT e.person_id) AS total,
            toStartOfMonth(timestamp) AS day_start
        FROM
            events AS e SAMPLE 1
        WHERE
            and(greaterOrEquals(timestamp, toStartOfInterval(assumeNotNull(toDateTime('2024-11-14 10:00:18')), toIntervalMonth(1))), lessOrEquals(timestamp, assumeNotNull(toDateTime('${currentDateString}'))), equals(event, '$pageview'), ifNull(not(match(toString(properties.$host), '^(localhost|127\\\\.0\\\\.0\\\\.1)($|:)')), 1), notIn(properties.$host, tuple('facili-tacct-preprod.osc-fr1.scalingo.io', 'facili-tacct.osc-secnum-fr1.scalingo.io', 'facili-tacct-nginx.osc-secnum-fr1.scalingo.io', 'facili-tacct.incubateur.ademe.dev')), notIn(person.properties.user, tuple('Thomas Doguet Mac', 'Laurent Barbat Mac', 'Laurent Barbat Phone', 'Audrey Coudrin', 'Audrey ', 'Aude Bodiguel Home', 'Myriam Blal', 'Antoine Conegero PC Portable', 'Céline Vanhautère PC', 'Céline Vanhautère', 'Céline Vanhautère ADEME', 'Antoine Conegero Maison', 'Antoine Conegero port', 'Aude 04/2025', 'Alexandre Joubert', 'Antoine Conegero Home', 'Antoine Conegero work', 'Céline Vanhautère desktop Cardinal')), notEquals(person.properties.User, 'Céline Vanhautère Phone'), notEquals(person.properties.User, 'Céline Vanhautère Phone'), notIn(person.properties.user, tuple('2025-05 Antoine PC portable', '2025-05 Céline', '2025-05 Aude maison', '2025-05 Céline mobile', '2025-05 Laurent pc', '2025-05 Thomas ', '2025-05 Audrey pc', '2025-05 Aude Ademe', '2025-05 Myriam maison')))
        GROUP BY
            day_start)
    GROUP BY
        day_start
    ORDER BY
        day_start ASC)
ORDER BY
    arraySum(total) DESC
LIMIT 100000
        `
      }
    };

    const request = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.POSTHOG_API_KEY}`
      },
      body: JSON.stringify(payload),
      cache: 'no-store'
    });

    if (!request.ok) {
      const errorBody = await request.text();
      console.error('PostHog HogQL query error:', request.status, errorBody);
      throw new Error(`Failed to fetch HogQL data: ${request.status}`);
    }
    const responseText = await request.text();
    const response = JSON.parse(responseText);
    // Process the response from the original working query
    if (
      response.results &&
      Array.isArray(response.results) &&
      response.results.length > 0
    ) {
      const result = response.results[0]; // Should be a single row with dates and totals

      if (Array.isArray(result) && result.length >= 2) {
        const dates = result[0]; // First column: array of dates
        const totals = result[1]; // Second column: array of totals

        if (
          Array.isArray(dates) &&
          Array.isArray(totals) &&
          dates.length === totals.length
        ) {
          // Convert dates to string format and calculate total
          const formattedDates = dates.map((date: any) => {
            if (date instanceof Date) {
              return date.toISOString().split('T')[0].split('-', 2).join('-');
            } else if (typeof date === 'string') {
              return (
                new Date(date).toLocaleString('fr', { month: 'long' }) +
                ' ' +
                new Date(date).getFullYear()
              );
            }
            return date.toString();
          });
          const totalCount = totals.reduce(
            (sum: number, count: number) => sum + count,
            0
          );
          return [
            {
              data: totals,
              labels: formattedDates,
              count: totalCount,
              aggregated_value: totalCount,
              label: 'Utilisateurs uniques',
              breakdown_value: [],
              action: {
                math: 'dau',
                type: 'events'
              }
            }
          ];
        }
      }
    }
    return null;
  } catch (error) {
    console.error('GetUniqueUsersHogQL error:', error);
    return null;
  }
};

export default GetInsights;
