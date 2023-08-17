import styles from "./MobileNav.module.css";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className={styles.mobile_nav}>
      <ul className={styles.mobile_nav__items}>
        <li className={styles.mobile_nav__item}>
          <Link href="#">About</Link>
        </li>
        <li className={styles.mobile_nav__item}>
          <Link href="#">About</Link>
        </li>
        <li className={styles.mobile_nav__item}>
          <Link href="#">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
