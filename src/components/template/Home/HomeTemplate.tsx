import Card from "@/components/molecules/Card";
import styles from "./HomeTemplate.module.scss";

const HomeTemplate = () => {
  return (
    <div className={styles.homeTemplate}>
      <Card
        subTitle={"A propos de moi"}
        text={"Je me présente..."}
        cardLink={{
          link: "/about",
          text: "Découvrir",
        }}
        colors={"white"}
        textColors={"black"}
        corner={"topLeft"}
        fill={true}
      />
      <Card
        subTitle={"Formations"}
        text={"Mon parcours scolaire."}
        cardLink={{
          link: "/studies",
          text: "Découvrir",
        }}
        colors={"yellow"}
        textColors={"black"}
        corner={"none"}
        fill={true}
      />
      <Card
        subTitle={"Experiences"}
        text={"Mon parcours en entreprise et mes expériences pro."}
        cardLink={{
          link: "/experiencies",
          text: "Découvrir",
        }}
        colors={"red"}
        textColors={"red"}
        corner={"topRight"}
        fill={false}
      />
      <Card
        subTitle={"Contactez moi"}
        text={"Mes réseaux sociaux."}
        cardLink={{
          link: "/contact",
          text: "Me contacter",
        }}
        colors={"yellow"}
        textColors={"yellow"}
        corner={"bottomLeft"}
        fill={false}
      />
      <Card
        subTitle={"Projets"}
        text={
          "Yesterday’s body count lottery rounded out to a solid ‘n’ sturdy thirty! "
        }
        cardLink={{
          link: "/projects",
          text: "Découvrir",
        }}
        colors={"blue"}
        textColors={"blue"}
        corner={"bottomRight"}
        fill={false}
      />
    </div>
  );
};

export default HomeTemplate;
