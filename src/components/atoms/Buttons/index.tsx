import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Buttons.module.scss";

type ButtonProps = {
  children: ReactNode;
  filling: boolean;
  link: string;
  colors: "yellow" | "blue" | "red" | "black" | "white";
};

const Buttons = ({ children, filling, link, colors }: ButtonProps) => {
  return filling ? (
    <Link
      href={link}
      className={`${styles.buttons} ${styles[colors]} ${styles.filling}`}
    >
      {children}
      <span />
    </Link>
  ) : (
    <Link href={link} className={`${styles.buttons} ${styles[colors]}`}>
      {children}
      <span />
    </Link>
  );
};

export default Buttons;
