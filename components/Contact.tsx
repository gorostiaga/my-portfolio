import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Contact.module.scss";
import emailIcon from "@/public/images/email.svg";
import { roboto } from "@/utils/fonts";

function Contact() {
  return (
    <section
      id="contact"
      className={`${styles.contact_section} ${roboto.className}`}
    >
      <div className={styles.container}>
        <div className={styles.contact_content}>
          <div className={styles.contact_content__title}>
            <h3>Contact!</h3>
            <p>I am just a one-click away from you. Hit me! 👇</p>
          </div>
          <div className={styles.contact_content__info}>
            <span>
              <Image
                src={emailIcon}
                alt="icon"
                width="45"
                height="45"
                title="email"
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
