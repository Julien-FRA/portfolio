import Block from "@/components/Block";
import Hero from "@/components/Hero";
import logoHardisGroup from "../assets/images/hardisgroup.png";

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
            subtitle: "Hardis Group",
            caption: "2 années en tant que développeur web.",
            href: "/",
          },
          {
            src: logoHardisGroup,
            alt: "HardisGroup",
            subtitle: "Hardis Group",
            caption: "2 années en tant que développeur web.",
            href: "/",
          },
        ]}
      />
    </>
  );
}
