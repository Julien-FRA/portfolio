import styles from "./Caption.module.scss";
import { ReactNode } from "react";

type CaptionProps = {
  colors: "yellow" | "blue" | "red" | "black" | "white";
  children: ReactNode;
};

const Caption = ({ colors, children }: CaptionProps) => {
  const colorsTheme = {
    yellow: "#f8ef00",
    blue: "#00F0FF",
    red: "#FF003C",
    black: "#000000",
    white: "#fafafa",
  };

  return (
    <h3 className={styles.caption} style={{ color: `${colorsTheme[colors]}` }}>
      {children}
    </h3>
  );
};

export default Caption;
