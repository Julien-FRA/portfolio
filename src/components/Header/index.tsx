"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import mail from "../../assets/images/email.png";
import cv from "../../assets/images/cv.png";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Link from "next/link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpenMenu(false));

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const active = openMenu ? "active" : "";

  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/" className={`${styles.headerLogo} large`}>
          Julien FRANCOIS
        </Link>
        <div
          onClick={toggleMenu}
          className={`${styles.burgerMenu} ${styles[active]}`}
        >
          <span className={styles.top}></span>
          <span className={styles.middle}></span>
          <span className={styles.bottom}></span>
        </div>
        <nav className={`${styles[active]}`}>
          <ul className={styles.headerNav}>
            <li className={styles.headerNavItem}>
              <a href="#experiences" className={styles.headerNavLink}>
                Experiences
              </a>
            </li>
            <li className={styles.headerItem}>
              <a href="#projects" className={styles.headerLink}>
                Projects
              </a>
            </li>
            <li className={styles.headerItem}>
              <a href="#technologies" className={styles.headerLink}>
                Technologies
              </a>
            </li>
          </ul>
          <ul className={styles.headerSocial}>
            <li className={styles.headerSocialItem}>
              <a
                href="https://github.com/Julien-FRA"
                target="_blank"
                className={styles.headerSocialLink}
              >
                <Image src={github} alt={"github"} />
              </a>
            </li>
            <li className={styles.headerSocialItem}>
              <a
                href="https://www.linkedin.com/in/julien-francois-07140617a/"
                target="_blank"
                className={styles.headerSocialLink}
              >
                <Image src={linkedin} alt={"linkedin"} />
              </a>
            </li>
            <li className={styles.headerSocialItem}>
              <a
                href="mailto:julien.fra3@gmail.com"
                className={styles.headerSocialLink}
              >
                <Image src={mail} alt={"mail"} />
              </a>
            </li>
            <li className={styles.headerSocialItem}>
              <a href="./CV_Julien_Francois_Fullstack.pdf" target="_blank">
                <Image src={cv} alt={"cv"} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
