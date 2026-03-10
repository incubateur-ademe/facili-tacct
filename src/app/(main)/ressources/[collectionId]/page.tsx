import { CustomAccordion } from "@/design-system/base/Accordion";
import { H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { getFaqItems } from "@/lib/queries/notion/notion";
import { collectionsCartes } from "@/lib/ressources/cartes";
import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { sharedMetadata } from "../../shared-metadata";
import { BlocCollections, BlocCollectionsResponsive } from "../blocs/blocCollections";
import styles from "../ressources.module.scss";
import { CollectionComponent } from "./collectionComponent";
import { CollectionsData } from "./collectionsData";

export async function generateMetadata({ params }: { params: Promise<{ collectionId: string }> }): Promise<Metadata> {
  const { collectionId } = await params;
  const collection = CollectionsData.find(c => c.slug === collectionId);

  if (!collection) {
    return {
      ...sharedMetadata,
      title: "Boîte à outils - Facili-TACCT",
      description: "Découvrez notre boîte à outils pour l'adaptation au changement climatique"
    };
  }
  const url = `https://www.facili-tacct.fr/ressources/${collection.slug}`;

  return {
    ...sharedMetadata,
    title: collection.titre,
    description: collection.metadescription,
    openGraph: {
      ...sharedMetadata.openGraph,
      title: collection.titre,
      description: collection.metadescription,
      url,
      images: [
        {
          url: collection.image.src,
          width: collection.image.width,
          height: collection.image.height,
          alt: collection.titre
        }
      ]
    },
    alternates: {
      canonical: url
    }
  };
}

const Collections = async ({ params }: { params: Promise<{ collectionId: string }> }) => {
  const { collectionId } = await params;
  const collection = CollectionsData.find(c => c.slug === collectionId);
  const allFaqItems = await getFaqItems();
  const faqItems = allFaqItems.filter(item =>
    item.collections.includes(collection!.titre)
  );
  if (!collection) {
    redirect('/ressources');
  }

  return (
    <>
      <NewContainer size="xl" style={{ padding: 0 }}>
        <div className={styles.breadcrumbWrapper}>
          <Breadcrumb
            currentPageLabel={collection?.titre}
            homeLinkProps={{ href: '/' }}
            segments={[{ label: 'Boîte à outils', linkProps: { href: '/ressources' } }]}
          />
        </div>
      </NewContainer>
      <CollectionComponent collectionId={collectionId} />
      {faqItems.length > 0 && (
        <NewContainer size="xl" style={{ padding: "2rem 1rem 4rem" }}>
          <H2 style={{ fontSize: "28px", marginBottom: "1.5rem" }}>
            Questions sur ce thème
          </H2>
          <div style={{ width: "3rem", borderBottom: "1px solid #DDDDDD", marginBottom: "2rem" }} />
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {faqItems.map((item) => (
              <CustomAccordion label={item.question} key={item.id}>
                {item.reponse}
              </CustomAccordion>
            ))}
          </ul>
          <div className="flex">
            <Link href="/ressources/faq" target="_blank" rel="noopener noreferrer" className={styles.questionsThemes}>
              Voir toutes les questions
              <span className={`fr-icon-arrow-right-line ${styles.arrow}`} aria-hidden="true"></span>
            </Link>
          </div>
        </NewContainer>
      )}
      <div className={styles.desktopOnly}>
        <BlocCollections collectionsCartes={collectionsCartes.filter(c => !c.lien.includes(collectionId))} />
      </div>
      <div className={styles.mobileOnly}>
        <BlocCollectionsResponsive collectionsCartes={collectionsCartes.filter(c => !c.lien.includes(collectionId))} />
      </div>
    </>
  )
};

export default Collections;
