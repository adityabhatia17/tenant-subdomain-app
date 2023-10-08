import Image from "next/image";
import img from "../../../assets/images/png/tenant1Intro.jpg";
const ExploreSection = ({ exploreContent }) => {
  return (
    <div style={exploreContent.styles.exploreSection}>
      <h1>Your dream house is here</h1>
      <div
        style={{
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "auto",
        }}
      >
        <div style={exploreContent.styles.productCardsContainer}>
          {exploreContent.propertyCard.map((property, key) => (
            <div style={exploreContent.styles.propertyCard}>
              <Image src={img} style={exploreContent.styles.cardImg} />
              <div style={exploreContent.styles.propertyInfo}>
                <h2>DSK HOMES</h2>
                <p></p>
                {property.propertyInfoItem.map((item, idx) => (
                  <div style={exploreContent.styles.propertyInfoItem}>
                    <div style={exploreContent.styles.iconContainer}>
                      <img src={item.icon} width={20} height={20} />
                    </div>
                    <p>{item.info}</p>
                  </div>
                ))}
                <div style={exploreContent.styles.priceAndButtonContainer}>
                  <div>Starts from ₹ {property.price}</div>
                  <button
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#34B3C0",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    View More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
