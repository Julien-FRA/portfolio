import ImageText from "@/components/molecules/ImageText";
import TitlePage from "@/components/molecules/TitlePage";
import envify from "../../../../public/logo.svg";
import react from "../../../../public/react.svg";
import book from "../../../../public/book.svg";
import ecommerce from "../../../../public/ecommerce.svg";
import leetcode from "../../../../public/leetcode.svg";

const ProjectTemplate = () => {
  return (
    <>
      <TitlePage title={"Projets"} colors={"blue"} />
      <ImageText
        src={envify}
        alt={"Envify"}
        colors={"yellow"}
        colorText={"white"}
        subtitle={"Envify"}
        caption={"React, Next, Typescript, Mantine, react-query, fetch."}
        text={
          "Application Saas qui a pour objectif la configuration d’instances cloud. Développement de la partie front-end en Next.js. Utilisation de fetch et react-query pour nos différents appels API. NextAuth pour la gestion de l’authentification. Implémentation de Typescript pour le typage des variables, constantes, props… Mantine pour la partie UI de l’application. Hooks personnalisés pour la gestion des formulaires. Mise en place de tests avec Jest. Création et test des composants avec Storybook."
        }
        link={"https://github.com/Julien-FRA/ENVIFY-FRONT"}
        textLink={"En savoir plus"}
      />
      <ImageText
        src={react}
        alt={"Portfolio"}
        colors={"blue"}
        colorText={"white"}
        subtitle={"Portfolio"}
        caption={"React, Next, Typescript."}
        text={`Développement de mon portfolio en Nextjs. Création d'un design sur figma avec une inspiration Cyberpunk. Architecture "atomic design" pour la création des composants. Scss pour l'intégration et le style du site.`}
        link={"https://github.com/Julien-FRA/portfolio"}
        textLink={"En savoir plus"}
      />
      <ImageText
        src={leetcode}
        alt={"Algo"}
        colors={"red"}
        colorText={"white"}
        subtitle={"Algorithme"}
        caption={"Typescript."}
        text={`Réalisation d'algorithmes sur la plateforme "Leetcode" en Typescript.`}
        link={"https://github.com/Julien-FRA/kata-algo"}
        textLink={"En savoir plus"}
      />
      <ImageText
        src={book}
        alt={"Blog"}
        colors={"yellow"}
        colorText={"white"}
        subtitle={"Blog"}
        caption={"React, Typescript, Node, Express, fetch."}
        text={
          "Création d'un blog. Développement avec Node.js, Typescript et Express.js pour la partie back-end. Architecture MVC. JSON Web Token pour la gestion de l’authentification. Développement avec React et Typescript pour la partie front-end. Utilisation de fetch. Routing avec react-router-dom. Gestion des formulaires avec react-hook-form."
        }
        link={"https://github.com/Julien-FRA/kata-blog"}
        textLink={"En savoir plus"}
      />
      <ImageText
        src={ecommerce}
        alt={"Ecommerce"}
        colors={"blue"}
        colorText={"white"}
        subtitle={"E-commerce"}
        caption={"React, Typescript, Node, Express, fetch."}
        text={
          "Création d'un petit site de e-commerce. Développement avec Node.js, Typescript et Express.js pour la partie back-end. Architecture MVC. JSON Web Token pour la gestion de l’authentification. Développement avec React et Typescript pour la partie front-end. Utilisation de fetch. Routing avec react-router-dom. Gestion des formulaires avec react-hook-form."
        }
        link={"https://github.com/Julien-FRA/kata-ecommerce"}
        textLink={"En savoir plus"}
      />
    </>
  );
};

export default ProjectTemplate;
