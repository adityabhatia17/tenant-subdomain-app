const AboutUsSection = ({ aboutUsContent }) => {
  return (
    <div style={aboutUsContent.styles.aboutUsSection}>
      <h1>About Homical</h1>
      <div style={aboutUsContent.styles.contentContainer}>
        <div style={aboutUsContent.styles.imageContainer}></div>
        <div style={aboutUsContent.styles.infoContainer}>
          <h3>{aboutUsContent.infoContainer.heading}</h3>
          <p>{aboutUsContent.infoContainer.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
