import styles from "@/styles/MainNav.module.scss";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useState } from "react";

import { roboto } from "@/utils/fonts";

const MainNav = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const mobileNavHandler = (
    event: React.MouseEvent<
      HTMLDivElement | HTMLButtonElement | HTMLSpanElement
    >
  ) => {
    if (event.target instanceof HTMLDivElement) setIsMobileNav(false);
    if (
      event.target instanceof HTMLButtonElement ||
      event.target instanceof HTMLSpanElement
    )
      setIsMobileNav(true);
  };

  const mobileClickHandler = () => {
    setIsMobileNav(false);
  };

  return (
    <div>
      {isMobileNav && (
        <div className={styles.backdrop} onClick={mobileNavHandler} />
      )}
      {isMobileNav && <MobileNav onClickHandler={mobileClickHandler} />}
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
            <Link
              href="#introduction"
              className={styles["menu__item"]}
              scroll={false}
            >
              Home
            </Link>
            <Link
              href="#projectsPM"
              className={styles["menu__item"]}
              scroll={false}
            >
              Project Management
            </Link>
            <Link
              href="#projectsSE"
              className={styles["menu__item"]}
              scroll={false}
            >
              Software Engineering
            </Link>
            <Link
              href="#contact"
              className={styles["menu__item"]}
              scroll={false}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MainNav;
