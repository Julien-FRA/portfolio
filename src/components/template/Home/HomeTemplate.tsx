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
        size={{
          width: "100",
          height: "480",
        }}
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
        size={{
          width: "100",
          height: "330",
        }}
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
        size={{
          width: "100",
          height: "330",
        }}
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
        size={{
          width: "100",
          height: "180",
        }}
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
        size={{
          width: "100",
          height: "330",
        }}
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
        size={{
          width: "100",
          height: "330",
        }}
      />
    </div>
  );
};

export default HomeTemplate;
