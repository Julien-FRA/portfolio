import { ChildrenProps } from "@/types/Props";
import styles from "./SubTitle.module.scss";

const SubTitle = ({ children }: ChildrenProps) => {
  return <p className={styles.subTitle}>{children}</p>;
};

export default SubTitle;
