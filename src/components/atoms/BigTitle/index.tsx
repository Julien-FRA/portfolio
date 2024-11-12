import { ChildrenProps } from "@/types/Props";
import styles from "./BigTitle.module.scss";

const BigTitle = ({ children }: ChildrenProps) => {
  return <div className={styles.bigTitle}>{children}</div>;
};

export default BigTitle;
