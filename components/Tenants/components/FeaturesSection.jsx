const FeaturesSection = ({ featuresContent }) => {
  return (
    <div style={featuresContent.styles.featuresSection}>
      <h1>
        What makes{" "}
        <span style={featuresContent.styles.spanText}>
          {featuresContent.heading}
        </span>{" "}
        different?
      </h1>
      <div style={featuresContent.styles.featuresCardContainer}>
        {featuresContent.featuresCard.map((feature, key) => (
          <div style={featuresContent.styles.featuresCard}>
            <h2>{feature.featureName}</h2>
            <p>{feature.featureDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
