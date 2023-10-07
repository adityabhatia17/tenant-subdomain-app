import tenants from "@/tenants";
import React from "react";
import styles from "./tenant.module.css";
import img from "../../assets/images/png/tenant1Intro.jpg";
import Image from "next/image";

function Tenent({ subdomain }) {
  console.log(subdomain);
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbarContent}>
            <div className="logo">{/* <img src={logo} alt="Logo" /> */}</div>
            <ul className={styles.navList}>
              {tenants[subdomain].navbar.map((navItem, key) => (
                <li>
                  <a href={navItem.navLink}>{navItem.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className={styles.introSection}>
          <div className={styles.introFlex}>
            <div className={styles.leftContainer}>
              {tenants[subdomain].introSection.leftContainer}
            </div>
            <div className={styles.rightContainer}>
              <p>{tenants[subdomain].introSection.rightContainer}</p>
              <button>Contact Us</button>
            </div>
          </div>
          <div className={styles.imageContainer}></div>
        </div>
        <div className={styles.exploreSection}>
          <h1>Your dream house is here</h1>
          <div className={styles.productCardsContainer}>
            <div className={styles.propertyCard}>
              <Image src={img} className={styles.cardImg} />
              <h2>DSK HOMES</h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tenent;
// Tenent
//       <ol>
//         <li>{tenants[subdomain].color}</li>
//         <li>{tenants[subdomain].title}</li>
//         <li>{tenants[subdomain].content}</li>
//         <li>{tenants[subdomain].font}</li>
//       </ol>
