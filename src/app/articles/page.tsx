import { getBlocks, getDatabase } from "@/lib/notion/notion";
import RouterArticles from "./router";
import styles from './text.module.css';

const Articles = async () => {
  const id = process.env.NOTION_PAGE_ID;
  const dbId = process.env.NOTION_DATABASE_ID;
  // const getPageContent = await getPage();
  const getDatabaseContent = await getDatabase(dbId as string);
  const ids = getDatabaseContent.map((el: any) => el.id)

  const getBlocksContent = await getBlocks(id as string) as Block[];

  return (
    <div style={{margin:"6em auto", maxWidth:"650px", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div>
        { 
          ids.map((el: string, i: any) => {
            return (
              <div key={i} className={styles.heading1}>
                <RouterArticles params={el}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
export default Articles;
