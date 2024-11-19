import SubTitle from "@/components/atoms/Subtitle";
import styles from "./Paragraph.module.scss";
import Caption from "@/components/atoms/Caption";
import Text from "@/components/atoms/Text";

type ParagraphProps = {
  subTitle: string;
  caption?: string;
  content: string;
  colors: "yellow" | "blue" | "red" | "black" | "white";
};

const Paragraph = ({ subTitle, caption, content, colors }: ParagraphProps) => {
  return (
    <div className={styles.paragraph}>
      <SubTitle colors={colors}>{subTitle}</SubTitle>
      <Caption colors={colors}>{caption}</Caption>
      <Text colors={colors}>{content}</Text>
    </div>
  );
};

export default Paragraph;
