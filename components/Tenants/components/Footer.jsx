const Footer = ({ footerContent }) => {
  return (
    <div style={footerContent.styles.footer}>
      <div>
        <h1>{footerContent.heading}</h1>
        <div style={footerContent.styles.emailInputContainer}>
          <input
            style={footerContent.styles.emailInput}
            placeholder={footerContent.inputPlaceholder}
          />
          <button style={footerContent.styles.sendButton}>
            {footerContent.buttonText}
          </button>
        </div>
        <div>
          <div style={footerContent.styles.logoContainer}></div>
          <p>{footerContent.companyDesc}</p>
        </div>
      </div>
      <div>
        <div>
          <h4>{footerContent.companyLinksHeading}</h4>
          <ul>
            {footerContent.links.map((item, key) => (
              <li key={key}>
                <a href={item.linkAddress}>{item.linkName}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{footerContent.contactUs.heading}</h4>
          {footerContent.contactUs.details.map((item, idx) => (
            <div key={idx}>
              <h5>{item.detailHeading}</h5>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
