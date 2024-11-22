import SubTitle from "@/components/atoms/Subtitle";
import Text from "@/components/atoms/Text";
import styles from "./Card.module.scss";
import LinkArrow from "@/components/atoms/LinkArrow";

type CardProps = {
  subTitle: string;
  text: string;
  cardLink: {
    link: string;
    text: string;
  };
  colors: "yellow" | "blue" | "red" | "black" | "white";
  textColors: "yellow" | "blue" | "red" | "black" | "white";
  corner: "topLeft" | "topRight" | "bottomRight" | "bottomLeft" | "none";
  fill: boolean;
};

const Card = ({
  subTitle,
  text,
  cardLink,
  colors,
  textColors,
  corner,
  fill,
}: CardProps) => {
  return (
    <div
      className={`${styles.card} ${styles[corner]} ${styles[colors]} ${
        fill ? `${styles.fill}` : ""
      }`}
    >
      <div className={`${styles.textCard}`}>
        <span className={`${styles[textColors]}`} />
        <SubTitle colors={textColors}>{subTitle}</SubTitle>
        <Text colors={textColors}>{text}</Text>
      </div>
      <LinkArrow link={cardLink.link} colors={textColors}>
        {cardLink.text}
      </LinkArrow>
    </div>
  );
};

export default Card;
