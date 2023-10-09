import styles from "./about.module.css";

const AboutUsSection = ({ aboutUsContent }) => {
  return (
    <div className={styles.aboutUsSection}>
      <h1 className={styles.heading}>
        About{" "}
        <span style={aboutUsContent.styles.spanText}>
          {aboutUsContent.heading}
        </span>
      </h1>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src={aboutUsContent.imgUrl} className={styles.image} />
        </div>
        <div className={styles.infoContainer}>
          <h2>{aboutUsContent.infoContainer.heading}</h2>
          <p className={styles.aboutUsDesc}>
            {aboutUsContent.infoContainer.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
