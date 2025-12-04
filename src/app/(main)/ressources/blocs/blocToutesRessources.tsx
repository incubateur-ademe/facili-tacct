"use client";

import ReinitialiserIcon from "@/assets/icons/refresh_icon_green.png";
import MultiSelect from "@/components/MultiSelect";
import { TuileVerticale } from "@/components/Tuile";
import { TagsIcone, TagsSimples } from "@/design-system/base/Tags";
import { Body, H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { FiltresOptions, toutesLesRessources } from "@/lib/ressources/toutesRessources";
import { SelectChangeEvent } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { CollectionsData } from "../[collectionId]/collectionsData";
import styles from "../ressources.module.scss";

export const BlocToutesRessources = () => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [ArticlesFiltres, setArticlesFiltres] = useState(toutesLesRessources);
  const territoireOptions = FiltresOptions.find(f => f.titre === 'Territoire')?.options || [];

  const handleSelectOptions = (filterTitre: string) => (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedFilters(prev => ({
      ...prev,
      [filterTitre]: typeof value === "string" ? value.split(",") : value
    }));
    const updatedFilters = {
      ...selectedFilters,
      [filterTitre]: typeof value === "string" ? value.split(",") : value
    };
    const selectedFilterValues = Object.values(updatedFilters).flat();
    if (selectedFilterValues.length === 0) {
      setArticlesFiltres(toutesLesRessources);
    } else {
      setArticlesFiltres(
        toutesLesRessources.filter(article =>
          selectedFilterValues.every(filter => article.filtres?.includes(filter))
        )
      );
    }
  };

  const handleReset = () => {
    setSelectedFilters({});
    setArticlesFiltres(toutesLesRessources);
  };

  return (
    <div className={styles.toutesRessourcesContainer}>
      <NewContainer size="xl" style={{ padding: "40px 0" }}>
        <H2 style={{ color: "#161616", fontSize: "22px" }}>
          Toutes les ressources
        </H2>
        <div className={styles.separator} />
        <div className={styles.filtresWrapper} >
          <div className={styles.filtresListe}>
            {
              FiltresOptions.map(filter => (
                <div key={filter.titre} className={styles.filtreItem}>
                  <Body>{filter.titre}</Body>
                  <MultiSelect
                    options={filter.options}
                    handleSelectObjectifOptions={handleSelectOptions(filter.titre)}
                    selectedValues={selectedFilters[filter.titre] || []}
                  />
                </div>
              ))
            }
            <div className={styles.reinitialiser} onClick={handleReset} style={{ cursor: "pointer" }}>
              <Image src={ReinitialiserIcon} alt="Icône réinitialiser" />
              <Body weight="medium" style={{ color: "var(--boutons-primaire-1)" }}>Réinitialiser les filtres</Body>
            </div>
          </div>
          <div className={styles.filtresSelectionnes}>
            {Object.entries(selectedFilters).map(([filterTitre, values]) =>
              values.map(value => (
                <div key={`${filterTitre}-${value}`} className={styles.filtreTag}>
                  <TagsSimples
                    texte={value}
                    couleur="#E3FAF9"
                    couleurTexte="var(--boutons-primaire-3)"
                    taille="small"
                    closeable
                    handleClose={() => {
                      setSelectedFilters(prev => {
                        const updatedValues = prev[filterTitre].filter(v => v !== value);
                        let updatedFilters;
                        if (updatedValues.length === 0) {
                          const { [filterTitre]: _, ...rest } = prev;
                          updatedFilters = rest;
                        } else {
                          updatedFilters = {
                            ...prev,
                            [filterTitre]: updatedValues
                          };
                        }

                        const selectedFilterValues = Object.values(updatedFilters).flat();
                        if (selectedFilterValues.length === 0) {
                          setArticlesFiltres(toutesLesRessources);
                        } else {
                          setArticlesFiltres(
                            toutesLesRessources.filter(article =>
                              selectedFilterValues.every(filter => article.filtres?.includes(filter))
                            )
                          );
                        }

                        return updatedFilters;
                      });
                    }}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className={styles.resultatsWrapper}>
          <p className={styles.resultats}>
            <b>{ArticlesFiltres.length}</b> Résultat(s)
          </p>
          <div className={styles.listeDesArticlesWrapper}>
            {
              ArticlesFiltres.map((el, i) => {
                const collectionSlug = CollectionsData.find(c => c.titre === el.collections[0])?.slug;
                const isExternalLink = el.lien.startsWith('https://');
                  const lien = isExternalLink
                    ? el.lien
                    : `/ressources/${collectionSlug}/${el.slug}`;
                return (
                  <TuileVerticale
                    key={i}
                    titre={el.titre!}
                    description={el.description}
                    tags={el.filtres?.filter(filtre => !territoireOptions.includes(filtre)).map((filtre, index) => (
                      <TagsIcone
                        key={index}
                        texte={filtre}
                        filtre={filtre as "Article" | "Retour d'expérience" | "M'inspirer" | "Me former" | "Agir"}
                        taille="small"
                      />
                    ))}
                    tempsLecture={el.tempsLecture}
                    lien={lien}
                    lienExterne={isExternalLink}
                    image={el.image!}
                  />
                );
              })
            }
          </div>
          <div className="m-8" />
          {/* <TuileHorizontale
            titre="Titre de la ressource sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "
            tags={[<TagsSimples
              texte="Catégorie"
              couleur="#E3FAF9"
              couleurTexte="var(--boutons-primaire-3)"
              taille="small" />]
            }
            tempsLecture={5}
            image={TestImageTuile}
          /> */}

        </div>
      </NewContainer>
    </div>
  )
};
