import styles from "@/styles/ProjectItem.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectItemProps = {
  project: {
    link: string;
    image: StaticImageData;
    title: string;
    description: string;
    stack: string[];
    repo?: string;
  };
  inverted?: boolean;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project, inverted }) => {
  const imageBlock = (
    <div className={styles["project-image"]}>
      <Link href={project.link} target="_blank">
        <Image
          alt="Website "
          src={project.image}
          className={styles["project-image__img"]}
        />
      </Link>
    </div>
  );

  const textBlock = (
    <div className={styles["project-text"]}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles["stack"]}>
        {project.stack.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className={styles["links"]}>
        {project.repo && (
          <Link href={project.repo} target="_blank">
            Repo
            <Image
              src="/images/github-mark.png"
              alt="icon"
              width="30"
              height="30"
            />
          </Link>
        )}
        <Link href={project.link} target="_blank">
          Website
        </Link>
      </div>
    </div>
  );

  return (
    <div className={styles["project-item"]}>
      {inverted ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  );
};

export default ProjectItem;
