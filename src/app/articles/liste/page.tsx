import { getDatabasePages } from "@/lib/queries/notion/notion";
import Link from "next/link";

interface NotionPage {
  id: string;
  properties: {
    [key: string]: {
      type: string;
      title?: Array<{ plain_text: string }>;
      rich_text?: Array<{ plain_text: string }>;
      date?: { start: string };
      select?: { name: string };
      multi_select?: Array<{ name: string }>;
    };
  };
  created_time: string;
  last_edited_time: string;
}

const ArticlesListePage = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    return (
      <div className="m-10">
        <p className="text-red-600">❌ NOTION_DATABASE_ID n&apos;est pas configuré dans .env</p>
      </div>
    );
  }

  try {
    const pages = await getDatabasePages(databaseId) as NotionPage[];

    return (
      <div className="m-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Articles</h1>

        <div className="grid gap-6">
          {pages.map((page) => {
            const properties = page.properties;

            // Récupérer le titre (chercher la propriété de type title)
            const titleProp = Object.values(properties).find(prop => prop.type === 'title');
            const title = titleProp?.title?.[0]?.plain_text || 'Sans titre';

            return (
              <Link
                key={page.id}
                href={`/articles/${page.id}`}
                className="block p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-sm text-gray-500">
                  Dernière modification : {new Date(page.last_edited_time).toLocaleDateString('fr-FR')}
                </p>

                {/* Afficher les autres propriétés */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {Object.entries(properties).map(([key, value]) => {
                    if (value.type === 'select' && value.select) {
                      return (
                        <span key={key} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {value.select.name}
                        </span>
                      );
                    }
                    if (value.type === 'multi_select' && value.multi_select) {
                      return value.multi_select.map((item, idx) => (
                        <span key={`${key}-${idx}`} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          {item.name}
                        </span>
                      ));
                    }
                    return null;
                  })}
                </div>
              </Link>
            );
          })}
        </div>

        {pages.length === 0 && (
          <p className="text-gray-500">Aucun article trouvé dans la base de données.</p>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="m-10">
        <p className="text-red-600">
          ❌ Erreur lors de la récupération des articles : {error instanceof Error ? error.message : 'Erreur inconnue'}
        </p>
      </div>
    );
  }
};

export default ArticlesListePage;
