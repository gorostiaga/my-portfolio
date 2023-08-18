import styles from "@/styles/MobileNav.module.scss";
import Link from "next/link";
import { roboto } from "@/utils/fonts";

type MobileNavProps = {
  onClickHandler: () => void;
};

const MobileNav: React.FC<MobileNavProps> = (props) => {
  const clickHandler = () => {
    props.onClickHandler();
  };

  return (
    <nav className={styles["container"]}>
      <div className={`${styles["mobile-nav__items"]} ${roboto.className}`}>
        <ul className={styles["mobile-nav__items"]}>
          <li className={styles["mobile-nav__item"]}>
            <Link href="#introduction" onClick={clickHandler} scroll={false}>
              Home
            </Link>
          </li>
          <li className={styles["mobile-nav__item"]}>
            <Link href="#projectsPM" onClick={clickHandler} scroll={false}>
              Project Management
            </Link>
          </li>
          <li className={styles["mobile-nav__item"]}>
            <Link href="#projectsSE" onClick={clickHandler} scroll={false}>
              Software Engineering
            </Link>
          </li>
          <li className={styles["mobile-nav__item"]}>
            <Link href="#contact" onClick={clickHandler} scroll={false}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
