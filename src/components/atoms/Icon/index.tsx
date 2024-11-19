import Image from "next/image";
import styles from "./Icon.module.scss";

type IconProps = {
  colors: "yellow" | "blue" | "red";
  src: string;
  alt: string;
};

const Icon = ({ colors, src, alt }: IconProps) => {
  return (
    <Image src={src} alt={alt} className={`${styles.icon} ${styles[colors]}`} />
  );
};

export default Icon;
