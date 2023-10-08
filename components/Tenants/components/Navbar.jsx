import Image from "next/image";

const Navbar = ({ navContent }) => {
  return (
    <nav style={navContent.styles.navbar}>
      <div style={navContent.styles.container}>
        <div style={navContent.styles.navbarContent}>
          <div>
            <p>Homical.</p>
          </div>
          <ul style={navContent.styles.navList}>
            {navContent.navItems.map((navItem, key) => (
              <li key={key} style={navContent.styles.navListItem}>
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
