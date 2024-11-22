import Buttons from "@/components/atoms/Buttons";
import BigTitle from "../../atoms/BigTitle";
import Title from "../../atoms/Title";
import styles from "./LandingTemplate.module.scss";

const LandingTemplate = () => {
  return (
    <div className={styles.landingTemplate}>
      <Title>FRANCOIS Julien</Title>
      <BigTitle colors={"white"}>Front-end développeur</BigTitle>
      <Buttons filling={false} link={"/home"} colors={"yellow"}>
        En savoir plus
      </Buttons>
    </div>
  );
};

export default LandingTemplate;
