import Link from "next/link";
import { ReactNode } from "react";
import styles from "./LinkArrow.module.scss";

type LinkArrowProps = {
  children: ReactNode;
  link: string;
  colors: "yellow" | "blue" | "red" | "black" | "white";
};
const LinkArrow = ({ children, link, colors }: LinkArrowProps) => {
  return (
    <Link href={link} className={`${styles.linkArrow} ${styles[colors]}`}>
      {children}
    </Link>
  );
};

export default LinkArrow;
