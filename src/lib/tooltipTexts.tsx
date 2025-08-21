export const fragiliteEconomiqueTooltipText = (
  <>
    <div>La précarité énergétique liée au logement concerne : </div>
    <br></br>
    <div>
      - les ménages des 3 premiers déciles(*) c'est-à-dire les 30 % de la
      population ayant les revenus les plus modestes,
    </div>
    <div>
      - parmi ces 30 %, les ménages qui consacrent plus de 8 % de leurs
      revenus aux dépenses énergétiques liées à leur logement (chauffage, eau
      chaude, et ventilation).
    </div>
    <br></br>
    <div>
      (*)Les déciles divisent les revenus de la population en dix parties
      égales. Dans la modélisation effectuée pour l’ONPE, le 3è décile
      correspond à des revenus inférieurs à 19 600€ par an.
    </div>
  </>
);

export const surfacesIrrigueesTooltipText = (
  <>
    <div>
      <p>
        Cet indicateur est calculé en divisant la superficie irriguée par la
        surface agricole utilisée (SAU). Il est disponible sur le site AGRESTE
        pour le recensement agricole de 2020. Plus d’un quart des observations
        sont sous secret statistique.
      </p>
      <p>
        La superficie irriguée est déterminée quel que soit le mode
        d'irrigation (aspersion, goutte-à-goutte…) et quelle que soit
        l'origine de l'eau. Les surfaces irriguées uniquement dans le cadre
        d'une protection contre le gel ou d'une lutte phytosanitaire (contre
        le phylloxera de la vigne par exemple) sont exclues de ce calcul.
      </p>
      <p>
        Une surface est dite « irrigable » si elle est munie d’un moyen
        d’irrigation.
      </p>
    </div>
    <div>
      <p>
        Cet indicateur est calculé en divisant la superficie irriguée par la
        surface agricole utilisée (SAU). Il est disponible sur le site AGRESTE
        pour le recensement agricole de 2020. Plus d’un quart des observations
        sont sous secret statistique.
      </p>
      <p>
        La superficie irriguée est déterminée quel que soit le mode
        d'irrigation (aspersion, goutte-à-goutte…) et quelle que soit
        l'origine de l'eau. Les surfaces irriguées uniquement dans le cadre
        d'une protection contre le gel ou d'une lutte phytosanitaire (contre
        le phylloxera de la vigne par exemple) sont exclues de ce calcul.
      </p>
      <p>
        Une surface est dite « irrigable » si elle est munie d’un moyen
        d’irrigation.
      </p>
    </div>
  </>
);

export const espacesNAFTooltipText = (
  <div>
    Le suivi de cet indicateur est réalisé par le CEREMA dans le cadre de
    l’objectif “zéro artificialisation nette” de la loi « Climat et résilience
    ». La consommation d’espaces NAF est calculée à partir des fichiers
    fonciers entre 2009 et 2023, présentée ici toute destination confondue.
    Les données sont traitées pour donner des tendances de façon uniforme sur
    toute la France ; ponctuellement, il est possible que les documents de
    planification de certaines collectivités territoriales fassent référence à
    des données locales de consommation d'espaces différentes de celles
    fournies par le CEREMA.
  </div>
);

export const agricultureBioTooltipText = (
  <>
    <div>Les superficies totales en agriculture biologique comprennent :</div>
    <div>
      <ul>
        <li>
          les surfaces « certifiées bio » qui rassemblent les parcelles dont
          la période de conversion est terminée et dont la production peut
          être commercialisée avec la mention « agriculture biologique » ;
        </li>
        <li>
          les superficies en conversion (la durée de conversion variant de 2
          ans pour les cultures annuelles à 3 ans pour les cultures pérennes).
          Certaines données peuvent être incomplètes (non transmission des
          données en provenance d’un organisme certificateur).
        </li>
      </ul>
    </div>
    <div>
      Cet indicateur fait partie du kit des indicateurs de développement
      durable fourni dans le cadre de l’Agenda 2030 et des 17 Objectifs de
      Développement Durable (ODD).
    </div>
  </>
);

export const AOT40TooltipText = (
  <div>
    <p>
      L’AOT40 (Accumulated Exposure Over Threshold 40) est un indicateur
      estimant l’impact de la pollution à l’ozone sur la végétation. Il mesure
      l’accumulation des concentrations d’ozone dépassant 40 ppb (80 µg/m³) :
    </p>
    <p>
      Il est calculé par la somme des différences entre les concentrations
      horaires d'ozone supérieures à 80 µg/m3 et le seuil de 80 µg/m3,
      mesurées quotidiennement entre 8 h et 20 h, de mai à juillet pour tenir
      compte de la période de photosynthèse.
    </p>
    <p>
      Une valeur cible(*) de 18 000 µg/m³ par heure, en moyenne calculée sur 5
      ans, est fixée dans la directive 2024/2881 du 23 octobre 2024 concernant
      la qualité de l’air ambiant et un air pur pour l’Europe.
    </p>
    <p>
      <i>
        (*) Valeur cible : niveau à atteindre, dans la mesure du possible,
        afin d'éviter, de prévenir ou de réduire les effets nocifs sur
        l'environnement.
      </i>
    </p>
  </div>
);

export const etatCoursDeauTooltipTextBiodiv = (
  <div>
    <p>
      En application de la directive-cadre européenne sur l’eau, l’état
      écologique global de chaque rivière est évalué tous les 6 ans par les
      agences de l’eau, à partir de relevés sur 3 ans (N-1, N-2, N-3) issus
      des stations de mesure de la qualité de l’eau (par modélisation en leur
      absence). Plusieurs critères concourent à cette évaluation :
    </p>
    <ul>
      <li>température et acidité de l’eau,</li>
      <li>bilan de l’oxygène,</li>
      <li>hydro-morphologie du cours d’eau,</li>
      <li>
        présence de poissons, de plantes aquatiques, de microalgues, de
        micropolluants, de nutriments (eutrophisation), etc.
      </li>
    </ul>
    <p>
      Attention, le bon état écologique d’une rivière ne signifie pas une
      qualité sanitaire suffisante pour s’y baigner. Cette évaluation se
      fait en fonction de données microbiologiques. Le classement des
      eaux de qualité insuffisante, suffisante, bonne ou excellente est
      établi conformément aux critères de l’annexe II de la directive
      2006/7/CE concernant la gestion de la qualité des eaux de baignade.
    </p>
    <br></br>
  </div>
);

export const etatCoursDeauTooltipTextEau = (
  <div>
    <p>
      En application de la directive-cadre européenne sur l’eau, l’état
      écologique global de chaque rivière est évalué tous les 6 ans par les
      agences de l’eau, à partir de relevés sur 3 ans (N-1, N-2, N-3) issus
      des stations de mesure de la qualité de l’eau (par modélisation en leur
      absence). Plusieurs critères concourent à cette évaluation :
    </p>
    <ul>
      <li>température et acidité de l’eau,</li>
      <li>bilan de l’oxygène,</li>
      <li>hydro-morphologie du cours d’eau,</li>
      <li>
        présence de poissons, de plantes aquatiques, de microalgues, de
        micropolluants, de nutriments (eutrophisation), etc.
      </li>
    </ul>
  </div>
);

export const catnatTooltipText = (
  <>
    <div>
      Il s’agit du nombre total d'arrêtés de catastrophes naturelles d’origine
      climatique publiés au Journal Officiel par commune depuis la création de
      la garantie Cat-Nat en 1982 (loi du 13 juillet 1982). Sont considérés
      comme risques naturels d’origine climatique : les avalanches, les
      phénomènes atmosphériques tels que les vents cycloniques, les tempêtes
      (exclues à partir de 1989), la grêle et la neige (exclues à partir de
      2010), les inondations (coulée de boue, lave torrentielle, inondations par remontée de
      nappe, et inondations par choc mécanique des vagues), les mouvements de
      terrain (regroupant les chocs mécaniques liés à l’action des vagues,
      l’éboulement rocheux, la chute de blocs, l’effondrement de terrain,
      l’affaissement et le glissement de terrain), la sécheresse (notamment le
      retrait-gonflement des argiles).
    </div>
    <br></br>
    <div>
      Les dommages dus aux vents cycloniques ne sont intégrés dans la garantie
      des catastrophes naturelles que depuis la fin de l'année 2000, lorsque
      la vitesse du vent dépasse 145 km/h pendant dix minutes, ou 215 km/h par
      rafale.
    </div>
    <div>
      Les catastrophes naturelles d’origine non climatiques (séismes,
      éruptions volcaniques, raz de marée) sont exclues du
      décompte.
    </div>
  </>
);

export const erosionCotiereTooltipText = (
  <>
    <div>
      Elaboré dans le cadre de la stratégie nationale de gestion intégrée du
      trait de côte,  cet indicateur national donne un aperçu quantifié des
      phénomènes d’érosion, sur la base de la mobilité passée du trait de côte
      sur une période de 50 ans.
    </div>
    <br></br>
  </>
);

export const feuxForetTooltipText = (
  <div>
    <p>
      Un incendie de forêt est un incendie qui démarre en forêt ou qui se
      propage en forêt ou au sein de terres boisées au cours de son évolution
      (y compris dans les maquis ou garrigues dans l’aire méditerranéenne).
    </p>
    <p>
      La surface parcourue est la surface totale parcourue par le feu au cours
      de son évolution et quelle que soit la végétation touchée. Ces surfaces
      sont soit :
    </p>
    <ul>
      <li>
        estimées (renseignées dans la BDIFF sans être issues de mesures),
      </li>
      <li>
        mesurées (issues de mesures sur le terrain ou d’un Système
        d’Information Géographique).
      </li>
    </ul>
  </div>
);

export const densiteBatiTooltipText =
  '(surface au sol de la construction x hauteur du bâtiment) / surface totale de la commune';

export const travailExterieurTooltipText = (
  <>
    <div>
      La base de données EMP3 de l’INSEE recense les emplois au lieu de
      travail par sexe, secteur d'activité économique et catégorie
      socioprofessionnelle.
    </div>
    <br></br>
    <div>
      Les emplois cumulés des secteurs de l’agriculture et de la construction
      fournissent une image approximative de la part des emplois en extérieur
      sur le territoire. Une partie des transports, du tourisme, voire la
      collecte des déchets sont aussi concernés. Bien sûr, tout emploi amenant
      à évoluer dans des environnements marqués par des températures élevées,
      en extérieur comme en intérieur, est potentiellement à risque.
    </div>
  </>
);

export const prelevementEauTooltipText = (
  <>
    <div>
      L'indicateur représente le volume annuel d'eau prélevée, par grands
      usages,{' '}
      <u>
        pour les prélèvements soumis à redevance, sur la base de déclarations
        auprès des agences et offices de l’eau.
      </u>{' '}
      Cette redevance est due par les personnes qui prélèvent un volume annuel
      d'eau supérieur à 10 000 m3 d'eau. Ce volume est ramené à 7 000 m3 dans
      les zones dites de répartition des eaux (zones pour lesquelles a été
      identifiée une insuffisance chronique des ressources par rapport aux
      besoins).
    </div>
    <br></br>
    <div>
      Certains usages sont exonérés de redevance : aquaculture, géothermie,
      lutte antigel de cultures pérennes, réalimentation de milieux naturels,
      etc. En Outre-mer, la lutte contre les incendies et la production
      d’énergie renouvelable sont également exonérées.
    </div>
  </>
);

export const rgaTooltipText = (
  <>
    <div>
      Les informations fournies sont le résultat du croisement géomatique
      réalisé par le CGDD/SDES en 2021 de la carte d’exposition au phénomène
      de RGA (BRGM, 2019) et des logements figurant dans le fichier démographique
      sur les logements et les individus (Base Fidéli -Insee, 2021).
    </div>
    <br></br>
    <div>
      L’indicateur permet d’identifier le niveau d’exposition des communes au
      phénomène mais il n’est pas adapté pour travailler à une échelle plus fine
      (parcellaire). Ainsi, la visualisation cartographique proposée ne peut en
      aucun cas prétendre refléter en tout point l’exacte nature des sols.
    </div>
  </>
);

export const surfacesAgricolesTooltipText = (
  <>
    <div>
      Ces chiffres proviennent du recensement agricole de 2020 disponible sur{' '}
      <a
        href="https://agreste.agriculture.gouv.fr/agreste-web/disaron/RA2020_1013_EPCI/detail/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Agreste
      </a>.
    </div>
  </>
);

export const LCZTooltipText = (
  <>
    <div>
      La typologie LCZ {" "}
      <a href="https://journals.ametsoc.org/view/journals/bams/93/12/bams-d-11-00019.1.xml" target="_blank" rel="noopener noreferrer">
        (issue de Stewart et Oke, 2012) 
      </a>{" "}
      est un référentiel international des zones urbaines.
      La méthode s'appuie sur la corrélation observée entre les conditions climatiques d'une zone spécifique
      et ses caractéristiques géographiques (morphologie, utilisation des sols).
    </div>
    <br></br>
    <div>
      Les 17 postes LCZ représentent les espaces bâtis d’une part (de 1 à 10),
      les espaces non bâtis d’autre part (de A à G).
    </div>
  </>
);
