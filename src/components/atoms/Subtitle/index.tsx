import { ChildrenProps } from "@/types/Props";
import styles from "./SubTitle.module.scss";

const SubTitle = ({ children }: ChildrenProps) => {
  return <h2 className={styles.subTitle}>{children}</h2>;
};

export default SubTitle;
