import styles from "./SubTitle.module.scss";
import { ReactNode } from "react";

type SubTitleProps = {
  colors: "yellow" | "blue" | "red" | "black" | "white";
  children: ReactNode;
};

const SubTitle = ({ colors, children }: SubTitleProps) => {
  const colorsTheme = {
    yellow: "#f8ef00",
    blue: "#00F0FF",
    red: "#FF003C",
    black: "#000000",
    white: "#fafafa",
  };

  return (
    <h2 className={styles.subTitle} style={{ color: `${colorsTheme[colors]}` }}>
      {children}
    </h2>
  );
};

export default SubTitle;
