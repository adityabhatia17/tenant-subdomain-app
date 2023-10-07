// tenants.js
const tenants = {
  tenant1: {
    navbar: [
      {
        name: "Home",
        navLink: "#home",
      },
      {
        name: "About Us",
        navLink: "#aboutus",
      },
      {
        name: "Explore",
        navLink: "#explore",
      },
      {
        name: "Contact Us",
        navLink: "#contactus",
      },
    ],
    introSection: {
      leftContainer:
        "Discover Your Perfect Rental Home, Where Comfort Meets Convenience.",
      rightContainer:
        "Embrace the effortless journey of discovering and reserving your perfect rental home, where simplicity and convenience converge in a user-friendly online experience, making your housing search a breeze.",
      imageURL: "../../assets/images/png/tenant1Intro.jpg",
    },
    exploreSection: {},
  },
  tenant2: {
    color: "lightcoral",
    title: "Hello from Tenant 2",
    content: "Different content for Tenant 2 here.",
    // image: "/tenant2/logo.png",
    font: "Verdana, sans-serif",
  },
  default: {
    color: "lightgray",
    title: "Welcome to Our Website",
    content: "This is a generic landing page.",
    // image: "/default/logo.png",
    font: "Times New Roman, serif",
  },
};

export default tenants;
