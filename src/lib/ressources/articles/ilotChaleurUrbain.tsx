"use client";
import ICUGuideSurchauffe from "@/assets/images/ICU_Guide_Surchauffe.png";
import ICUVilles from "@/assets/images/villes_exposees_icu.png";
import { RetourHautDePage } from "@/components/RetourHautDePage";
import { DefinitionTooltip } from "@/components/utils/Tooltips";
import { albedo, surchauffeUrbaine } from "@/lib/definitions";
import Image from "next/image";
import { useRef } from "react";
import EndPageTrigger from "../../../hooks/EndPageTrigger";
import styles from "./article.module.scss";

const IlotChaleurUrbain = () => {
  const sourcesRef = useRef<HTMLDivElement>(null);
  const handleScrollToSources = (e: React.MouseEvent) => {
    e.preventDefault();
    sourcesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <RetourHautDePage />
      <div className={styles.textBloc} style={{ paddingTop: "0rem" }}>
        <div className={styles.grayQuoteWrapper}>
          <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>À retenir</p>
          <ul>
            <li>
              <b>Un îlot de chaleur urbain (ICU) ne se voit pas à l’œil nu.</b> Il correspond
              à un écart de température de l’air entre ville et campagne, mesuré la nuit en conditions radiatives.
            </li>
            <li>
              <b>Le phénomène peut concerner toutes les communes</b>, y compris les villes
              moyennes ou centres-bourgs ruraux, dès lors que la morphologie urbaine s’y prête.
            </li>
            <li>
              <b>Une carte de température de surface ne permet pas de diagnostiquer un ICU.</b> Elle
              indique la chauffe des matériaux, pas les risques pour la population.
            </li>
            <li>
              <b>Tous les territoires ne doivent pas forcément se lancer dans un diagnostic ICU.</b> Il
              faut d’abord préciser le besoin, l’échelle, le moment.
            </li>
            <li>
              <b>Croiser les données est essentiel</b> (température de l’air, forme urbaine, usages,
              vulnérabilités) pour guider l’action et éviter les diagnostics erronés.
            </li>
          </ul>
        </div>
        <h1 style={{ margin: "3rem 0" }}>Îlot de chaleur urbain : 4 idées reçues à déjouer pour mieux agir sur le terrain</h1>
        <p>
          Un dôme de chaleur au-dessus des villes : <b>invisible, mais bien réel… et souvent mal interprété.</b>
        </p>
        <p>
          Le phénomène d’îlot de chaleur urbain (ICU) reste mal compris.. On le confond avec une simple
          impression d’étouffement, on le croit réservé aux grandes villes du Sud, ou on pense
          l’avoir identifié sur une carte issue d’une thermographie, sans toujours savoir qu’il
          en existe deux types (de jour ou de nuit) qui ne mesurent pas la même chose.
        </p>
        <p>
          Lors de l’atelier CDM Success du 8 juillet, Élodie Briche, climatologue et
          intrapreneure du service « Plus fraîche ma ville » à l’ADEME, a aidé les chargés
          de mission à démêler les idées reçues et à mieux comprendre comment un ICU peut
          être repéré, interprété et pris en compte dans une stratégie d’adaptation.
        </p>
        <p>
          Pour les chargés de mission climat, mieux cerner ce qu’est (et surtout ce que n’est pas)
          un phénomène d’îlot de chaleur urbain est essentiel pour :
        </p>
        <ul>
          <li>
            <b>Repérer un éventuel signal d’alerte</b> dans le cadre plus global d’un diagnostic de vulnérabilité aux impacts du changement climatique,
          </li>
          <li>
            <b>Juger s’il est utile de lancer un diagnostic ICU, à une échelle adaptée au besoin</b>
          </li>
          <li>
            <b>Mobiliser les bons outils de diagnostic selon les objectifs poursuivis</b>, notamment à l’échelle de la ville ou du grand quartier,
          </li>
          <li>
            <b>Formuler plus clairement les besoins</b> auprès des services techniques ou d’un bureau d’études.
          </li>
        </ul>
        <p><b>Encore faut-il bien savoir de quoi on parle. Et ne pas se fier aux apparences.</b></p>
        <h2>Idée reçue n°1 : confondre îlot de chaleur urbain, température de surface et inconfort thermique</h2>
        <p>
          <b>Un îlot de chaleur urbain ne se voit pas à l’œil nu.</b> Il ne se ressent pas toujours directement, et
          <b> ne peut pas être identifié sur une simple carte thermique,</b> surtout si celle-ci mesure uniquement
          la température des surfaces (bitume, toitures, tôle…).
        </p>
        <p>
          Le phénomène d’îlot de chaleur urbain (ICU) correspond à une <b>différence de température de l’air</b> entre
          une zone <b>urbaine</b> et un espace <b>rural</b> voisin, mesurée à environ 2 mètres du sol, soit à hauteur du piéton.
        </p>
        <p>
          Cette différence peut atteindre <b>plus de 10 °C</b>. Elle est généralement <b>observée la nuit</b>, et seulement
          lorsque certaines conditions météorologiques très particulières sont réunies : un ciel clair et temps calme,
          soit avec <b>peu de nuages</b> et <b>peu de vent</b>. On parle alors de <b>situations radiatives</b>.
        </p>
        <Image
          src={ICUGuideSurchauffe}
          alt="Répartition des températures urbaines la nuit"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto', paddingTop: "1rem" }}
        />
        <p>
          <a href="#sources" onClick={handleScrollToSources} style={{ cursor: "pointer" }}>
            Source [1]
          </a>
        </p>
        <p>
          Il s’agit d’un phénomène qui s’inscrit dans un ensemble plus large : {" "}
          <DefinitionTooltip title={surchauffeUrbaine}>
            la surchauffe urbaine.
          </DefinitionTooltip>
          {" "} Ce terme regroupe trois réalités différentes, souvent confondues entre elles au moment
          d’analyser ou de cartographier un ICU :
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '2rem 0' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '12px', backgroundColor: '#f5f5f5', textAlign: 'left', fontSize: '0.875rem' }}>
                <strong>Phénomène observé</strong>
              </th>
              <th style={{ border: '1px solid #ccc', padding: '12px', backgroundColor: '#f5f5f5', textAlign: 'left', fontSize: '0.875rem' }}>
                <strong>Mode de mesure</strong>
              </th>
              <th style={{ border: '1px solid #ccc', padding: '12px', backgroundColor: '#f5f5f5', textAlign: 'left', fontSize: '0.875rem' }}>
                <strong>Quand l'observer</strong>
              </th>
              <th style={{ border: '1px solid #ccc', padding: '12px', backgroundColor: '#f5f5f5', textAlign: 'left', fontSize: '0.875rem' }}>
                <strong>Variable mesurée ou observée</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                <strong>îlot de chaleur urbain (ICU)</strong>
              </td>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                Capteurs à environ 2m du sol, en zone urbaine et en zone rurale
              </td>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                Surtout la nuit, par temps clair et sans vent
              </td>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                <strong>Température de l'air</strong> (écart entre ville et campagne)
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                <strong>Surchauffe des surfaces urbaines</strong>
              </td>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                Thermographie satellitaire ou aérienne
              </td>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                En journée, par temps ensoleillé. Parfois aussi la nuit
              </td>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                <strong>Température de surface</strong> (bitume, toitures, tuiles…), liée à leur capacité à emmagasiner et restituer la chaleur
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                <strong>Inconfort thermique du piéton</strong>
              </td>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                Calcul d’indices de température ressentie, enquêtes auprès des habitants
              </td>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                En journée, dans l'espace public exposé. Parfois la nuit aussi (ex. nuits chaudes tropicales).
              </td>
              <td style={{ border: '1px solid #ccc', padding: '12px', fontSize: '0.875rem' }}>
                <strong>Température ressentie</strong> (sensation de chaleur ou de gêne physique influencée par l’exposition au soleil, l’absence d’ombre, le vent, l’humidité…)
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Cette confusion entre les différentes <b>manifestations de la chaleur en ville</b> est fréquente…
          et peut conduire à des diagnostics mal orientés, voire à sous-estimer le phénomène d’ICU sur son propre territoire.
        </p>
        <h2>Idée reçue n°2 : penser que le phénomène d’îlot de chaleur urbain ne concerne que les grandes villes du Sud</h2>
        <div className={styles.grayQuoteWrapper}>
          « L’îlot de chaleur urbain ? C’est un truc pour Marseille ou Toulouse, non ? »
        </div>
        <p>C’est une idée reçue tenace… mais trompeuse.</p>
        <Image
          src={ICUVilles}
          alt="10 villes françaises les plus exposées à l'ICU"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto', margin: '2rem 0 0' }}
        />
        <p>
          <a href="#sources" onClick={handleScrollToSources} style={{ cursor: "pointer" }}>
            Source [2]
          </a>
        </p>
        <p>
          Ces exemples montrent que <b>l’intensité d’un ICU peut varier fortement d’un territoire à
            l’autre, selon un ensemble de facteurs locaux</b>, tels que :
        </p>
        <ul>
          <li>
            <b>la nature des matériaux</b> (goudron, tôle, béton…),
          </li>
          <li>
            <b>l’inertie thermique des bâtiments</b> (capacité à emmagasiner la chaleur le jour et à la restituer la nuit),
          </li>
          <li>
            <b>la morphologie urbaine</b> (hauteur des bâtiments, densité, ouverture à la ventilation…),
          </li>
          <li>
            <b>certaines activités humaines</b> (rejets de chaleur de la climatisation et du trafic routier…)
          </li>
        </ul>
        <h3>Le phénomène d’îlot de chaleur urbain peut apparaître… même en hiver</h3>
        <p>
          Contrairement à une idée reçue, l’ICU n’est pas réservé à l’été et ne se limite pas aux épisodes de canicule.
        </p>
        <p>
          Un ICU peut aussi survenir en automne ou en hiver, dès lors que le ciel est clair et le vent
          absent, surtout dans les villes sujettes au phénomène.
        </p>
        <p>
          Dans ces cas-là, l’ICU peut contribuer temporairement à limiter les besoins de chauffage.
          Mais attention : la stagnation de l’air peut aussi aggraver la pollution et nuire à la qualité de l’air.
        </p>
        <p>
          À l’inverse, <b>en période de canicule</b>, la surchauffe peut toucher <b>tous les territoires</b>, même
          ceux <b>où l’ICU n’est pas présent</b>. Cela vaut y compris pour des <b>zones rurales</b>, par
          exemple dans <b>des centres-bourgs très minéralisés</b>.
        </p>
        <h3>Un phénomène variable dans l’espace et dans le temps</h3>
        <p>
          Mais au-delà de la saison, le phénomène d’îlot de chaleur urbain (ICU) est aussi hautement
          variable d’un endroit à l’autre… et d’un jour à l’autre. Il peut se déplacer à l’échelle
          d’un quartier selon les conditions météo, l’heure ou la période de l’année.
        </p>
        <p>
          Ce que vous cartographiez un jour ne sera pas forcément vrai le lendemain.
        </p>
        <p>
          C’est pourquoi il est essentiel de croiser les données (mesures de terrain, cartes thermiques,
          usages du sol) et de toujours recontextualiser les cartes ou les diagnostics produits <a href="#sources" onClick={handleScrollToSources} style={{ cursor: "pointer" }}>
            [3]
          </a>
        </p>
        <div className={styles.grayWrapper}>
          <p style={{ fontSize: "1.25rem", fontWeight: "700" }}>À retenir</p>
          <ul>
            <li>
              Un ICU peut apparaitre dans une commune de toute taille, si certaines conditions
              sont réunies : forte minéralisation, faible végétation, faible ventilation
              naturelle, présence de rejets de chaleur liés aux activités humaines (trafic routier, climatisation…)
            </li>
            <li>
              Il peut survenir <b>toute l’année</b>, dès lors que les conditions radiatives sont réunies.
            </li>
            <li>
              La localisation de l’ICU peut changer d’un jour à l’autre : attention aux interprétations figées.
            </li>
          </ul>
        </div>
        <h2>Idée reçue n°3 : prendre la température de surface pour celle de l’air</h2>
        <p>
          Sur une carte de température de surface, certaines zones apparaissent « très chaudes » :
          rouge foncé, orange vif… Mais attention : ces images ne mesurent pas le phénomène d’îlot de chaleur urbain (ICU).
        </p>
        <p>
          Elles traduisent la température de surface des matériaux (bitume, tôle, tuiles…) captée en
          journée par satellite ou par thermographie aérienne.
          Elles sont utiles… mais elles ne suffisent pas à diagnostiquer un ICU.
        </p>
        <h3>Température de surface ≠ température de l’air</h3>
        <p>
          Pour mémoire, le phénomène d’îlot de chaleur urbain (ICU) est défini comme un <b>écart de température de l’air</b>, mesuré <b>la nuit</b>, entre un point en ville et un point rural.
        </p>
        <p>
          Il nécessite des <b>capteurs installés sur le terrain</b>, en ville et à l’extérieur, à 2 mètres du sol environ, en <b>conditions météorologiques radiatives</b> (peu de vent, peu de nuages).
        </p>
        <p>
          En revanche, la température de surface :
        </p>
        <ul>
          <li>
            <b>varie selon l’ensoleillement</b>,
          </li>
          <li>
            <b>renseigne sur la chauffe des matériaux</b>,
          </li>
          <li>
            <b>mais ne permet pas d’évaluer l’intensité réelle de l’ICU</b>, ni les risques pour la population, <b>dus en particulier à une moindre baisse des températures la nuit</b>.
          </li>
        </ul>
        <p>
          La température de surface peut donner une première idée des zones les plus minéralisées… mais devient trompeuse si on l’utilise comme un diagnostic ICU, ou pire, si elle est utilisée pour calibrer une action d’aménagement.
        </p>
        <p>
          À l’inverse, un quartier résidentiel peu ventilé peut apparaître peu problématique sur une carte de température de surface, alors qu’il accumule fortement la chaleur de nuit comme de jour. L’inconfort thermique peut être bien réel, mais absent sur une carte.
        </p>
        <div className={styles.grayWrapper} style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "1.25rem", fontWeight: "700" }}>Exemple : quand une image de température de surface peut induire en erreur</p>
          <p>
            Prenons une zone industrielle : tôle, bitume, pas d’ombre.
          </p>
          <p>
            Elle apparaît « en rouge vif » sur une carte de température de surface. Mais faut-il pour autant en faire une priorité d’intervention ?
          </p>
          <ul>
            <li>
              Pas nécessairement, puisque personne n’y dort ! Si l’on se place du point de vue sanitaire, il n’y a pas
              de risque immédiat pour les habitants.
            </li>
            <li>
              Mais si l’objectif est de réduire la surchauffe urbaine de manière plus globale,
              ces espaces aussi peuvent être concernés.
            </li>
          </ul>
        </div>
        <p>
          Ces décalages rappellent qu’une carte de température de surface ne reflète <b>ni les enjeux de
            santé publique, ni la localisation prioritaire de l’action locale.</b>
        </p>
        <p>
          <b>Croiser les données (surface, air, usages du sol, vulnérabilités) reste indispensable</b> pour
          identifier les secteurs réellement sensibles et éviter de partir sur des fausses pistes <a href="#sources" onClick={handleScrollToSources} style={{ cursor: "pointer" }}>
            [4]
          </a>.
        </p>
        <p>
          D’où l’importance de bien cadrer son diagnostic en amont.
        </p>
        <h2>Idée reçue n°4 : se lancer dans un diagnostic ICU mal calibré</h2>
        <p>
          Ce que l’on appelle souvent un “diagnostic ICU” désigne, en réalité, un diagnostic de surchauffe urbaine qui, selon les cas, peut se centrer uniquement sur l’ICU ou couvrir d’autres dimensions.
        </p>
        <p>
          <b>Tous les territoires ne doivent pas forcément se lancer dans un diagnostic de surchauffe urbaine.</b>
        </p>
        <p>
          Un tel diagnostic peut être utile… <b>mais seulement s’il est bien cadré</b>, et engagé au bon moment dans la démarche d’adaptation.
        </p>
        <p>
          Lors de l’atelier, Élodie Briche a partagé plusieurs exemples parlants :
        </p>
        <ul>
          <li>
            certaines collectivités ont lancé des diagnostics lourds et coûteux sans avoir clairement défini leur besoin ni formalisé un cahier des charges,
          </li>
          <li>
            d’autres se sont appuyées uniquement sur la température de surface, pensant diagnostiquer un ICU,
          </li>
          <li>
            enfin, des diagnostics de surchauffe urbaine ont été engagés sans avoir défini clairement si le besoin relevait de la planification à long terme ou d’un projet urbain concret.
          </li>
        </ul>
        <p>
          Dans tous ces cas, le problème n’est pas le diagnostic lui-même, <b>mais son calibrage</b> : <b>à quel moment, avec quels outils, pour répondre à quelle question</b> ?
        </p>
        <h3>Diagnostic ou pré-diagnostic de surchauffe urbaine ? Tout dépend de la question posée</h3>
        <p>
          Vous travaillez à l’échelle d’un PCAET, d’un plan climat ou d’un SCoT ?<br />
          Dans ce cas, <b>un pré-diagnostic peut suffire pour amorcer la réflexion</b>. Il s’agit d’une première
          lecture du territoire, à partir des données déjà disponibles, sans lancer d’étude complexe.
        </p>
        <p>
          Un pré-diagnostic peut permettre de :
        </p>
        <ul>
          <li>repérer les zones potentiellement sensibles à la chaleur,</li>
          <li>comprendre les effets de la forme urbaine (densité, végétation, revêtements…),</li>
          <li>et commencer à structurer une stratégie d’adaptation.</li>
        </ul>
        <p>
          Parmi les outils mobilisables gratuitement :
        </p>
        <ul>
          <li>
            les <b>zones climatiques locales (LCZ)</b> produites par le Cerema (bientôt disponibles sur Facili-TACCT), qui cartographient la forme urbaine et les ambiances thermiques d’un territoire. Elles permettent de <b>repérer les zones à surveiller, même sans mesure sur site,</b>
          </li>
          <li>
            le site <b>Climadiag Commune</b> de Météo-France, qui fournit des <b>projections climatiques locales,</b> par exemple, l’évolution du nombre de <b>nuits chaudes</b>
          </li>
        </ul>
        <h3>Sur un projet d’aménagement ? Mieux vaut mesurer sur site</h3>
        <p>
          Si vous êtes sur un projet d’aménagement concret, avant ou après travaux, une analyse plus fine est nécessaire. Cela implique de :
        </p>
        <ul>
          <li>mesurer la <b>température de l’air sur site</b> (avec capteurs fixes et/ou itinérants),</li>
          <li>prendre en compte l’<b>inconfort thermique du piéton</b> (ombrage, <DefinitionTooltip title={albedo}>albédo</DefinitionTooltip>, ventilation…),</li>
          <li>et <b>croiser ces données</b> avec les usages réels et les profils de vulnérabilité.</li>
        </ul>
        <p>
          À cette échelle plus fine, le calcul d’un coefficient de rafraîchissement urbain (outil TRIBU) est mobilisable gratuitement sur Plus fraîche ma ville.
        </p>
        <p>
          Le phénomène d’îlot de chaleur urbain est un phénomène spécifique, à ne pas confondre avec une simple impression de chaleur.
        </p>
        <p>
          Pour un territoire, il n’est <b>pas toujours prioritaire de lancer un diagnostic dédié</b> : tout dépend des enjeux locaux, du moment, et de ce que dit le diagnostic de vulnérabilité.
        </p>
        <p>
          Un simple point de mesure ou une lecture via les LCZ peut parfois suffire à lever un doute.
        </p>
        <p>
          Et si un diagnostic plus poussé s’impose, mieux vaut le <b>calibrer précisément</b>, selon les objectifs poursuivis.
        </p>
        <p>
          L’important, c’est de garder une vision d’ensemble pour orienter l’action. Le diagnostic ICU peut en faire partie… mais pas à n’importe quel prix, ni à n’importe quel moment.
        </p>
        <div className={styles.grayWrapper}>
          <p style={{ fontSize: "1.25rem", fontWeight: "700" }}>Pour aller plus loin :  Plus fraîche ma ville</p>
          <p>
            Plus fraîche ma ville est un service public gratuit de l'ADEME qui aide les
            collectivités à concevoir et mettre en œuvre des solutions de rafraîchissement
            urbain durables. Il permet de choisir les bonnes méthodes de diagnostic de surchauffe
            urbaine et de passer à l’action de manière éclairée grâce à un accompagnement numérique
            personnalisé. Vous souhaitez rejoindre la communauté Plus fraîche ma ville ?
          </p>
          <a
            href="https://plusfraichemaville.fr/connexion?callbackUrl=https%3A%2F%2Fplusfraichemaville.fr%2Fespace-projet"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: 'fit-content' }}
          >
            Connectez-vous dès maintenant !
          </a>
        </div>
        <div ref={sourcesRef} className={styles.sourcesWrapper} style={{ marginTop: "3rem" }}>
          <p style={{ fontSize: "1.25rem", fontWeight: "600" }}>Sources</p>
          <div className={styles.sourcesList}>
            <p>
              [1]{" "}
              <a
                href="https://librairie.ademe.fr/changement-climatique/7401-diagnostic-de-la-surchauffe-urbaine-9791029723650.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diagnostic de la surchauffe urbaine - Méthodes et retours d’expérience, ADEME, juin 2024
              </a>
            </p>
            <p>
              [2]{" "}
              <a
                href="https://meteofrance.com/le-changement-climatique/observer-le-changement-climatique/quest-ce-que-lilot-de-chaleur-urbain"
                target="_blank"
                rel="noopener noreferrer"
              >
                Qu’est-ce que l’îlot de chaleur urbain ?
              </a>
            </p>
            <p>
              [3]{" "}
              <a
                href="https://plusfraichemaville.fr/retour-experience/diagnostic/grenoble-cartographie-icu-2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                Retour d’expérience de la ville de Grenoble
              </a>
            </p>
            <p>
              [4]{" "}
              <a
                href="https://plusfraichemaville.fr/retour-experience/diagnostic/cartographie-risque-icu-grand-reims"
                target="_blank"
                rel="noopener noreferrer"
              >
                Retour d’expérience de la CU du Grand Reims
              </a>
            </p>
          </div>
        </div>
      </div>
      <EndPageTrigger />
    </>
  );
};

export default IlotChaleurUrbain;
