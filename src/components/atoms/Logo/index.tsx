import Image from "next/image";
import styles from "./Logo.module.scss";

type LogoProps = {
  colors: "yellow" | "blue" | "red";
  src: string;
  alt: string;
};

const Logo = ({ colors, src, alt }: LogoProps) => {
  return (
    <Image src={src} alt={alt} className={`${styles.icon} ${styles[colors]}`} />
  );
};

export default Logo;
