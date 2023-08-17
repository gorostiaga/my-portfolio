import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects__section}>
      <div className={styles.container}>
        <h3>Portfolio</h3>
        <p>
          Each piece of code was created in order to produce Business Value to
          the Customer in the most efficient way!
        </p>
        <div className={styles.projects__grid}>
          <div className={styles.projects__grid__rightitem}>
            <div className={styles.proj__img}></div>
            <div className={styles.proj__text}></div>
          </div>
          <div className={styles.projects__grid__leftitem}>
            <div className={styles.proj__img}></div>
            <div className={styles.proj__text}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
