import { DefinitionTooltip } from "@/components/utils/HtmlTooltip";
import { PNACC } from "@/lib/definitions";

export const FragiliteEconomiqueText = () => (
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
