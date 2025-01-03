import styles from "./Footer.module.scss";
import Image from "next/image";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import mail from "../../assets/images/email.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.footerSocial}>
          <li className={styles.footerSocialItem}>
            <a href="#" className={styles.footerSocialLink}>
              <Image src={github} alt={"github"} />
            </a>
          </li>
          <li className={styles.footerSocialItem}>
            <a href="#" className={styles.footerSocialLink}>
              <Image src={linkedin} alt={"linkedin"} />
            </a>
          </li>
          <li className={styles.footerSocialItem}>
            <a href="#" className={styles.footerSocialLink}>
              <Image src={mail} alt={"mail"} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
