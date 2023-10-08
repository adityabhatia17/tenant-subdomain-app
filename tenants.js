// tenants.js
const tenants = {
  tenant1: {
    navbar: {
      styles: {
        navbar: {
          position: "sticky",
          top: "0",
          zIndex: "100",
          backgroundColor: "white",
        },
        container: {
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px",
        },
        navList: {
          listStyleType: "none",
          padding: "0",
          margin: "0",
          display: "flex",
        },
        navListItem: {
          marginRight: 20,
        },
        navLink: {
          textDecoration: "none",
          fontWeight: "bold",
          transition: "color 0.3s ease",
          color: "black",
        },
        navbarContent: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      },
      navItems: [
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
    },
    introSection: {
      styles: {
        introSection: {
          padding: "20px",
        },
        introFlex: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        },
        leftContainer: {
          flex: 7,
          fontSize: "3.5rem",
        },
        rightContainer: {
          flex: 3,
          fontSize: "1.5rem",
          fontWeight: 200,
        },
        imageContainer: {
          height: "38rem",
          width: "100%",
          marginTop: "12px",
        },
        imageStyle: {
          width: "100%",
          height: "100%",
        },
      },
      leftContainer:
        "Discover Your Perfect Rental Home, Where Comfort Meets Convenience.",
      rightContainer:
        "Embrace the effortless journey of discovering and reserving your perfect rental home, where simplicity and convenience converge in a user-friendly online experience, making your housing search a breeze.",
      imageURL: "../../assets/images/png/tenant1Intro.jpg",
    },
    exploreSection: {
      propertyCard: [
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Boys",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Students / Working Professionals",
            },
          ],
          price: "8,000",
        },
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Boys/Girls",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Students",
            },
          ],
          price: "10,000",
        },
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Girls",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Working Professionals",
            },
          ],
          price: "5,000",
        },
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Boys/Girls",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Students",
            },
          ],
          price: "5,000",
        },
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Boys/Girls",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Students/Working Professionals",
            },
          ],
          price: "5,000",
        },
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Girls",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Students/Working Professionals",
            },
          ],
        },
      ],
      styles: {
        exploreSection: {
          padding: "20px",
        },
        productCardsContainer: {
          display: "flex",
          gap: "20px",
          alignItems: "center",
          width: "fit-content",
        },
        propertyCard: {
          width: "25rem",
          height: "40rem",
          border: "2px solid black",
          borderRadius: "15px",
          padding: "8px",
          boxShadow:
            "4px 4px 8px rgba(0, 0, 0, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.8)",
        },
        cardImg: {
          width: "100%",
          height: "22rem",
          borderRadius: "15px",
        },
        propertyInfoItem: {
          display: "flex",
          alignItems: "center",
          gap: "12px",
        },
        iconContainer: {
          width: "20px",
          height: "20px",
          backgroundColor: "#dfe4ff",
          padding: "6px",
          borderRadius: "100px",
        },
        priceAndButtonContainer: {
          display: "flex",
          alignItems: "center",
          paddingTop: "10px",
          borderTop: "2px solid lightGrey",
          justifyContent: "space-between",
        },
      },
    },
    featuresSection: {
      styles: {
        spanText: {
          color: "#34B3C0",
        },
        featuresSection: {
          textAlign: "center",
          padding: "20px",
        },
        featuresCardContainer: {
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "10px 60px 10px 60px",
        },
        featuresCard: {
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "10px",
          borderRadius: "5px",
          transition: "transform 0.2s",
          width: "22rem",
        },
      },
      heading: "Homical",
      featuresCard: [
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
      ],
    },
    impFeatureBanner: {
      styles: {
        impFeatureBanner: {
          backgroundColor: "#333",
          height: "70vh",
          display: "flex",
          padding: "20px",
        },
      },
      heading: "Seamless and Convenient",
      vision:
        "We believe in leveraging technology to make real estate transactions more accessible, transparent and efficient.",
      buttonText: "See More",
      imageUrl: "",
    },
    aboutUsSection: {
      styles: {
        aboutUsSection: {
          textAlign: "center",
          padding: "20px",
          justifyContent: "space-between",
          height: "70vh",
        },
        contentContainer: {
          display: "flex",
          justifyContent: "space-between",
          height: "80%",
          gap: "30px",
        },
        imageContainer: {
          width: "10rem",
          border: "2px solid black",
          height: "100%",
          flex: 4,
        },
        infoContainer: {
          flex: 6,
        },
      },
      heading: "About Homical",
      imgUrl: "",
      infoContainer: {
        heading: "About Us",
        description:
          "Keeping the challenges faced by both the owners and accommodation seekers in mind, Homical was created. Our focus as an organization is to act as a bridge between owners and accommodation seekers and therefore our focus is on becoming a 'one-stop search for all accommodation needs'.",
      },
    },
    footerSection: {
      styles: {
        footer: {
          display: "flex",
          padding: "20px",
          height: "60vh",
          backgroundColor: "#333",
          justifyContent: "space-around",
          flexWrap: "wrap",
        },
        emailInputContainer: {
          display: "flex",
          alignItems: "center",
          width: "300px",
          padding: "10px",
          borderRadius: "20px",
        },
        sendButton: {
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          padding: "10px 20px",
          marginLeft: "10px",
          cursor: "pointer",
          outline: "none",
        },
        emailInput: {
          flex: 1,
          padding: "10px",
          border: "none",
          borderRadius: "20px",
          outline: "none",
        },
      },
      heading: "Subscribe to Our Newsletter to Stay Updated",
      inputPlaceholder: "Enter Your Email",
      buttonText: "Send",
      logoUrl: "",
      companyDesc:
        "We believe in leveraging technology to make real estate transactions more accessible, transparent and efficient.",
      companyLinksHeading: "Product",
      links: [
        {
          linkName: "Home",
          linkAddress: "#home",
        },
        {
          linkName: "Home",
          linkAddress: "#home",
        },
        {
          linkName: "Home",
          linkAddress: "#home",
        },
        {
          linkName: "Home",
          linkAddress: "#home",
        },
        {
          linkName: "Home",
          linkAddress: "#home",
        },
      ],
      contactUs: {
        heading: "Contact Us",
        details: [
          {
            detailHeading: "Phone",
            detail: "+91-999999",
          },
          {
            detailHeading: "Email",
            detail: "info@homical.com",
          },
          {
            detailHeading: "Office Address",
            detail: "Gurgaon, Harayana, India",
          },
        ],
      },
    },
  },
  tenant2: {
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
    exploreSection: {
      propertyCard: [
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Boys",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Students / Working Professionals",
            },
          ],
        },
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Boys/Girls",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Students",
            },
          ],
        },
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Single, Double, Triple",
            },
          ],
        },
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Single, Double, Triple",
            },
          ],
        },
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Single, Double, Triple",
            },
          ],
        },
        {
          propertyImg: "",
          propertyName: "",
          propertyAddress: "",
          propertyInfoItem: [
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2283/2283945.png",
              info: "Single, Double, Triple",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2517/2517326.png",
              info: "Girls",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/128/2784/2784403.png",
              info: "Students/Working Professionals",
            },
          ],
        },
      ],
    },
    featuresSection: {
      heading: "Why Homical?",
      featuresCard: [
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Digital Payments",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
      ],
    },
    impFeatureBanner: {
      heading: "Seamless and Convenient",
      vision:
        "We believe in leveraging technology to make real estate transactions more accessible, transparent and efficient.",
      buttonText: "See More",
      imageUrl: "",
    },
    aboutUsSection: {
      heading: "About Homical",
      imgUrl: "",
      infoContainer: {
        heading: "About Us",
        description:
          "Keeping the challenges faced by both the owners and accommodation seekers in mind, Homical was created. Our focus as an organization is to act as a bridge between owners and accommodation seekers and therefore our focus is on becoming a 'one-stop search for all accommodation needs'.",
      },
    },
    footerSection: {
      heading: "Subscribe to Our Newsletter to Stay Updated",
      inputPlaceholder: "Enter Your Email",
      buttonText: "Send",
      logoUrl: "",
      companyDesc:
        "We believe in leveraging technology to make real estate transactions more accessible, transparent and efficient.",
      companyLinksHeading: "Product",
      links: [
        {
          linkName: "Home",
          linkAddress: "#home",
        },
        {
          linkName: "Home",
          linkAddress: "#home",
        },
        {
          linkName: "Home",
          linkAddress: "#home",
        },
        {
          linkName: "Home",
          linkAddress: "#home",
        },
        {
          linkName: "Home",
          linkAddress: "#home",
        },
      ],
      contactUs: {
        heading: "Contact Us",
        details: [
          {
            detailHeading: "Phone",
            detail: "+91-999999",
          },
          {
            detailHeading: "Email",
            detail: "info@homical.com",
          },
          {
            detailHeading: "Office Address",
            detail: "Gurgaon, Harayana, India",
          },
        ],
      },
    },
  },
};

export default tenants;
