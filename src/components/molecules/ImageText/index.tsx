import LinkArrow from "@/components/atoms/LinkArrow";
import styles from "./ImageText.module.scss";
import SubTitle from "@/components/atoms/Subtitle";
import Caption from "@/components/atoms/Caption";
import Text from "@/components/atoms/Text";
import Logo from "@/components/atoms/Logo";

type ImageTextProps = {
  src: string;
  alt: string;
  colors: "yellow" | "blue" | "red";
  colorText: "yellow" | "blue" | "red" | "black" | "white";
  subtitle?: string;
  caption?: string;
  text: string;
  link: string;
  textLink: string;
};

const ImageText = ({
  src,
  alt,
  colors,
  colorText,
  subtitle,
  caption,
  text,
  link,
  textLink,
}: ImageTextProps) => {
  return (
    <div className={styles.imageText}>
      <div className={styles.leftDiv}>
        <Logo colors={colors} src={src} alt={alt} />
      </div>
      <div className={styles.rightDiv}>
        <SubTitle colors={colorText}>{subtitle}</SubTitle>
        <Caption colors={colorText}>{caption}</Caption>
        <Text colors={colorText}>{text}</Text>
        <LinkArrow link={link} colors={colors}>
          {textLink}
        </LinkArrow>
      </div>
    </div>
  );
};

export default ImageText;
