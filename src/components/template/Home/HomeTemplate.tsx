import Card from "@/components/molecules/Card";
import styles from "./HomeTemplate.module.scss";

const HomeTemplate = () => {
  return (
    <div className={styles.homeTemplate}>
      <Card
        subTitle={"A propos de moi"}
        text={
          "Yesterday’s body count lottery rounded out to a solid ‘n’ sturdy thirty! "
        }
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
        subTitle={"Formation"}
        text={
          "Yesterday’s body count lottery rounded out to a solid ‘n’ sturdy thirty! "
        }
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
        subTitle={"Expertise"}
        text={
          "Yesterday’s body count lottery rounded out to a solid ‘n’ sturdy thirty! "
        }
        cardLink={{
          link: "/expertises",
          text: "Découvrir",
        }}
        colors={"red"}
        textColors={"red"}
        corner={"topRight"}
        fill={false}
      />
      <Card
        subTitle={"Contactez moi"}
        text={
          "Yesterday’s body count lottery rounded out to a solid ‘n’ sturdy thirty! "
        }
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
        corner={"none"}
        fill={false}
      />
      <Card
        subTitle={"Expertise"}
        text={
          "Yesterday’s body count lottery rounded out to a solid ‘n’ sturdy thirty! "
        }
        cardLink={{
          link: "/expertises",
          text: "Découvrir",
        }}
        colors={"blue"}
        textColors={"black"}
        corner={"bottomRight"}
        fill={true}
      />
    </div>
  );
};

export default HomeTemplate;
