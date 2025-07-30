import { DefinitionTooltip } from "@/components/utils/HtmlTooltip";
import { eutrophisation, irrigable, PNACC } from "@/lib/definitions";
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

export const SurfacesEnBioAgricultureText = () => (
  <div className="px-4">
    <p>
      Les défis de l’agriculture sont doubles : réduire ses émissions
      de gaz à effet de serre et s'adapter aux impacts du changement
      climatique : l’intensification des sécheresses menaçant la disponibilité
      en eau, la dégradation des sols, etc. Face à ces enjeux, l'agriculture
      biologique, même si elle n’est pas la solution parfaite, apporte des
      réponses concrètes, aux côtés de l'agroforesterie et des cultures à bas intrants.
    </p>
    <p>
      Le bio renforce la résistance des exploitations agricoles. Comment ? Par
      la non-utilisation des produits chimiques de synthèse et des OGM.
      Grâce au recyclage des matières organiques. Par la rotation des cultures.
      À travers la lutte biologique. Le compostage et la couverture permanente
      des sols enrichissent la vie microbienne. Les résultats parlent d'eux-mêmes : jusqu'à
      35 % de carbone supplémentaire dans les sols. Une meilleure disponibilité
      en eau pour les plantes, avec des gains de 4 % à 45 %. Un territoire comptant
      plus d'exploitations bio résiste mieux aux aléas climatiques. Enfin, à
      surface égale, les cultures biologiques végétales émettent 50 % de gaz
      à effet de serre en moins que les cultures conventionnelles.
    </p>
    <p>
      - - - - <br></br>
      Le Plan national d’adaptation au changement climatique (PNACC 3)
      prévoit d’accompagner les agriculteurs pour assurer la résilience de
      leur exploitation (mesure 37).
    </p>
  </div>
);

export const EtatsCoursEauBiodiversiteText = () => (
  <div className="px-4">
    <p>
      Seuls 43 % des cours et des plans d’eau français sont en bon état écologique.
      Si les principaux facteurs de dégradation de la qualité des eaux
      sont les pollutions (nitrates, pesticides) et les altérations
      physiques des rivières (seuils et barrages, endiguement….), le
      réchauffement climatique aggrave les déséquilibres en cours. La
      hausse des températures et les sécheresses prolongées entraînent
      la chute des débits, voire assecs, la prolifération d'espèces
      exotiques envahissantes, la concentration des polluants
      (massivement relâchés lors des crues) ; la hausse des
      température de l’eau et l’ensoleillement sont des conditions
      favorables à{' '}
      <DefinitionTooltip title={eutrophisation}>
        l’eutrophisation
      </DefinitionTooltip>
      .
    </p>
    <p>
      Un mauvais état écologique a des impacts graves sur la
      biodiversité : il perturbe les conditions de vie des espèces
      aquatiques et dégrade leurs habitats. En 20 ans :
    </p>
    <ul className="text-[1rem] leading-[1.5rem]">
      <li>
        Les populations de truites de rivière ont diminué de 44 %.
      </li>
      <li>
        L’abondance de l’anguille européenne est tombée à 10 % de son
        niveau historique.
      </li>
    </ul>
    <p>
      - - - - <br></br>
      L’objectif de la Directive Cadre sur l’Eau (2000) était
      d’atteindre un bon état général des eaux d’ici 2027 : il semble
      hors d’atteinte désormais.
    </p>
  </div>
);

export const EtatCoursEauRessourcesEauText = () => (
  <div className="px-4">
    <p>
      Même pour des cours d’eau en bon état, les événements extrêmes
      dus au changement climatique aggravent les pollutions : en
      période de sécheresse, les polluants se concentrent ; lors des
      crues, ils sont massivement charriés vers les captages,
      augmentant la contamination.
    </p>
    <p>
      Certaines activités sont directement affectées par la qualité
      chimique des cours d’eau (pisciculture en eau douce, pêche
      professionnelle ou de loisir, sports d’eau vive…). Par ailleurs,
      48 % de l’eau prélevée pour les usages domestiques, agricoles et
      industriels provient des eaux de surface. Une eau brute plus
      polluée nécessite des traitements plus complexes, ce qui
      augmente les coûts du service de l’eau.
    </p>
    <p>
      Concernant spécifiquement l’eau potable, si deux tiers des prélèvements
      sont fait sur des ressources souterraines, les prélèvements en
      eaux de surface sont majoritaires en région parisienne, en
      Bretagne, dans les Pays de la Loire, sur la Côte d’Azur et dans
      l’ancienne région Midi-Pyrénées.
    </p>
  </div>
);

export const AOT40Text = () => (
  <div className="px-4">
    <p>
      L’ozone de basse altitude est le polluant de l’air le plus
      destructeur pour la biodiversité. C’est l’un des rares gaz à
      être à la fois un polluant de l’air et un gaz à effet de serre :
      les périodes de fortes chaleurs, de plus en plus fréquentes et
      intenses, favorisent la formation d’ozone de basse altitude,
      dont les concentrations aggravent le changement climatique.
    </p>
    <p>
      Ce gaz très oxydant s’infiltre dans les plantes, détruit leurs
      cellules et perturbe leur croissance. Les forêts sont
      particulièrement touchées. Les arbres affaiblis deviennent plus
      vulnérables aux maladies et aux sècheresses, et perdent leur
      capacité à stocker du carbone. L’ozone perturbe la pollinisation
      des abeilles, essentielles à 75 % des cultures alimentaires.
    </p>
    <p>
      ⇒ 15 % des stations de mesure en milieu rural dépassaient encore
      le seuil réglementaire d'ozone sur la période 2018-2022.
    </p>
    <p>
      ⇒ Dans certaines régions françaises, des arbres comme le hêtre
      et l'épicéa enregistrent des pertes de biomasse allant jusqu'à
      22 %.
    </p>
    <p>
      ⇒ À l’échelle mondiale, environ 90 % des pertes de rendement
      agricole dues à la pollution atmosphérique sont attribuées à
      l’ozone.
    </p>
    <p>
      - - - - <br></br>
      La directive 2024/2881 du 23 octobre 2024 concernant la qualité
      de l’air ambiant et un air pur pour l’Europe fixe un objectif de
      protection de la végétation de 6 000 µg/m³ par heure au 1er
      janvier 2050.
    </p>
  </div>
);

export const PrelevementEauText = () => (
  <div className="px-4">
    <p>
      Les sécheresses 2022 et 2023 sonnent l'alerte : optimiser la
      ressource en eau disponible devient vital. Face à
      l'intensification des sécheresses due au changement climatique,
      chaque territoire doit anticiper. Un prélèvement n'est possible
      que si la ressource existe !
    </p>
    <p>
      Attention aux chiffres bruts : les prélèvements ne reflètent pas
      les consommations réelles. L'industrie rejette une partie de
      l'eau prélevée, tandis que l'agriculture consomme la
      quasi-totalité de ses prélèvements, concentrés sur trois mois
      d'été. Dans les zones géographiques en tension, l'agriculture
      peut représenter jusqu'à 80 % de l'eau consommée. Cette
      situation fragilise la ressource locale. Le prix de l'eau est
      susceptible d'augmenter pour deux raisons : la rareté de la
      ressource et le besoin de traitements plus sophistiqués
      (dénitrification, élimination des micropolluants, etc.).
    </p>
    <p>
      ⇒ Lors de la sécheresse 2022, 2 000 communes ont été en tension
      sur l’eau potable.
    </p>
    <p>
      ⇒ 30 milliards de m3 d’eau ont été prélevés en France en 2021
      (hors production hydroélectrique), soit l’équivalent de plus
      d’un tiers du volume du Lac Léman. 82 % des prélèvements
      proviennent d'eaux de surface, 18 % d'eaux souterraines
    </p>
    <p>
      ⇒ 20 % des prélèvements d’eau potable sont perdus à cause des
      fuites, soit l’équivalent de la consommation de 18,5 millions
      d’habitants.
    </p>
    <p>
      - - - - <br></br>
      Le Plan Eau agit pour atteindre -10% d’eau prélevée d’ici 2030 :
      <li>
        la mesure 11 prévoit la fin progressive des autorisations de
        prélèvement non soutenables dans les bassins en déséquilibre
        (au fur et à mesure du renouvellement des autorisations) ;
      </li>
      <li>
        la mesure 12 prévoit l’installation obligatoire de compteurs
        connectés pour les prélèvements importants (généralisation
        prévue d'ici 2027) ;
      </li>
      <li>
        la mesure 13 prévoit le renforcement de l'encadrement des
        petits prélèvements domestiques.
      </li>
    </p>
    <p>
      Plan National d’Adaptation au Changement Climatique (PNACC 3) :
      <br></br>La mesure 21 prévoit une étude spécifique sur les
      vulnérabilités de l'approvisionnement en eau potable dans les
      départements et régions d'Outre-mer.
    </p>
  </div>
);

export const CatNatText = () => (
  <div className="px-4">
    <p>
      Les phénomènes extrêmes s'intensifient. Leur fréquence augmente
      à chaque hausse de 0,5°C de la température mondiale. La France
      est particulièrement exposée : depuis 1900, elle a subi 14 % des
      catastrophes naturelles majeures en Europe. Inondations, cyclones
      et tempêtes y sont les plus dévastateurs. La France et l'Italie
      sont les pays européens les plus touchés, loin devant les autres.
    </p>
    <p>
      ⇒ 257 500, c’est le nombre d'arrêtés liés aux événements
      climatiques depuis la création du régime CatNat en 1982. Les
      inondations représentent plus de 56 % du total.
    </p>
    <p>
      ⇒ 8 : c'est le nombre moyen d’arrêtés CatNat par commune entre
      1982 et septembre 2024. Mais une commune détient le triste
      record de 135 arrêtés sur cette période !
    </p>
    <p>
      ⇒ 10,6 milliards d’euros : c’est le coût d’indemnisations des
      dommages liés à des aléas climatiques en France en 2022.
    </p>
    <p>
      ⇒ 4,8 milliards d’euros : montant moyen annuel des pertes
      économiques directes attribuées aux événements naturels en
      France entre 2015 et 2019, soit : <br></br>- deux fois le budget
      annuel des Agences de l’eau, ou <br></br>- 20 fois les besoins
      annuels pour adapter les biens exposés au risque d’érosion en
      France au cours des 25 prochaines années (estimation de
      l’Inspection générale de l'environnement et du développement
      durable).
    </p>
  </div>
);

export const ErosionCotiereText = () => (
  <div className="px-4">
    <p>
      L'érosion grignote nos côtes : près de 20 % du littoral français
      recule face à la mer. Ce phénomène naturel s'accélère avec le
      changement climatique, la hausse du niveau des mers et la
      multiplication des tempêtes notamment. Les chiffres sont
      préoccupants. 37 % des côtes sableuses s'érodent, soit 700
      kilomètres - la distance Paris-Marseille - qui disparaissent peu
      à peu. En 50 ans, la mer a englouti l'équivalent de la ville de
      La Rochelle : 30 km² de terres perdues.
    </p>
    <p>
      Impacts locaux sur les milieux :
      <li>
        Augmentation des intrusions salines des aquifères côtiers,
      </li>
      <li>Modification des paysages (nouvelles lagunes…),</li>
      <li>Appauvrissement des sols dû à la salinisation.</li>
    </p>
    <p>
      Impacts locaux sur les activités humaines :
      <li>
        Diminution de la disponibilité des eaux douces souterraines
        pour les différents usages,
      </li>
      <li>
        Modification des marais salins avec conséquences sur les
        activités,
      </li>
      <li>
        Salinisation et réduction des terres par submersion temporaire
        ou permanente.
      </li>
    </p>
    <p>
      ⇒ 523 communes touchées par le recul du littoral, dont 59
      perdent plus d'1,5 mètre de littoral chaque année.
    </p>
    <p>
      ⇒ D'ici 2050 : 5200 logements et 1400 locaux d'activité seront
      menacés, pour un coût estimé à 1,2 milliard d'euros.
    </p>
    <p>
      - - - - <br></br>
      Plan National d'Adaptation au Changement Climatique (PNACC 3) :
      La mesure 35 prévoit d’accompagner l’adaptation du tourisme
      culturel, de montagne, littoral et nautique.
    </p>
  </div>
);

export const FeuxForetText = () => (
  <div className="px-4">
    <p>
      Un climat plus chaud et plus sec sont des conditions propices
      aux départs de feux et les vents potentiellement plus violents
      sont sources de propagation rapide. La saison des feux
      s’allonge. Elle débute désormais au printemps et se prolonge
      jusqu’à l’automne. Les incendies touchent des territoires
      considérés jusque-là comme épargnés. Ils ont de graves
      conséquences : destruction de la biodiversité, pollution de
      l’air et de l’eau, effets collatéraux sur d’autres aléas
      naturels (érosion, glissements de terrain, inondations…) et
      émissions massives de gaz à effet de serre, amplifiant le
      dérèglement climatique.
    </p>
    <p>
      Si les dégâts socio-économiques des incendies de forêt sont à ce
      jour relativement contenus en France, c’est au prix d’
      importants investissements dans les dispositifs d’alerte et de
      prévention, qui ont permis de diviser par cinq les surfaces
      brûlées annuellement, par rapport aux années 1980.
    </p>
    <p>
      ⇒ En 2023, parmi les feux de forêts dont la cause a été
      identifiée, 9 départs sur 10 sont d’origine humaine.
    </p>
    <p>
      ⇒ 4 feux sur 5 se déclenchent à moins de 50 mètres des
      habitations.
    </p>
  </div>
);

export const RGAText = () => (
  <div className="px-4">
    <p>
      Phénomène lié à l’alternance de sécheresses extrêmes et de fortes pluies,
      le retrait gonflement des argiles (RGA) impacte désormais tout le territoire
      métropolitain à l’exception de la Bretagne et de la Normandie. Il touche
      surtout les maisons individuelles anciennes. Mais les routes, les écoles,
      les canalisations ou les équipements municipaux peuvent aussi être affectés,
      mettant en jeu la sécurité et l’attractivité du territoire.
    </p>
    <p>
      Si le phénomène est incontestablement amplifié par le changement
      climatique, la qualité des constructions est aussi en cause. La
      fréquence des sinistres RGA des maisons construites après 1975
      est cinq fois supérieure à celle des maisons construites avant
      1975, alors même que ces dernières ont subi davantage de cycles
      de RGA. Multifactoriel, le RGA est donc un sujet complexe qui
      nécessite une approche combinée sols, bâtiment, urbanisme…
    </p>
    <p>
      Il y a urgence à mieux prendre en compte le RGA dans les
      politiques d’aménagement car son coût explose : de 400 millions
      d’euros par an (1989-2015) à 1 milliard d’euros par an (2016-2020),
      pour atteindre en 2022 un record à 3,5 milliards d’euros. Il
      représente 52 % du total des indemnisations versées au titre du
      régime des catastrophes naturelles sur les dix dernières années,
      devenant non seulement le péril naturel le plus coûteux devant
      les inondations mais mettant en péril l’équilibre même du régime
      CatNat. Il est temps de sortir d’une logique « dommages ⇒
      indemnisations » alors qu’il existe un certain nombre d’actions
      de prévention qui pourraient éviter ou réduire l’apparition de
      dommages.
    </p>
    <p>
      ⇒ En France métropolitaine, 48 % du territoire est exposé à un
      risque RGA moyen ou fort. Cela représente 10,4 millions de
      logements (près de la moitié du parc de logements) et 20 millions
      de Français.
    </p>
    <p>
      ⇒ En 2022, le nombre de maisons individuelles touchées par le RGA
      a été deux fois supérieur au nombre de maisons individuelles
      construites en 2024.
    </p>
    <p>
      - - - - <br></br>
      Plan national d’adaptation au changement climatique (PNACC 3) :
      <li>
        Protéger la population des désordres sur les bâtiments liés au
        retrait-gonflement des argiles (mesure 5)
      </li>
    </p>
  </div>
);

export const SurfacesAgricolesText = () => (
  <div className="px-4">
    <p>
      En 2020, près de deux tiers des terres agricoles françaises étaient
      consacrées aux terres arables : grandes cultures, légumes, mais aussi
      cultures fourragères destinées à l’élevage. Un tiers correspondait
      aux surfaces toujours en herbe (prairies permanentes), également
      utilisées pour l’élevage. Les cultures permanentes tels que les vergers,
      vignes, plantes à parfum, ainsi que certaines cultures légumières,
      bien que minoritaires en surface, concentrent une part importante
      des pertes liées aux aléas climatiques : gel printanier sur les
      abricotiers, mildiou ou sécheresse sur la vigne, excès d’eau sur
      le maraîchage.
    </p>
    <p>
      Ces pertes illustrent les limites d’un système agricole encore
      souvent spécialisé, peu préparé à absorber des chocs climatiques
      répétés. Un seul aléa suffit parfois à compromettre plusieurs années
      de revenus.
    </p>
    <p>
      La diversification est l’une des voies possibles pour renforcer la
      résilience des territoires agricoles. Si l’agriculture de votre
      territoire repose surtout sur une ou deux cultures, quelle marge
      de résilience reste-t-il face aux aléas climatiques ?
    </p>
    <p>
      ⇒ Près de 49 % de la surface agricole utile est mobilisée pour l’élevage.
    </p>
    <p>
      ⇒ Les jachères agricoles ont reculé de 29 % entre 2010 et 2020.
    </p>
    <p>
      ⇒ En 2024, la production viticole a chuté de 18 % par rapport à la moyenne 2019-2023.
    </p>
  </div>
)

export const LCZText = () => (
  <div className="px-4">
    <p>
      Les LCZ qui reposent sur des mesures de température de surface
      ne permettent pas de quantifier le phénomène d’ilot de chaleur
      urbain (ICU) qui, lui, repose sur des mesures dynamiques de
      température de l’air. Les LCZ ne reflètent pas non plus les
      conditions météorologiques locales, ni le confort thermique
      ressenti par les usagers. Elles contribuent à repérer des
      zones où une exposition à la surchauffe pourrait être plus
      marquée, en vue d’y installer des capteurs ou d’orienter
      des actions de rafraîchissement. Mais en aucun cas ces éléments
      de pré-diagnostic ne se substituent à des données climatiques
      dynamiques, ou à une analyse fine des usages de la ville et
      de la vulnérabilité face à la chaleur.
    </p>
    <p>
      Pour orienter efficacement une stratégies d’adaptation, consultez&nbsp;
      <a href="https://www.plusfraichemaville.fr/" target="_blank" rel="noreferrer">
        Plus fraiche ma ville.
      </a>
    </p>
  </div>
);
