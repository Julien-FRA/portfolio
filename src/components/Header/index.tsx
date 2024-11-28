"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import mail from "../../assets/images/email.png";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

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
      <a href="#" className={`${styles.headerLogo} large`}>
        Julien FRANCOIS
      </a>
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
            <a href="#" className={styles.headerNavLink}>
              Work
            </a>
          </li>
          <li className={styles.headerItem}>
            <a href="#" className={styles.headerLink}>
              Projects
            </a>
          </li>
          <li className={styles.headerItem}>
            <a href="#" className={styles.headerLink}>
              About
            </a>
          </li>
        </ul>
        <ul className={styles.headerSocial}>
          <li className={styles.headerSocialItem}>
            <a href="#" className={styles.headerSocialLink}>
              <Image src={github} alt={"github"} />
            </a>
          </li>
          <li className={styles.headerSocialItem}>
            <a href="#" className={styles.headerSocialLink}>
              <Image src={linkedin} alt={"linkedin"} />
            </a>
          </li>
          <li className={styles.headerSocialItem}>
            <a href="#" className={styles.headerSocialLink}>
              <Image src={mail} alt={"mail"} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
