import Title from "@/components/atoms/Title";
import styles from "./TitlePage.module.scss";
import Divider from "@/components/atoms/Divider";

type TitlePageProps = {
  title: string;
  colors: "yellow" | "blue" | "red" | "white";
};

const TitlePage = ({ title, colors }: TitlePageProps) => {
  return (
    <div className={styles.titlePage}>
      <Title>{title}</Title>
      <Divider colors={colors} />
    </div>
  );
};

export default TitlePage;
