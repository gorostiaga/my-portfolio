import styles from "@/styles/ParallaxImage.module.scss";
import { kalam } from "@/utils/fonts";

type ParallaxImageProps = {
  photo: string;
  text: string;
  author: string;
};

const ParallaxImage: React.FC<ParallaxImageProps> = (props) => {
  const imageBackgroud = {
    backgroundImage: `url(${props.photo})`,
  };

  return (
    <div className={`${styles["parallax-image"]}`} style={imageBackgroud}>
      <div className={styles["text-container"]}>
        <h3 className={kalam.className}>{props.text}</h3>
        <p>{props.author}</p>
      </div>
    </div>
  );
};

export default ParallaxImage;
