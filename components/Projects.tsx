import styles from "@/styles/Projects.module.scss";
import image1 from "@/public/images/projects/1.jpg";
import image2 from "@/public/images/projects/2.jpg";
import image3 from "@/public/images/projects/3.jpg";
import paveImage from "@/public/images/projects/pave.png";
import eprepImage from "@/public/images/projects/eprep.png";
import fincaImage from "@/public/images/projects/finca.png";
import compass from "@/public/images/projects/compass.jpg";
import artImage from "@/public/images/projects/art.jpg";
import ParallaxImage from "./ParallaxImage";
import { roboto } from "@/utils/fonts";
import Image from "next/image";

import ProjectItem from "./ProjectItem";

function Projects() {
  const marcusAurelius = {
    url: image1.src,
    text: "Be tolerant with others and strict with yourself",
    author: "Marcus Aurelius",
  };

  const laoTzu = {
    url: image2.src,
    text: "The journey of a thousand miles begins with one step",
    author: "Lao Tzu",
  };

  const ryanHoliday = {
    url: image3.src,
    text: "The obstable is the Way",
    author: "Ryan Holiday",
  };

  const pavePortal = {
    link: "https://pave.dhcs.ca.gov/sso/login.do?",
    image: paveImage,
    title:
      "California Provider Application and Validation for Enrollment Portal.",
    description:
      "An advanced System on Production known as Know Your Provider - KYP which is an interactive, web-based solution for the provider types who enroll with Medi-Cal through Provider Enrollment Division's - PED and manage their Medi-Cal accounts securely online.",
    stack: ["Java Spring", "MongoDB", "SQL Server", "AWS"],
  };

  const ePrep = {
    link: "https://pave.dhcs.ca.gov/sso/login.do?",
    image: eprepImage,
    title:
      "Maryland Medicaid's electronic Provider Revalidation and Enrollment Portal.",
    description:
      "An advanced System on Production known as Know Your Provider - KYP which is an interactive, web-based solution for provider enrollment, re-enrollment, revalidation, information updates and demographic changes.",
    stack: ["Java Spring", "MongoDB", "SQL Server", "AWS"],
  };

  const finca = {
    link: "#",
    image: fincaImage,
    title: "La Finca Eco Lodge Hotel.",
    description:
      "A platform where allows the user to book all the available rooms and cabins letting them know which dates are not available for any room. The Payment is online so that the booking process in fully automated.",
    stack: ["Java Spring", "React.js", "MySql", "SCSS"],
    repo: "https://github.com/gorostiaga/hotel-site-v2",
  };

  const imageProjectsSE = {
    backgroundImage: `url(${artImage.src})`,
  };

  return (
    <section className={styles["projects-container"]}>
      <div
        id="projectsPM"
        className={`${styles["title-container"]} ${roboto.className}`}
      >
        <div className={styles["title-container__title"]}>
          <h3>Portfolio as Project Manager</h3>
        </div>
        <div className={styles["title-text"]}>
          <div className={styles["title-text__p"]}>
            <p>
              Each person inside a team has amazing skills to make each daily
              goal possible. This individual power when is added up to a team
              makes possible what seems imposible. <br /> True leadership is all
              about it, to make people realize how much important they are for
              the team work and lead them all as a unique body to a goal that
              provides value to the Clien and the Organization.
            </p>
          </div>
          <div className={styles["title-image"]}>
            <Image
              alt="Compass"
              src={compass}
              fill
              className={styles["title-image__img"]}
            />
          </div>
        </div>
      </div>
      <ParallaxImage
        photo={marcusAurelius.url}
        text={marcusAurelius.text}
        author={marcusAurelius.author}
      />
      <div className={styles["project-item__container"]}>
        <ProjectItem project={pavePortal} />
      </div>
      <ParallaxImage
        photo={laoTzu.url}
        text={laoTzu.text}
        author={laoTzu.author}
      />
      <div className={styles["project-item__container"]}>
        <ProjectItem project={ePrep} inverted />
      </div>
      <ParallaxImage
        photo={ryanHoliday.url}
        text={ryanHoliday.text}
        author={ryanHoliday.author}
      />
      <div
        id="projectsSE"
        style={imageProjectsSE}
        className={`${styles["title-container"]} ${roboto.className}`}
      >
        <div className={styles["title-container__title"]}>
          <h3>Portfolio as Software Engineer</h3>
        </div>
        <div className={styles["title-text"]}>
          <div className={styles["title-text__p"]}>
            <p>
              The beauty of the software engineering is that you can express
              yourself where the imagination meets no limits.
              <br />
              Software Engineering in the modern art where each peace of code
              create a unique User Experience that solves common user problems
              and above all creates value for the Customer and the Organization.
            </p>
          </div>
        </div>
      </div>
      <ParallaxImage
        photo={ryanHoliday.url}
        text={ryanHoliday.text}
        author={ryanHoliday.author}
      />
      <ProjectItem project={finca} />
      <ParallaxImage
        photo={ryanHoliday.url}
        text={ryanHoliday.text}
        author={ryanHoliday.author}
      />
      <div className={styles["project-coming__container"]}>
        <div className={styles["project-coming"]}>
          <h3>More Projects Comming soon</h3>
          <p>
            I am refactoring some old projects in order to publish them here!!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
