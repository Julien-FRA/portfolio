"use client";
import styles from "./Header.module.scss";
import { useState } from "react";
import LinkArrow from "@/components/atoms/LinkArrow";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const active = openMenu ? "active" : "";

  return (
    <div className={styles.header}>
      <div
        onClick={toggleMenu}
        className={`${styles.burger} ${styles[active]}`}
      >
        <span className={styles.top} />
        <span className={styles.middle} />
        <span className={styles.bottom} />
      </div>
      <nav className={`${styles.nav} ${styles[active]}`}>
        <ul>
          <li>
            <LinkArrow link={"/home"} colors={"black"}>
              Acceuil
            </LinkArrow>
          </li>
          <li>
            <LinkArrow link={"/about"} colors={"black"}>
              A propos
            </LinkArrow>
          </li>
          <li>
            <LinkArrow link={"/studies"} colors={"black"}>
              Formations
            </LinkArrow>
          </li>
          <li>
            <LinkArrow link={"/experiencies"} colors={"black"}>
              Experiences
            </LinkArrow>
          </li>
          <li>
            <LinkArrow link={"/projects"} colors={"black"}>
              Projets
            </LinkArrow>
          </li>
          <li>
            <LinkArrow link={"/expertises"} colors={"black"}>
              Expertises
            </LinkArrow>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
