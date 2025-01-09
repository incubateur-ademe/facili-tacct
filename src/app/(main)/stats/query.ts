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

  const response: Response = await request.json();
  const filteredResponse = response.results.filter(
    (e) => e.short_id === shortId
  )[0].result;

  return filteredResponse;
};

export default GetInsights;
