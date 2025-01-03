import Block from "@/components/Block";
import Hero from "@/components/Hero";
import List from "@/components/List";
import Stack from "@/components/Stack";
import logoHardisGroup from "../assets/images/hardisgroup.png";
import logoIndexel from "../assets/images/indexel-logo.png";
import nextjs from "../assets/images/nextjs-icon.svg";
import react from "../assets/images/react.svg";
import typescript from "../assets/images/typescript-icon.svg";
import nodejs from "../assets/images/nodejs-icon.svg";
import sass from "../assets/images/sass.svg";
import tailwind from "../assets/images/tailwindcss-icon.svg";

export default function Home() {
  return (
    <>
      <Hero
        location={"Based in Paris"}
        title={"Hi, this is Julien"}
        subtitle={[
          { normal: "Developer", bold: "Front-end/Fullstack Javascript" },
          { normal: "Currently", bold: "Looking for work" },
          { normal: "Previously", bold: "Hardis Group, Indexel" },
        ]}
      />
      <Block
        title={"Experiences"}
        items={[
          {
            src: logoHardisGroup,
            alt: "HardisGroup",
            subtitle: "Hardis Group - 2022/2023",
            caption: "React, Javascript, Typescript, HTML, SCSS, CSS, Drupal.",
            href: "/",
          },
          {
            src: logoIndexel,
            alt: "Indexel",
            subtitle: "Indexel - 2021/2022",
            caption:
              "React, Javascript, PHP, HTML, SCSS, CSS, WordPress, ContentFul.",
            href: "/",
          },
        ]}
      />
      <List
        title={"Projects"}
        items={[
          {
            subtitle: "Envify",
            caption: "Next.js - Typescript - Mantine",
            content: `Application Saas qui a pour objectif la configuration
                d’instances cloud. Développement de la partie front-end en
                Next.js. Utilisation de fetch et react-query pour nos différents
                appels API. NextAuth pour la gestion de l’authentification.
                Implémentation de Typescript pour le typage des variables,
                constantes, props... Mantine pour la partie UI de l’application.
                Hooks personnalisés pour la gestion des formulaires. Mise en
                place de tests avec Jest. Création et test des composants avec
                Storybook.`,
            href: "/",
          },
          {
            subtitle: "Katas",
            caption: "Typescript - React - Node.js - Express.js",
            content: `Création de sites e-commerce et blog. Développement avec
                Node.js, Typescript et Express.js pour la partie back-end.
                Architecture MVC. JSON Web Token pour la gestion de
                l’authentification. Développement avec React et Typescript pour
                la partie front-end. Utilisation de fetch. Routing avec
                react-router-dom. Gestion des formulaires avec react-hook-form.`,
            href: "/",
          },
          {
            subtitle: "Algorithmes",
            caption: "Typescript - Jest",
            content: `Résolution de plusieurs algorithmes sur Leetcode avec
                Typescript. Utilisation des boucles for, while, map()...
                Conditions if et else... Implémentation de Jest pour tester les
                algorithmes.`,
            href: "/",
          },
        ]}
      />
      <Stack
        title={"Technologies"}
        items={[
          { src: react, alt: "reactjs", techno: "Reactjs" },
          { src: nextjs, alt: "nextjs", techno: "Nextjs" },
          { src: nodejs, alt: "nodejs", techno: "Nodejs" },
          { src: typescript, alt: "typescript", techno: "Typescript" },
          { src: sass, alt: "sass", techno: "Sass" },
          { src: tailwind, alt: "tailwind", techno: "TailwindCSS" },
        ]}
      />
    </>
  );
}
