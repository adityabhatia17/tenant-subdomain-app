import styles from "./introSection.module.css";

const IntroSection = ({ introContent }) => {
  return (
    <div
      className={styles.introSection}
      style={introContent.styles.introSection}
    >
      <div className={styles.introFlex}>
        <div
          className={styles.leftContainer}
          style={introContent.styles.leftContainerText}
        >
          {introContent.leftContainer}
        </div>
        {/* Right Container for Tenant 1 only */}
        <div
          className={styles.rightContainer}
          style={introContent.styles.rightContainer}
        >
          <p style={introContent.styles.rightContainerText}>
            {introContent.rightContainer}
          </p>
          <a
            style={introContent.styles.buttonStyle}
            href={introContent.buttonNavigation}
          >
            {introContent.buttonText}
          </a>
        </div>
      </div>
      {/* Button for tenant 2 only */}
      <div style={introContent.styles.buttonContainer}>
        <a
          style={introContent.styles.buttonStyle}
          href={introContent.buttonNavigation}
        >
          {introContent.buttonText}
        </a>
      </div>

      <div className={styles.imageContainer}>
        <img src={introContent.imageURL} className={styles.imageStyle} />
      </div>
    </div>
  );
};

export default IntroSection;
