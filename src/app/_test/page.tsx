import { Get_Prisma } from "./prismafunc";

export default async function Test() {
  // const [data, setData] = useState<any>();
  const db_filtered = await Get_Prisma();
  // console.log('db_filtered', db_filtered)
  return (
    <div style={{ margin: "2rem" }} > 
    </div> 
  );
}
