import { DefinitionTooltip } from "@/components/utils/HtmlTooltip";
import { irrigable, PNACC } from "@/lib/definitions";
import styles from './themes.module.scss';

export const AgeBatiText = () => (
  <div className="px-4">
    <p>
      55 % des Français déclarent avoir eu trop chaud pendant au moins
      24 heures dans leur logement en 2023. Si la canicule reste la principale
      raison évoquée (87 % des cas), près d’un quart des ménages (24 %) identifie
      aussi la mauvaise isolation de leur logement.
    </p>
    <p>
      La robustesse des logements face aux températures élevées dépend
      de leur qualité intrinsèque (inertie thermique, présence de volets
      extérieurs, qualité des rénovations...). Si vous ne disposez pas
      d'étude spécifique sur le sujet, la période de construction,
      fournie par l'INSEE, vous donne une première approximation.
    </p>
    <p>
      Adapter les logements au risque de forte chaleur est la mesure 9 du{' '}
      <DefinitionTooltip title={PNACC}>
        PNACC
      </DefinitionTooltip> 3.
    </p>
  </div>
);

export const TravailExterieurText = () => (
  <div className="px-4">
    <p>
      <b>La chaleur tue.</b> En 2022 et 2023, 18 travailleurs sont morts
      en France à cause des fortes températures. Ces décès touchent
      tous les âges, de 19 à 70 ans, principalement dans les secteurs
      de la construction et des travaux publics. La moitié de ces accidents
      sont survenus hors des périodes de vigilance canicule. La chaleur
      reste un danger constant pour les travailleurs en extérieur. Plus
      le travail est physique, plus le risque est élevé.
    </p>
    <p>
      Le changement climatique amplifie ces risques, avec des vagues de
      chaleur de plus en plus fréquentes et intenses. Les impacts de la
      chaleur sur la santé et l’économie restent sous-estimés. Pourtant,
      les projections sont inquiétantes : sans adaptation, le travail en
      extérieur pourrait perdre 5 à 10% de productivité d’ici 2100 (étude
      Joint Research Center, scénario TRACC). Cette baisse menacerait
      directement l’économie des territoires.
    </p>
    <p>
      ⇒ Un tiers des décès liés à la chaleur concerne des personnes de
      moins de 75 ans. La chaleur touche une grande partie de la
      population, pas seulement les plus âgés !
    </p>
    <p>
      ⇒ Près de 20 000 passages aux urgences liés à la chaleur entre
      juin et septembre 2023. Entre 2015 et 2019, le
      recours aux soins en excès a couté 31 millions d’euros.
    </p>
    <p>
      ⇒ En 2019, 64 conducteurs de bus ont exercé
      leur droit de retrait en raison de la chaleur excessive dans
      leurs véhicules.
    </p>
    <p>
      - - - - <br></br>
      Plan National d’Adaptation au Changement Climatique (PNACC 3) :
    </p>
    <ul>
      <p>
        <li>
          Adapter les conditions de travail au changement climatique en renforçant les obligations de prévention des employeurs (mesure 11)
        </li>
      </p>
    </ul>
  </div>
);

export const GrandAgeText = () => (
  <div className="px-4">
    <p>
      Les personnes âgées représentent les deux tiers de la
      surmortalité en période de fortes chaleurs. Leur corps
      régule moins bien la température, ce qui les rend plus vulnérables.
      Elles ressentent également moins la soif. Ces facteurs augmentent les risques de déshydratation.
      Les problèmes de santé chroniques, comme les maladies cardiovasculaires
      ou respiratoires, aggravent leur sensibilité aux températures élevées.
    </p>
    <p>
      Le changement climatique intensifie les vagues de chaleur. La précarité
      énergétique, l’isolement social et les logements inadaptés renforcent
      l’inconfort thermique. Ces facteurs se cumulent souvent chez les personnes
      âgées. Plus elles sont exposées à la chaleur, plus elles deviennent vulnérables.
    </p>
    <p>
      Cette vulnérabilité est exacerbée par plusieurs facteurs :
      précarité énergétique, isolement social, et conditions de
      logement inadéquates. Plus ces facteurs se cumulent, plus le
      risque d’une surmortalité en période de chaleur augmente.
      Ces conditions créent un "cercle vicieux" qui accroît leur
      fragilité face à l’inconfort thermique.
    </p>
    <p>
      ⇒ C’est toujours beaucoup trop !{' '}
      <b>33 000 décès ont été attribués à la chaleur</b> entre
      2014 et 2022, dont <b>23 000</b> chez les personnes âgées de
      75 ans et plus.
    </p>
    <p>
      ⇒ Seuls <b>28 % des décès</b> liés à la chaleur se
      produisent pendant les canicules, qui ne représentent que 6 %
      des jours de l’été. Soyons vigilants aussi en dehors des
      périodes de canicule.
    </p>
    <p>
      ⇒ Tous exposés : les moins de 75 ans représentent 71 %
      des consultations SOS Médecins liées à la chaleur (juin-septembre 2022)
      et un tiers des décès (2014-2022).
    </p>
    <p>
      ⇒ Une prise de conscience insuffisante : seuls 12 % des Français se
      considèrent fragiles ou très fragiles pendant une canicule.
    </p>
  </div>
);

export const FragiliteEconomiqueText = () => (
  <div className="px-4">
    <p>
      Les ménages en précarité énergétique doivent faire des choix
      difficiles : limiter le chauffage, réduire l’utilisation de
      l’eau chaude pour éviter des factures trop élevées. Un
      logement mal isolé l’hiver sera aussi coûteux à rafraîchir
      l’été.
    </p>
    <p>
      Leurs conditions de vie et leur santé se dégradent. Le
      changement climatique amplifie ces inégalités, avec des
      vagues de chaleur de plus en plus fréquentes et intenses.
      Dans un logement mal isolé, se protéger de la chaleur est
      un défi impossible pour les ménages les plus précaires. La
      précarité énergétique n'est pas qu’une question de confort :
      elle est un enjeu de santé publique et de justice sociale.
    </p>
    <p>
      ⇒ En 2024, <b>55 %</b> des Français déclarent
      avoir souffert d’un excès de chaleur en été.
    </p>
    <p>
      ⇒ <b>79 %</b> des Français ont dû restreindre leur chauffage.
    </p>
    <p>
      ⇒ En 2023, plus d’un million de ménages ont subi
      une intervention de leur fournisseur d’énergie pour cause
      d'impayés, aggravant leur précarité.
    </p>
    <p>
      - - - - <br></br>
      Plan national d'adaptation au changement climatique (PNACC 3) :
    </p>
    <ul>
      <p>
        <li>
          Adapter les logements au risque de forte chaleur (mesure 9)
        </li>
        <li>
          Protéger les populations précaires des fortes chaleurs (mesure 14)
        </li>
      </p>
    </ul>
  </div>
);

export const VegetalisationText = () => (
  <div className="px-4">
    <p>
      La présence d’arbres permet d’apporter de l’ombre et
      rafraichit l’air par évapotranspiration (lorsque plusieurs
      arbres sont à proximité). Leur efficacité dans le
      rafraîchissement en milieu urbain dépend de leur nombre, de
      la densité de leur feuillage, des essences, de la qualité du
      sol et de la disponibilité en eau.<br></br> <br></br>
      La présence d’arbres peut rafraîchir l’air de 2 à 3° C au maximum,
      notamment dans les rues ou lorsqu’ils sont alignés en bordure de route (source :{' '}
      <a href="https://plusfraichemaville.fr/" target="_blank">
        Plus fraiche ma ville
      </a>
      )
    </p>
  </div>
);

export const SurfacesIrrigueesText = () => (
  <div className={styles.textWrapper}>
    <p>
      En France métropolitaine, 6,8 % de la surface agricole utile
      (SAU) était irriguée en 2020, soit 15 % de plus qu’en 2010.
      Face aux sécheresses de plus en plus marquées, les surfaces{' '}
      <DefinitionTooltip title={irrigable}>
        irrigables
      </DefinitionTooltip>{' '}
      ont aussi progressé de 23 % en dix ans, atteignant 11 % de
      la SAU. Mais cette tendance interroge : l’eau prélevée pour
      l’irrigation représente déjà 10 % des prélèvements totaux et
      jusqu’à 23 % des eaux souterraines, modifiant localement le
      cycle de l’eau.
    </p>
    <p>
      L’irrigation permet de sécuriser les rendements, mais peut
      aussi accentuer les tensions locales sur la ressource, en
      particulier en été, période où la demande est forte pour
      l’agriculture, mais aussi pour l’eau potable, le tourisme et
      les écosystèmes. En prélevant l’eau des cours d’eau et des
      nappes, l’irrigation peut fragiliser les milieux aquatiques,
      déjà mis à l’épreuve par le changement climatique. Entre
      2010 et 2020, certaines régions du nord et de l’est ont
      fortement accru leurs surfaces irriguées, alors que d’autres
      restent très peu équipées. Ainsi, certains territoires
      irriguent plus de 40 % de leur SAU, tandis que d’autres n’en
      irriguent que 1 %.
    </p>
    <p>
      Avec une ressource en eau qui diminue et des usages
      multiples, ce modèle peut-il tenir dans le temps ? À
      l’échelle locale, les territoires devront questionner la
      pérennité de l’irrigation face aux évolutions climatiques et
      aux autres besoins en eau.
    </p>
  </div>
);

export const ConsommationEspacesNAFAmenagementText = () => (
  <div className="px-4">
    <p>
      Depuis dix ans, 24 000 hectares d’espaces naturels, agricoles et
      forestiers disparaissent chaque année sous le béton, soit 10
      fois la superficie de Marseille. Depuis les années 1980, les
      surfaces artificialisées ont augmenté de 70 %, un rythme bien
      supérieur à celui de la population française (+19 %). Pire,
      elles progressent, même là où la population diminue.
    </p>
    <p>
      En périphérie des villes, l’étalement urbain allonge les trajets
      domicile-travail, renforce la dépendance à la voiture et
      augmente les émissions de gaz à effet de serre. Chaque hectare
      artificialisé libère jusqu’à 190 tonnes de CO2, soit l’empreinte
      carbone annuelle de 20 Français.
    </p>
    <p>
      ⇒ 43 % de la consommation d'espace a lieu dans des zones
      péri-urbaines peu denses
    </p>
    <p>
      ⇒ 66 % des ENAF consommés sont destinées à l’habitat dont plus
      de la moitié (51 %) est constitué de constructions de moins de 8
      logements par hectare
    </p>
    <p>
      ⇒ 7 820 communes consomment de l’espace alors qu’elles perdent
      des ménages : une consommation d’ENAF déconnectée des besoins
      réels des territoires !
    </p>
  </div>
);

export const ConsommationEspacesNAFBiodiversiteText = () => (
  <div className="px-4">
    <p>
      L'artificialisation des sols constitue l’une des premières causes
      de l’effondrement de la biodiversité. Elle porte atteinte aux
      processus naturels essentiels, comme la pollinisation, fragmente
      voire détruit les habitats et isole les espèces. Elle participe
      en outre à une homogénéisation de la biodiversité qui affecte la
      résilience des milieux.
    </p>
    <div>
      <p>
        La consommation d’ENAF a des conséquences dramatiques pour le
        climat :
      </p>
      <ul className="text-[1rem] leading-[1.5rem]">
        <li>
          Les sols perdent leur rôle de puits de carbone et leur
          capacité d’infiltration ce qui perturbe le cycle naturel de
          l'eau, avec pour corollaire une réduction de la recharges
          des nappes, une réduction du stockage de l’eau dans les sols
          et une aggravation des risques d’inondations.
        </li>
        <li>
          En détruisant le milieu de vie des micro-organismes des
          sols, l’artificialisation réduit drastiquement les capacités
          épuratoires des milieux.
        </li>
      </ul>
    </div>
    <p>
      ⇒ 24 000 hectares par an d’espaces naturels, agricoles et
      forestiers sont consommés depuis dix ans, soit l’équivalent de
      10 fois la superficie de Marseille.
    </p>
    <p>
      ⇒ Avec 446 m² de terres artificialisées consommées par habitant,
      la France se place au 4e rang européen.
    </p>
    <p>
      ⇒ Un hectare de sol artificialisé libère jusqu’à 190 tonnes de
      CO2, soit l’empreinte carbone annuelle de 20 Français.
    </p>
  </div>
);

export const SurfacesEnBioText = () => (
  <div className="px-4">
    <p>
      L'effondrement de la biodiversité n’est pas une fiction : 69 %
      des espèces sauvages ont disparu à l'échelle de la planète entre
      1970 et 2018, du fait notamment de la dégradation ou de la
      disparition de leurs habitats naturels. L’agriculture dispose de
      deux leviers complémentaires de protection de la biodiversité :
      adopter des pratiques moins intensives et favoriser la diversité
      des paysages. Les cultures à bas niveau d’intrants, la
      non-utilisation de produits chimiques de synthèse, la
      non-utilisation d'OGM, le recyclage des matières organiques, la
      rotation des cultures et la lutte biologique participent à ces
      deux objectifs.
    </p>
    <p>
      Si l’agriculture biologique n’est pas une solution parfaite,
      elle reste aujourd’hui l’une des meilleures réponses, aux côtés
      des pratiques à bas-intrants, pour préserver la biodiversité.
      Alors que 70 % des sols agricoles sont dégradés en Europe, ses
      effets positifs sur la vie souterraine sont avérés. Des
      écosystèmes renforcés sont des écosystèmes plus résilients aux
      impacts du changement climatique.
    </p>
    <p>
      ⇒ Une biodiversité plus riche dans les parcelles en agriculture
      biologique : +32 % d'individus et +23 % d'espèces par rapport à
      l’agriculture conventionnelle.
    </p>
    <p>
      ⇒ 70 % des indicateurs biologiques des sols s'améliorent après
      conversion.
    </p>
    <p>
      ⇒ Une pollinisation 2,4 fois plus efficace qu'en agriculture
      conventionnelle.
    </p>
    <p>
      ⇒ Une meilleure résistance à la sécheresse : disponibilité en
      eau dans les sols améliorée de 4 % à 45 %.
    </p>
    <p>
      ⇒ Jusqu'à 35 % de carbone supplémentaire stocké dans les sols.
    </p>
  </div>
);
