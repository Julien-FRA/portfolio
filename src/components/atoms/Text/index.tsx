import { ChildrenProps } from "@/types/Props";
import styles from "./Text.module.scss";

const Text = ({ children }: ChildrenProps) => {
  return <p className={styles.text}>{children}</p>;
};

export default Text;
