import Image from "next/image";
import meImage from "@/public/images/me.jpg";
import Link from "next/link";

import styles from "@/styles/Introduction.module.scss";
import { roboto } from "@/utils/fonts";
import { techStackData, socialLinks } from "@/config/images";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className={`${styles.intro__section} ${roboto.className}`}
    >
      <div className={styles.container}>
        <div className={styles.intro__main}>
          <div className={styles.image_me}>
            <Image
              src={meImage}
              placeholder="blur"
              alt="me"
              width="250"
              height="250"
            />
          </div>
          <div className={styles.intro__text}>
            <h1>Software Engineer & Project Manager</h1>
            <p>
              Hi!! I am just a geek just who loves to learn something new
              everyday, I always think that Software Engineering is a kind of
              Art for creating new things to change the world!!
            </p>
            <span>
              {socialLinks.map((link) => (
                <Link key={link.alt} href={link.url} target="_blank">
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    width="40"
                    height="40"
                  />
                </Link>
              ))}
            </span>
          </div>
        </div>
        <div className={styles.skills}>
          <p>Tech Stack</p>
          <div className={styles.skills__logos}>
            <ul>
              {techStackData.map((tech) => (
                <li key={tech.name}>
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width="45"
                    height="45"
                    title={tech.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
