import Icon from "@/components/atoms/Icon";
import LinkArrow from "@/components/atoms/LinkArrow";
import styles from "./IconLink.module.scss";

type IconLinkProps = {
  colors: "yellow" | "blue" | "red";
  src: string;
  alt: string;
  link: string;
  textLink: string;
};

const IconLink = ({ colors, src, alt, link, textLink }: IconLinkProps) => {
  return (
    <div className={styles.iconLink}>
      <Icon colors={colors} src={src} alt={alt} />
      <LinkArrow link={link} colors={colors}>
        {textLink}
      </LinkArrow>
    </div>
  );
};

export default IconLink;
