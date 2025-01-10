// const GetCube = async () => {
//   const url = `https://api.indicateurs.ecologie.gouv.fr/cubejs-api/v1/load`;
//   const request = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
// Authorization: `${process.env.TEST_ECOLAB_TOKEN}`,
//     },
//     cache: 'no-store',
//     body: JSON.stringify({
//       "query": {
//             "measures": ["prelevement_eau_usage.id_638"],
//             "filters": [
//             {
//               "member": "prelevement_eau_usage.geocode_epci",
//               "operator": "equals",
//               "values": ["200058519"]
//             }
//             ],
//             "timezone": "UTC",
//             "dimensions": ["prelevement_eau_usage.usage"],
//             "timeDimensions": [{"dimension":"prelevement_eau_usage.date_mesure","granularity":"year"}],
//             "order":{"prelevement_eau_usage.date_mesure":"asc"},

//       }
//     })});

//   // if (!request.ok) {
//   //   throw new Error('Failed to fetch data');
//   // }

//   const response: Response = await request.json();

//   return response;
// };

// export default GetCube;
