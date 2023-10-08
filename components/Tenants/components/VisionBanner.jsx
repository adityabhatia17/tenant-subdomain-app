const VisionBanner = ({ visionContent }) => {
  return (
    <div style={visionContent.styles.impFeatureBanner}>
      <div>
        <h2>{visionContent.heading}</h2>
        <p>{visionContent.vision}</p>
        <button>{visionContent.buttonText}</button>
      </div>
      <div>
        <img />
      </div>
    </div>
  );
};

export default VisionBanner;
