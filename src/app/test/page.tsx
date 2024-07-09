import { Get_Prisma } from "./prismafunc";
import { sql } from '@vercel/postgres';

export default async function Test() {
  // const [data, setData] = useState<any>();
  const db_filtered = await Get_Prisma();
  // console.log('db_filtered', db_filtered)

  return (
    <div style={{ margin: "2rem" }}>
      {db_filtered.map((el, i) => (
        <ul key={i}>
          <li>{el.shape_area}</li>
        </ul>
      ))}
    </div>
  );
}
