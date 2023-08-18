import Image from "next/image";
import Link from "next/link";
import { roboto } from "@/utils/fonts";

import styles from "@/styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer_section}>
      <div className={roboto.className}>
        <div className={styles.footer_content}>
          <h3>Copyright © 2023. All rights are reserved</h3>
          <div className={styles.footer_content__social}>
            <Link href="https://github.com/gorostiaga" target="_blank">
              <Image
                src="/images/github-mark.png"
                alt="icon"
                width="30"
                height="30"
              />
            </Link>
            <Link href="https://linkedin.com/in/gorostiaga" target="_blank">
              <Image
                src="/images/linkedin-icon.png"
                alt="icon"
                width="30"
                height="30"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
