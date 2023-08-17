import Image from "next/image";
import img from "../public/images/me.png";
import Link from "next/link";

import styles from "@/styles/Introduction.module.scss";
import { roboto } from "@/utils/fonts";

const Introduction = () => {
  return (
    <section className={`${styles.intro__section} ${roboto.className}`}>
      <div className={styles.container}>
        <div className={styles.intro__main}>
          <div className={styles.image_me}>
            <Image
              src={img}
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
            </span>
          </div>
        </div>
        <div className={styles.skills}>
          <p>Tech Stack</p>
          <div className={styles.skills__logos}>
            <ul>
              <li>
                <Image
                  src="/images/java-icon.svg"
                  alt="icon"
                  width="45"
                  height="45"
                  title="Java"
                />
              </li>
              <li>
                <Image
                  src="/images/springio-icon.svg"
                  alt="icon"
                  width="45"
                  height="45"
                  title="Spring"
                />
              </li>
              <li>
                <Image
                  src="/images/js-icon.svg"
                  alt="icon"
                  width="45"
                  height="45"
                  title="Javascript"
                />
              </li>
              <li>
                <Image
                  src="/images/react-icon.svg"
                  alt="icon"
                  width="45"
                  height="45"
                  title="React.js"
                />
              </li>
              <li>
                <Image
                  src="/images/next-icon.svg"
                  alt="icon"
                  width="45"
                  height="45"
                  title="Next.js"
                />
              </li>
              <li>
                <Image
                  src="/images/css-icon.svg"
                  alt="icon"
                  width="45"
                  height="45"
                  title="CSS"
                />
              </li>
              <li>
                <Image
                  src="/images/scss-icon.svg"
                  alt="icon"
                  width="45"
                  height="45"
                  title="Bootstrap"
                />
              </li>
              <li>
                <Image
                  src="/images/bootstrap-icon.svg"
                  alt="icon"
                  width="45"
                  height="45"
                  title="Bootstrap"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
