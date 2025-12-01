import { NewContainer } from "@/design-system/layout";
import { collectionsCartes } from "@/lib/ressources/cartes";
import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { BlocCollections } from "../blocs/blocCollections";
import styles from "../ressources.module.scss";
import { CollectionComponent } from "./collectionComponent";
import { CollectionsData } from "./collectionsData";

const Collections = async ({ params }: { params: Promise<{ collectionId: string }> }) => {
  const { collectionId } = await params;
  const collection = CollectionsData.find(c => c.slug === collectionId);
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
      <CollectionComponent collectionId={collectionId} />;
      <BlocCollections collectionsCartes={collectionsCartes.filter(c => !c.lien.includes(collectionId))} />
    </>
  )
};

export default Collections;
