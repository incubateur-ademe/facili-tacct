import ForwardArrow from '@/assets/icons/keyboard_arrow_next_icon_black.svg';
import { RetourHautDePage } from '@/components/interactions/RetourHautDePage';
import EndPageTrigger from '@/hooks/EndPageTrigger';
import Image from 'next/image';
import styles from './article.module.scss';

const IndicateursDeResilience = () => {
  return (
    <>
      <RetourHautDePage />
      <h1>
        Comment mesurer la résilience d’un territoire agricole face au changement climatique ?
      </h1>
      <div className={styles.textBloc}>
        <p>
          Sécheresses, vagues de chaleur, excès d’eau, nouvelles maladies… L’agriculture
          est en première ligne face au changement climatique. Mais comment savoir si
          un territoire agricole peut encaisser ces chocs et continuer à produire ?
          <b> Comment mesurer sa résilience ?</b>
        </p>
        <p>Lors de l’atelier CDM Success consacré au sujet, deux experts ont apporté leurs éclairages :</p>
        <ul>
          <li>
            <b>Audrey Trévisiol</b>, coordinatrice thématique agriculture et changement
            climatique à l’ADEME, qui a contribué au chapitre Agriculture du rapport
            de prospective <i>Transition(s) 2050</i>,
          </li>
          <li>
            <b>Nicolas Métayer</b>, responsable de l’activité agriculture-climat chez Solagro,
            association à l’origine d’<i>Afterres2050</i>, un scénario sur la transition agricole,
            alimentaire et énergétique en France à l’horizon 2050.
          </li>
        </ul>
        <p>
          Leur objectif : donner aux chargés de mission climat une <b>vision stratégique de la résilience
            agricole</b>, grâce à une série d’indicateurs simples mais structurants. Une façon de
          dépasser les approches partielles et d’outiller les territoires pour juger de la
          pérennité de l’activité agricole à moyen et long terme.
        </p>
        <p>
          Concrètement, trois grands leviers permettent d’évaluer cette résilience : l’accès à l’eau,
          la diversité des productions et des revenus ainsi que les sols et leurs usages. Ces trois
          leviers peuvent être mesurés grâce à une série d’indicateurs précis.
        </p>
        <h2>Gestion de l’eau en agriculture : évaluer la dépendance à l’irrigation</h2>
        <p>
          L’eau est au cœur du fonctionnement agricole : elle conditionne la croissance
          des plantes comme celle des animaux. Or le changement climatique accentue les
          tensions : <b>températures plus élevées, sécheresses plus fréquentes,
            évapotranspiration accrue</b> (perte d’eau par le sol et les plantes).
        </p>
        <p>
          En France, l’irrigation concerne déjà de nombreuses cultures : le maïs
          bien sûr, mais aussi les fourrages, d’autres céréales, l’arboriculture
          et les légumes. Avec le réchauffement climatique, la liste s’allonge : des
          cultures jusque-là peu concernées, comme le tournesol, le colza ou le sorgho,
          nécessitent désormais des apports en eau. Cette extension des besoins intervient
          alors que la ressource en eau se raréfie, surtout en été, saison la plus
          critique pour les territoires agricoles.
        </p>
        <p>
          Pour mesurer cette dépendance, six indicateurs peuvent être suivis.
          Ils permettent de répondre à deux questions simples : <b>quelle est l’ampleur
            de l’irrigation ?</b> Et <b>à quel moment de l’année intervient-elle ?</b>
        </p>
        <p><b>Quelle ampleur ?</b></p>
        <ul>
          <li>
            Surface irriguée totale (milliers d’hectares)
          </li>
          <li>
            Part de la surface agricole utile irriguée (%)
          </li>
          <li>
            Part de la surface irriguée en maïs (%), céréale la plus consommatrice d’eau en été
          </li>
        </ul>
        <p style={{ marginTop: "1.5rem"}}><b>À quel moment ?</b></p>
        <ul>
          <li>
            Volume d’eau total d’irrigation (milliers m³)
          </li>
          <li>
            Volume d’eau d’irrigation estivale (milliers m³), période où la ressource est la moins disponible
          </li>
          <li>
            Part de la consommation d’eau d’irrigation estivale (%)
          </li>
        </ul>
        <p>
          <b>À retenir :</b> un territoire pour lequel la production agricole repose
          sur de la monoculture irriguée avec des besoins importants en période
          estivale est plus vulnérable qu’un territoire où l’eau est utilisée de
          façon plus diversifiée et répartie dans le temps.
        </p>
        <p className='mt-6'>
          Si l’eau est une condition vitale pour produire, elle ne garantit pas
          à elle seule la pérennité d’une activité agricole. La capacité à résister
          aux aléas repose aussi sur un autre levier : la <b>diversification des productions
            et des revenus</b>. Ce principe est simple : ne pas mettre tous ses œufs dans le
          même panier renforce la résilience face aux chocs climatiques.
        </p>
        <h2>Diversifier les revenus pour amortir les aléas climatiques</h2>
        <p>
          Un bon réflexe pour renforcer la résilience agricole : éviter de mettre tous ses œufs
          dans le même panier ! Concrètement, cela peut passer par deux leviers : <b>diversifier
            les productions agricoles et diversifier les activités génératrices de revenus.</b>
        </p>
        <h3>Diversification des cultures et des productions agricoles</h3>
        <p>
          Il s’agit de varier les systèmes de production :
        </p>
        <ul>
          <li>
            En combinant élevage et cultures sur une même exploitation ou au sein d’un même territoire,
          </li>
          <li>
            Ou en intégrant plusieurs types de cultures aux cycles, besoins et sensibilités climatiques différents.
          </li>
        </ul>
        <div className={styles.grayWrapper}>
          <p>
            Exemple : une année de forte chaleur peut impacter le rendement d’une culture
            sensible comme le colza, mais épargner une culture plus robuste comme le sorgho.
            <b> Une exploitation diversifiée a plus de chances de « tenir le coup » dans sa
              production</b>, en limitant les pertes immédiates de rendement.
          </p>
        </div>
        <h3>Diversification des activités économiques</h3>
        <p>
          Au-delà de la production, certaines fermes développent des activités complémentaires qui
          viennent sécuriser une part de leurs revenus :
        </p>
        <ul>
          <li>
            <b>Accueil à la ferme</b>, par exemple via des fermes pédagogiques ou de l’agrotourisme,
          </li>
          <li>
            <b>Production d’énergies renouvelables (TWh/an)</b>, comme la méthanisation,
          </li>
          <li>
            <b>Activités de transformation</b>, par exemple en produisant du fromage à partir du lait ou des confitures à partir des fruits,
          </li>
          <li>
            <b>Activité de vente directe</b>, qui permet de mieux maîtriser les prix et de créer un lien local avec les consommateurs.
          </li>
        </ul>
        <p>
          Ces activités créent des sources de revenus différenciées qui peuvent compenser une mauvaise saison, stabiliser les
          résultats économiques et parfois redonner de l’attractivité à l’exploitation agricole.
        </p>
        <p>
          <b>À retenir :</b> plus un territoire agricole multiplie ses productions et ses débouchés économiques,
          plus il dispose de marges de manœuvre pour absorber un choc climatique. La vocation première de
          l’agriculture reste la production de matières agricoles pour l’alimentation ; la diversification
          n’est pas une garantie, mais un <b>filet de sécurité précieux</b> pour éviter qu’un aléa climatique ne
          se transforme en impasse.
        </p>
        <p className='mt-6'>
          Encore faut-il que les sols soient capables de supporter les aléas. Leur état constitue
          en réalité le socle de la résilience agricole, car sans sols vivants et fertiles,
          aucune production ne peut durer.
        </p>
        <h2>Mieux gérer les sols pour faire face aux chocs climatiques</h2>
        <p>
          L’état des sols est un levier central de la résilience agricole. Un sol agricole
          vivant et riche en matière organique (carbone et éléments nourrissant la vie du sol)
          permet de mieux encaisser les chocs climatiques, de limiter les pertes et d’assurer
          la continuité de production. En pratique : protéger les sols, préserver leur
          fonctionnement biologique et renforcer leur autonomie face aux intrants. Voici
          les principaux indicateurs à suivre.
        </p>
        <h3>Couvrir les sols pour lutter contre l’érosion et la sécheresse</h3>
        <p>
          Un sol nu, entre deux cultures, est vulnérable : il subit l’érosion lors des orages,
          surchauffe en été, et perd sa vie biologique dans les couches superficielles.
          À l’inverse, garder un couvert végétal en permanence protège le sol, nourrit
          son activité et stimule son fonctionnement.
          <br></br><br></br>
          <b>→ Indicateur : terres arables avec couverts végétaux (milliers hectares).</b>
        </p>
        <p>
          Les couverts végétaux maximisent la production de photosynthèse, entretiennent
          la biodiversité  et stockent du carbone. Ils trouvent leur place en grandes
          cultures, dans les vignes ou en arboriculture.
        </p>
        <h3>Limiter le travail du sol pour mieux retenir l’eau</h3>
        <p>
          Le semis direct consiste à implanter une culture sans travail du sol préalable.
          <br></br><br></br>
          <b>→ Indicateur : surface en semis direct (en milliers d’hectares).</b>
        </p>
        <p>
          Cette technique limite l’évapotranspiration, préserve la structure et la vie
          du sol, et permet d’intervenir plus vite dans des fenêtres météo réduites pour
          assurer l’implantation des cultures. Elle devient précieuse dans des contextes
          de pluies soudaines ou de sécheresses prolongées.
        </p>
        <p>
          <b>Sur un territoire, développer le semis direct permet de sécuriser les implantations
            malgré des conditions climatiques imprévisibles.</b>
        </p>
        <h3>Stocker carbone et matière organique pour accroître la fertilité</h3>
        <p>
          Un sol riche en carbone et en matière organique retient mieux l’eau et les nutriments.
          Il amortit les sécheresses, favorise une bonne structure et nourrit durablement la vie du sol.
          <br></br><br></br>
          <b>→ Indicateur : variation des stocks de carbone (tC/ha) et part d’azote organique (%).</b>
        </p>
        <p>
          Ces deux indicateurs se lisent surtout en tendance, sur plusieurs années. Le carbone
          joue un rôle de réservoir d’eau, l’azote organique reflète la part de fertilisation
          issue de sources naturelles (fumier, compost) plutôt que de synthèse. Ensemble,
          ils signalent la capacité des sols à être plus autonomes et résilients.
        </p>
        <h3>Suivre l’usage des produits phytosanitaires</h3>
        <p>
          Le changement climatique accentue certaines pressions (ravageurs, maladies), ce qui peut
          entraîner une hausse des traitements. Une dépendance accrue fragilise les exploitations,
          notamment face aux contraintes réglementaires et environnementales croissantes. <b>
            Sur un territoire, limiter cette dépendance renforce l’autonomie et réduit les risques de fragilité.
          </b>
          <br></br><br></br>
          <b>→ Indicateur : NODU (Nombre de Doses Unités de produits phytosanitaires).</b>
        </p>
        <h3>Déployer les légumineuses pour renforcer l’autonomie en azote</h3>
        <p>
          Pois chiches, lentilles, féverole, luzerne ou trèfle fixent l’azote de l’air et
          enrichissent les sols. Elles ouvrent aussi la voie à de nouvelles filières alimentaires.
          <br></br><br></br>
          <b>→ Indicateur : quantité d’azote fixée par symbiose (ktN).</b>
        </p>
        <p>
          En culture principale, en fourrage ou en interculture, leur présence est un bon
          indicateur d’agrosystèmes plus autonomes et moins dépendants des engrais de synthèse.
          <br></br>
          <b>Sur un territoire, déployer les légumineuses contribue à une agriculture plus autonome et fertile.</b>
        </p>
        <h3>Diversifier les fourrages pour sécuriser l’élevage face au climat</h3>
        <p>
          En élevage, la résilience dépend des ressources fourragères locales. L’objectif : éviter une
          dépendance à une seule culture sensible au climat, comme le maïs. Mais la résilience ne dépend
          pas seulement de la diversité des ressources fourragères. Elle repose aussi sur l’adéquation
          entre les besoins du cheptel et les capacités réelles de production du territoire, qui varient
          fortement selon les conditions climatiques.
          <br></br><br></br>
          <b>→ Indicateur : production fourragère issue du maïs et des cultures, production fourragère
            issue de pâturage, part de la production fourragère issue du pâturage et des prairies
            permanentes naturelles (%), bilans fourragers (surplus d’herbe, ktMS).</b>
        </p>
        <p>
          Constituer des stocks pluriannuels et ajuster le niveau de chargement (nombre d’animaux/ha)
          permet de garder une marge de manœuvre lors des sécheresses.
          <br></br>
          <b>
            Sur un territoire, cette diversification sécurise l’alimentation animale et
            limite la dépendance aux achats extérieurs.
          </b>
        </p>
        <h3>Conserver haies et arbres, climatiseurs naturels du paysage</h3>
        <p>
          L’évolution des haies et de l’agroforesterie est un marqueur fort de la résilience au changement climatique.
          <br></br><br></br>
          <b>→ Indicateur : haies sur prairies et terres arables (milliers km) ; agroforesterie sur prairies,
            grandes cultures, pré-vergers (milliers d’ha).</b>
        </p>
        <p>
          Ces infrastructures végétales offrent de multiples co-bénéfices : ombrage pour les animaux,
          microclimats, protection contre le vent, atténuation de l’érosion, refuge pour la biodiversité,
          stockage de carbone.
          <br></br>
          <b>
            Sur un territoire, maintenir et renforcer ce maillage végétal revient à créer un climatiseur
            naturel face aux conditions extrêmes.
          </b>
        </p>
        <div className={styles.textBloc}>
          <h2>Conclusion</h2>
          <p>
            <b>Mesurer la résilience agricole au changement climatique suppose d’aller au-delà des volumes produits.</b>
          </p>
          <p>
            Il s’agit d’observer des signaux parfois discrets mais révélateurs : diversité des revenus,
            autonomie des sols, gestion de l’eau, place de la biodiversité…
          </p>
          <p>
            Bien interprétés, ces indicateurs offrent aux chargés de mission une grille de lecture
            commune pour repérer les fragilités du territoire et nourrir le dialogue avec les acteurs agricoles.
          </p>
          <i className='mt-6'>
            Les indicateurs présentés ici sont issus d’un travail de l’ADEME avec Solagro dans le cadre de la
            prospective Transition(s) 2050 réalisé à l'aide de l'outil de modélisation MOSUT incluant sur le
            volet agricole, ClimAgri®. Ces outils sont utilisés pour représenter l'agriculture, l'alimentation
            et la forêt d'un territoire, et explorer différentes trajectoires que peuvent prendre ces secteurs
            pour contribuer à l’atténuation du changement climatique et à la résilience face au changement climatique.
          </i>
          <div className={styles.grayWrapper}>
            <div className={styles.h2title}>
              <Image src={ForwardArrow} alt="" />
              <h2>Pour aller plus loin</h2>
            </div>
            <div>
              <p>
                Vous souhaitez approfondir les notions abordées dans cet article ou explorer
                les indicateurs présentés pendant l’atelier ? Voici quelques ressources
                clés mentionnées par les intervenants :
              </p>
              <ul>
                <li>
                  <b>Rapport Transition(s) 2050 - ADEME</b><br></br>
                  Voir le chapitre "Productions agricoles", pages 279 à 281, pour une synthèse des indicateurs de vulnérabilité et résilience.<br></br>
                  <a href="https://www.ademe.fr/les-futurs-en-transition" target="_blank" rel="noreferrer">https://www.ademe.fr/les-futurs-en-transition</a>
                </li>
                <li>
                  <b>Feuilleton Adaptation au changement climatique - ADEME</b><br></br>
                  Chapitre “Agriculture et forêt”, pages 12 à 17.<br></br>
                  <a href="https://www.ademe.fr/les-futurs-en-transition/les-feuilletons" target="_blank" rel="noreferrer">
                    https://www.ademe.fr/les-futurs-en-transition/les-feuilletons
                  </a>
                </li>
                <li>
                  <b>L’outil et la démarche ClimAgri®</b><br></br>
                  Une méthode ADEME pour construire un diagnostic agriculture-climat à l’échelle territoriale.<br></br>
                  <a href="https://agirpourlatransition.ademe.fr/collectivites/amenager-territoire/planification-territoriale/pcaet" target="_blank" rel="noreferrer">
                    https://agirpourlatransition.ademe.fr/collectivites/amenager-territoire/planification-territoriale/pcaet
                  </a>
                  <p>Contact : audrey.trevisiol@ademe.fr</p>
                </li>
                <li>
                  <b>Climadiag Agriculture</b><br></br>
                  Plateforme de projections climatiques et agroclimatiques appliquées au secteur agricole portée par Solagro et Météo France.<br></br>
                  <a href="https://climadiag-agriculture.fr/" target="_blank" rel="noreferrer">
                    https://climadiag-agriculture.fr/
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <EndPageTrigger />
        </div>
      </div>
    </>
  );
};

export default IndicateursDeResilience;
