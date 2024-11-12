import styles from "./Divider.module.scss";

type DividerProps = {
  colors: "yellow" | "blue" | "red";
};

const Divider = ({ colors }: DividerProps) => {
  return <span className={`${styles.divider} ${styles[colors]}`} />;
};

export default Divider;
