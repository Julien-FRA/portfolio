import { ChildrenProps } from "@/types/Props";
import styles from "./Caption.module.scss";

const Caption = ({ children }: ChildrenProps) => {
  return <h3 className={styles.caption}>{children}</h3>;
};

export default Caption;
