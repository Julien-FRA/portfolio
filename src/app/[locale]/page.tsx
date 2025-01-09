import Block from "@/components/Block";
import Hero from "@/components/Hero";
import List from "@/components/List";
import Stack from "@/components/Stack";
import logoHardisGroup from "../../assets/images/hardisgroup.png";
import logoIndexel from "../../assets/images/indexel-logo.png";
import nextjs from "../../assets/images/nextjs-icon.svg";
import react from "../../assets/images/react.svg";
import typescript from "../../assets/images/typescript-icon.svg";
import nodejs from "../../assets/images/nodejs-icon.svg";
import sass from "../../assets/images/sass.svg";
import tailwind from "../../assets/images/tailwindcss-icon.svg";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <Hero
        location={t("Hero.location")}
        title={t("Hero.title")}
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
            href: "/hardis",
          },
          {
            src: logoIndexel,
            alt: "Indexel",
            subtitle: "Indexel - 2021/2022",
            caption:
              "React, Javascript, PHP, HTML, SCSS, CSS, WordPress, ContentFul.",
            href: "/indexel",
          },
        ]}
      />
      <List
        title={"Projects"}
        items={[
          {
            subtitle: "Envify",
            caption: "Next.js - Typescript - Mantine",
            content: `Saas application for configuring
                cloud instances. Development of the front-end in
                Next.js. Use of fetch and react-query for our various
                API calls. NextAuth for authentication management.
                Implementation of Typescript for variable typing,
                constants, props, etc. Mantine for the application's UI.
                Custom hooks for managing forms. Implementation
                tests with Jest. Creating and testing components with
                Storybook.`,
            href: "/",
          },
          {
            subtitle: "Katas",
            caption: "Typescript - React - Node.js - Express.js",
            content: `Creation of e-commerce sites and blogs. Development with
                Node.js, Typescript and Express.js for the back-end.
                MVC architecture. JSON Web Token for authentication
                authentication. Development with React and Typescript for the
                the front-end. Use of fetch. Routing with
                react-router-dom. Form management with react-hook-form.`,
            href: "/",
          },
          {
            subtitle: "Algorithmes",
            caption: "Typescript - Jest",
            content: `Solving many algorithms on Leetcode with
                Typescript. Using for, while and map() loops...
                if and else conditions... Implementation of Jest to test
                algorithms.`,
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
