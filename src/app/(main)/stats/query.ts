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

const GetInsights = async () => {
  const url = `https://eu.posthog.com/api/projects/39308/insights`;
  const request = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.POSTHOG_API_KEY}`
    }
  });

  const response: Response = await request.json();

  return response;
};

export default GetInsights;
