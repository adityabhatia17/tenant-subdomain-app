import styles from "./exploreSection.module.css";

const ExploreSection = ({ exploreContent }) => {
  return (
    <div className={styles.exploreSection} id="explore">
      <h1 className={styles.heading}>Your dream house is here</h1>
      <div className={styles.propertyCardsSection}>
        <div className={styles.propertyCardsContainer}>
          {exploreContent.propertyCard.map((property, key) => (
            <div className={styles.propertyCard}>
              <img src={property.propertyImg} className={styles.cardImg} />
              <div className={styles.propertyInfo}>
                <h2>{property.propertyName}</h2>
                <p className={styles.address}>{property.propertyAddress}</p>
                {property.propertyInfoItem.map((item, idx) => (
                  <div className={styles.propertyInfoItem}>
                    <div className={styles.iconContainer}>
                      <img src={item.icon} width={20} height={20} />
                    </div>
                    <p>{item.info}</p>
                  </div>
                ))}
                <div className={styles.priceAndButtonContainer}>
                  <div>Starts from ₹ {property.price}</div>
                  <button style={exploreContent.styles.viewInfoButton}>
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
