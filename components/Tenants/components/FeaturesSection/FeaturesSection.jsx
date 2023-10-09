import styles from "./features.module.css";

const FeaturesSection = ({ featuresContent }) => {
  return (
    <div className={styles.featuresSection} id="feature">
      <h1 className={styles.heading}>
        What makes{" "}
        <span style={featuresContent.styles.spanText}>
          {featuresContent.heading}
        </span>{" "}
        different?
      </h1>
      <div className={styles.featuresCardContainer}>
        {featuresContent.featuresCard.map((feature, key) => (
          <div style={featuresContent.styles.featuresCard} key={key}>
            <h2 style={featuresContent.styles.featureHeading}>
              {feature.featureName}
            </h2>
            <p>{feature.featureDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
