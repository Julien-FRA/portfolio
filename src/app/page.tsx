import Hero from "@/components/Hero";

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
    </>
  );
}
