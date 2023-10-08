const IntroSection = ({ introContent }) => {
  return (
    <div style={introContent.styles.introSection}>
      <div style={introContent.styles.introFlex}>
        <div style={introContent.styles.leftContainer}>
          {introContent.leftContainer}
        </div>
        <div style={introContent.styles.rightContainer}>
          <p>{introContent.rightContainer}</p>
          <button
            style={{
              background: "none",
              border: "2px solid #34B3C0",
              padding: "15px 23px",
              borderRadius: "50px",
              cursor: "pointer",
              color: "#34B3C0",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div style={introContent.styles.imageContainer}>
        <img
          src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Modern-House-In-Twilight-AdobeStock-368976934-copy.jpg"
          style={introContent.styles.imageStyle}
        />
      </div>
    </div>
  );
};

export default IntroSection;
