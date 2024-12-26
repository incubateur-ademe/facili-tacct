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
      breakdown_value: string;
    }[];
  }[];
}

const GetInsights = async () => {
  const params = new URLSearchParams();

  params.append(
    'events',
    JSON.stringify([
      {
        id: 'insight created'
      }
    ])
  );
  params.append('display', 'BoldNumber');
  // params.append(
  //   'properties',
  //   JSON.stringify({
  //     type: 'AND',
  //     values: [
  //       {
  //         type: 'AND',
  //         values: [
  //           {
  //             key: 'name',
  //             type: 'group',
  //             value: [filterValue],
  //             operator: 'exact',
  //             group_type_index: 0,
  //           },
  //         ],
  //       },
  //     ],
  //   })
  // );

  const url = `https://eu.posthog.com/api/projects/39308/insights?date_from=2021-01-01`;
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
