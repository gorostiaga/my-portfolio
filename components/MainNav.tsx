import styles from "@/styles/MainNav.module.scss";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useState } from "react";

import { roboto } from "@/utils/fonts";

const MainNav = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const mobileNavHandler = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    if (event.target instanceof HTMLDivElement) setIsMobileNav(false);
    if (event.target instanceof HTMLButtonElement) setIsMobileNav(true);
  };

  return (
    <div>
      {isMobileNav && (
        <div className={styles.backdrop} onClick={mobileNavHandler} />
      )}
      {isMobileNav && <MobileNav />}
      <header className={`${styles.main_header} ${roboto.className}`}>
        <nav className={styles["main-nav"]}>
          <div>
            <button className={styles.toggle_button} onClick={mobileNavHandler}>
              <span className={styles.toggle_button__bar}></span>
              <span className={styles.toggle_button__bar}></span>
              <span className={styles.toggle_button__bar}></span>
            </button>
          </div>
          <div className={styles["main-nav__title"]}>gorostiaga.dev</div>
          <div className={styles["main-nav__menu"]}>
            <Link href="#introduction" className={styles["menu__item"]}>
              Home
            </Link>
            <Link href="#projectsPM" className={styles["menu__item"]}>
              Project Management
            </Link>
            <Link href="#projectsSE" className={styles["menu__item"]}>
              Software Engineering
            </Link>
            <Link href="#contact" className={styles["menu__item"]}>
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MainNav;
