import { ChildrenProps } from "@/types/Props";
import styles from "./Title.module.scss";

const Title = ({ children }: ChildrenProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
