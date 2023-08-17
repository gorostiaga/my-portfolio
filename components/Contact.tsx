import Image from "next/image";
import Link from "next/link";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact_section}>
      <div className={styles.container}>
        <div className={styles.contact_content}>
          <div className={styles.contact_content__title}>
            <h3>Contact!</h3>
            <p>I am just a one-click away from you. Hit me! 👇</p>
          </div>
          <div className={styles.contact_content__info}>
            <span>
              <Image
                src="/images/email-icon.svg"
                alt="icon"
                width="45"
                height="45"
                title="Java"
              />
            </span>
            <div className={styles.contact_content__info__mail}>
              <h3>Mail</h3>
              <Link href="mailto:gorostiagaj@gmail.com">
                gorostiagaj@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
