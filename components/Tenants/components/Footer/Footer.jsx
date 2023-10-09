import styles from "./footer.module.css";

const Footer = ({ footerContent }) => {
  return (
    <div
      style={footerContent.styles.footer}
      className={styles.footer}
      id="footer"
    >
      <div className={styles.leftContainer}>
        <div
          className={styles.emailContainer}
          style={footerContent.styles.emailContainer}
        >
          <h1
            style={footerContent.styles.heading}
            className={styles.footerHeading}
          >
            {footerContent.heading}
          </h1>
          <div className={styles.emailInputContainer}>
            <input
              style={footerContent.styles.emailInput}
              placeholder={footerContent.inputPlaceholder}
            />
            <button style={footerContent.styles.sendButton}>
              {footerContent.buttonText}
            </button>
          </div>
        </div>
        <div className={styles.companyDescriptionContainer}>
          <img
            src={footerContent.logoLink}
            alt="Screenshot-2023-10-09-at-6-52-32-PM"
            border="0"
            style={footerContent.styles.footerLogo}
          ></img>
          <p style={footerContent.styles.companyDesc}>
            {footerContent.companyDesc}
          </p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div>
          <h4 style={footerContent.styles.companyLinksHeading}>
            {footerContent.companyLinksHeading}
          </h4>
          <ul className={styles.companyLinksList}>
            {footerContent.links.map((item, key) => (
              <li key={key}>
                <a
                  href={item.linkAddress}
                  style={footerContent.styles.companyLink}
                >
                  {item.linkName}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={footerContent.styles.companyLinksHeading}>
            {footerContent.contactUs.heading}
          </h4>
          {footerContent.contactUs.details.map((item, idx) => (
            <div key={idx}>
              <h5 style={footerContent.styles.detailHeading}>
                {item.detailHeading}
              </h5>
              <p style={footerContent.styles.detail}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
