import styles from "./visionBanner.module.css";
import img from "../../../../assets/images/png/tenant1/experience.png";
import Image from "next/image";

const VisionBanner = ({ visionContent }) => {
  return (
    <div
      style={visionContent.styles.impFeatureBanner}
      className={styles.bannerContainer}
    >
      <div className={styles.contentContainer}>
        <h2
          style={visionContent.styles.visionHeading}
          className={styles.bannerHeading}
        >
          {visionContent.heading}
        </h2>
        <p style={visionContent.styles.vision} className={styles.bannerContent}>
          {visionContent.vision}
        </p>
        <button style={visionContent.styles.seeMoreButton}>
          {visionContent.buttonText}
        </button>
      </div>
      <div className={styles.imageContainer}>
        <Image src={img} className={styles.image} />
      </div>
    </div>
  );
};

export default VisionBanner;
