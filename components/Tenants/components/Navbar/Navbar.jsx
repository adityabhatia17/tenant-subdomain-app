import styles from "./navbar.module.css";

const Navbar = ({ navContent }) => {
  return (
    <nav className={styles.navbar} style={navContent.styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbarContent}>
          <div>
            <p style={navContent.styles.logoColour}>{navContent.logoText}</p>
          </div>
          <ul className={styles.navList}>
            {navContent.navItems.map((navItem, key) => (
              <li key={key}>
                <a href={navItem.navLink} style={navContent.styles.navLink}>
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
