import { DefinitionTooltip } from "@/components/utils/HtmlTooltip";
import { PNACC } from "@/lib/definitions";

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
