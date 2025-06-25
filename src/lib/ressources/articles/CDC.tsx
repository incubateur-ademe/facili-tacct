import AtelierImage from "@/assets/images/article2.png";
import EndPageTrigger from "@/hooks/EndPageTrigger";
import Image from "next/image";
import styles from "./article.module.scss";
;

const CDC = () => {

  return (
    <div>
      <h1>Le cahier des charges, levier pour intégrer la facilitation</h1>
      <div className={styles.textBloc}>
        <p>
          <b>Comment mieux intégrer la facilitation d’ateliers (ou l’intelligence collective) dans les cahiers des charges</b>.
          <i>Merci à Adeline Evain, Julien Sauvage, Elise Morineau et Pierre Lapis pour leur participation active.</i>
        </p>
        <p>
          La “concertation” est devenue un élément incontournable des processus d’élaboration des documents de planification.
          Que ce soit réglementairement obligatoire, un souhait de vos élus ou une proposition de votre part, il s’agit
          d’<u><i>être au clair sur les résultats que vous escomptez obtenir à l’issue de ces ateliers.</i></u> Comme le montre le
          graphique ci-dessous, il existe différents niveaux de participation et chaque type d’ateliers peut être mené en intelligence collective avec des formats différents.
        </p>
        <div className="flex justify-center my-12">
          <Image
            src={AtelierImage}
            alt=""
            width={0}
            height={0}
            sizes="100%"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <h2>Convaincre de l’intérêt de l’intelligence collective.</h2>
        <p>
          Votre hiérarchie est-elle un relais sur lequel vous pouvez compter afin de lancer une démarche collaborative ? Si ce n’est pas le cas,
          construisez votre argumentaire en vous inspirant des éléments ci-dessous.
        </p>
        <b><u>Les avantages de l’intelligence collective :</u></b>
        <ul>
          <li>
            permet de mobiliser, fédérer, embarquer les acteurs du territoire
          </li>
          <li>
            Favorise l’acculturation, l’appropriation des enjeux, la compréhension
          </li>
          <li>
            Permet de convaincre, d’aligner les différents points de vues
          </li>
          <li>
            Créer des espaces d’écoutes et de partage,
          </li>
          <li>
            Créer des ponts : via la transversalité et les différentes expertises mobilisées
          </li>
        </ul>
        <h2>Eléments à intégrer dans votre cahier des charges :</h2>
        <p>
          1️⃣ En préalable, identifier clairement en interne le “pourquoi” vous souhaitez être accompagné
          sur l’intelligence collective. Quels sont les avantages à en retirer pour votre projet?
          Quels sont les ponts à imaginer avec d’autres démarches collaboratives en cours?
        </p>
        <p>
          2️⃣ Ne pas oublier d’exiger explicitement un <b>accompagnement en facilitation / intelligence collective</b>.
          Demander au prestataire de <b>justifier de ses compétences</b> (diplômes ou mention de son expérience passée
          en vous restituant un résultat d’atelier par exemple). Evoquer la possibilité de <b>groupement</b> car
          les BE spécialisés sur l’adaptation au changement climatique ne disposent pas forcément de ce type de profils.
          L’expérience d’un atelier “post-it” n’est pas suffisante.
        </p>
        <p>
          3️⃣ En parallèle, dans le <b>règlement de consultation</b>, mentionner le critère de jugement “<b>expérience en
            intelligence collective / facilitation</b>” ; jouer avec les <b>pondérations</b>.
        </p>
        <p>
          4️⃣ Mentionner le <b>type de participation, le nombre de participants et le nombre d’ateliers souhaités</b>.
          Si vous en avez la possibilité ajouté <b>l’objectif visé</b> (ex. créer l’adhésion autour du diagnostic de
          vulnérabilité, éviter l’éco-anxiété, etc.). Pour ce faire, <b>distiller les mots clefs</b> mentionnés dans
          “les avantages de l’intelligence collective” dans l’ensemble de votre cahier des charges plutôt
          que simplement mentionner la facilitation dans un paragraphe. Cela aura plus de poids.
        </p>
        <p>
          5️⃣ Demander au prestataire de vous expliciter son <b>approche méthodologique</b>, minutieusement choisie,
          personnalisée et adaptée au livrable attendu.
        </p>
        <h2>
          En conclusion
        </h2>
        <p>
          Parce que certains sujets de l’adaptation au CC peuvent avoir un caractère sensible ou émotionnel,
          le facilitateur est formé à interroger, relancer, éviter les hors sujets, cadrer la discussion afin
          qu’elle reste constructive. Il aidera le groupe à identifier et
          résoudre des problèmes complexes, prendre des décisions, s’aligner sur une stratégie, construire à plusieurs, etc.
        </p>
        <p>
          <b>Sa présence vous permettra de ne pas endosser la double casquette d’animateur des réunions
            et de participant en tant qu’expert.</b>
        </p>
        <p>
          Pour autant, le facilitateur n’est que le garant d’une méthodologie basée sur l’écoute active,
          la bienveillance et la neutralité. C’est à vous de fixer en amont avec le facilitateur les
          objectifs et niveaux de participation souhaités.
        </p>
        <p>
          Annoncer des ateliers collaboratifs qui n’en sont pas, qualifier de ‘concertation’ une simple consultation, peut créer
          beaucoup de frustration parmi les participants. Cette dérive (une sorte de ”<i>share-washing</i>”) peut mener à un désengagement de vos partenaires.
        </p>
      </div>
      <EndPageTrigger />
    </div>
  );
};

export default CDC;
