import styles from "./Text.module.scss";
import { ReactNode } from "react";

type TextProps = {
  colors: "yellow" | "blue" | "red" | "black" | "white";
  children: ReactNode;
};

const Text = ({ colors, children }: TextProps) => {
  const colorsTheme = {
    yellow: "#f8ef00",
    blue: "#00F0FF",
    red: "#FF003C",
    black: "#000000",
    white: "#fafafa",
  };

  return (
    <p className={styles.text} style={{ color: `${colorsTheme[colors]}` }}>
      {children}
    </p>
  );
};

export default Text;
