import Paragraph from "@/components/molecules/Paragraph";
import TitlePage from "@/components/molecules/TitlePage";

const ExperienciesTemplate = () => {
  return (
    <div>
      <TitlePage title={"Expériences"} colors={"red"} />
      <Paragraph
        content={"React, Javascript, Typescript, HTML, SCSS, CSS, Drupal."}
        colors={"white"}
        subTitle={"Hardis Group / 2022 - 2023"}
        caption={`Références: Latyr SOW (latyr.sow@hardis-group.com) Alexandre SALVATORE (0678540247)`}
      />
      <Paragraph
        content={
          "Uneo : Développement from scratch du site web de la mutuelle des forces armées en React. Utilisation de react router, gestion des formulaires avec react hook form, création et intégration des différents composants en scss. Méthode agile en scrum pour la gestion de projet."
        }
        colors={"white"}
      />
      <Paragraph
        content={
          "Comité champagne : Développement from scratch de l’extranet du comité de champagne. Intégration des maquettes en scss/bootstrap, collaboration et conseils avec l’équipe UX/UI. Collaboration avec les équipes back-end Drupal. Méthode agile en scrum pour la gestion de projet."
        }
        colors={"white"}
      />
      <Paragraph
        content={
          "Telemecanique Sensors : Développement from scratch du site web Telemecanique Sensors. Intégration des composants de la maquette en Vue.js avec scss/bootstrap, collaboration et conseils avec l’équipe UX/UI. Collaboration avec les équipes back-end Drupal. Méthode agile en scrum pour la gestion de projet."
        }
        colors={"white"}
      />
      <Paragraph
        content={
          "React, Javascript, PHP, HTML, SCSS, CSS, WordPress, ContentFul."
        }
        colors={"white"}
        subTitle={"INDEXEL / 2021 - 2022"}
        caption={`Références: Alexandre ZITOUNI (0683805532 - azitouni@indexel.com)`}
      />
      <Paragraph
        content={
          "Epsilon : Développement d’un thème WordPress en full custom pour nos clients. Utilisation du plugin ACF pour la création des différents blocs dans WordPress. Intégration avec HTML, SCSS et Javascript pour la partie front-end."
        }
        colors={"white"}
      />
      <Paragraph
        content={
          "Indexel, Certivéa, Leasecom, Capza, Armée du salut, etc… : Maintenance et création des sites web de nos clients avec notre thème custom Epsilon. Suivi et résolution des différents tickets. Développement en PHP avec Wordpress et utilisation de Javascript, HTML et SCSS pour la partie front-end."
        }
        colors={"white"}
      />
      <Paragraph
        content={
          "Cookit : Développement et maintenance d’une solution complète pour la gestion RGPD de nos clients."
        }
        colors={"white"}
      />
    </div>
  );
};

export default ExperienciesTemplate;
