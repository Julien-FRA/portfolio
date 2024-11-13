import styles from "./BigTitle.module.scss";
import { ReactNode } from "react";

type BigTitleProps = {
  colors: "yellow" | "blue" | "red" | "black" | "white";
  children: ReactNode;
};

const BigTitle = ({ colors, children }: BigTitleProps) => {
  const colorsTheme = {
    yellow: "#f8ef00",
    blue: "#00F0FF",
    red: "#FF003C",
    black: "#000000",
    white: "#fafafa",
  };

  return (
    <div
      className={styles.bigTitle}
      style={{ color: `${colorsTheme[colors]}` }}
    >
      {children}
    </div>
  );
};

export default BigTitle;
