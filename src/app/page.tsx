import Block from "@/components/Block";
import Hero from "@/components/Hero";
import logoHardisGroup from "../assets/images/hardisgroup.png";
import logoIndexel from "../assets/images/indexel-logo.png";
import List from "@/components/List";

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
      <List />
    </>
  );
}
