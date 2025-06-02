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
    console.log('PostHog API response size (bytes):', responseText.length);
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

export default GetInsights;
