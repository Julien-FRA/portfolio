import styles from "./Footer.module.scss";
import Image from "next/image";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import mail from "../../assets/images/email.png";
import cv from "../../assets/images/cv.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.footerSocial}>
          <li className={styles.footerSocialItem}>
            <a
              href="https://github.com/Julien-FRA"
              target="_blank"
              className={styles.footerSocialLink}
            >
              <Image src={github} alt={"github"} />
            </a>
          </li>
          <li className={styles.footerSocialItem}>
            <a
              href="https://www.linkedin.com/in/julien-francois-07140617a/"
              target="_blank"
              className={styles.footerSocialLink}
            >
              <Image src={linkedin} alt={"linkedin"} />
            </a>
          </li>
          <li className={styles.footerSocialItem}>
            <a
              href="mailto:julien.fra3@gmail.com"
              className={styles.footerSocialLink}
            >
              <Image src={mail} alt={"mail"} />
            </a>
          </li>
          <li className={styles.footerSocialItem}>
            <a
              href="./CV_Julien_Francois_Fullstack.pdf"
              target="_blank"
              className={styles.footerSocialLink}
            >
              <Image src={cv} alt={"cv"} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
