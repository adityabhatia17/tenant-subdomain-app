// tenants.js
const tenants = {
  tenant1: {
    navbar: {
      styles: {
        navbar: {
          backgroundColor: "white",
        },
        logoColour: {
          color: "#34B3C0",
          fontWeight: "700",
          fontSize: "1.5rem",
        },
        navLink: {
          color: "black",
        },
      },
      logoText: "Homical.",
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
        buttonStyle: {
          background: "none",
          border: "2px solid #34B3C0",
          color: "#34B3C0",
          padding: "10px 15px",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "1rem",
          textDecoration: "none",
        },
        introSection: {
          backgroundColor: "white",
        },
        leftContainerText: {
          color: "black",
        },
        rightContainerText: {
          color: "black",
        },
        rightContainer: {
          display: "block",
        },
        buttonContainer: {
          display: "none",
        },
      },
      leftContainer:
        "Discover Your Perfect Rental Home, Where Comfort Meets Convenience.",
      rightContainer:
        "Embrace the effortless journey of discovering and reserving your perfect rental home, where simplicity and convenience converge in a user-friendly online experience, making your housing search a breeze.",
      imageURL:
        "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Modern-House-In-Twilight-AdobeStock-368976934-copy.jpg",
      buttonText: "Contact Us",
      buttonNavigation: "#footer",
    },
    exploreSection: {
      propertyCard: [
        {
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/j6/011pxx11.xx11.171124120852.m9j6/catalogue/golf-link-pg-home-dwarka-delhi-paying-guest-accommodations-al0rb.jpg",
          propertyName: "DSK HOMES",
          propertyAddress: "Gurugram, Harayana, India",
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
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/j6/011pxx11.xx11.171124120852.m9j6/catalogue/golf-link-pg-home-dwarka-delhi-paying-guest-accommodations-al0rb.jpg",
          propertyName: "DSK HOMES",
          propertyAddress: "Gurugram, Harayana, India",
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
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/j6/011pxx11.xx11.171124120852.m9j6/catalogue/golf-link-pg-home-dwarka-delhi-paying-guest-accommodations-al0rb.jpg",
          propertyName: "DSK HOMES",
          propertyAddress: "Gurugram, Harayana, India",
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
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/j6/011pxx11.xx11.171124120852.m9j6/catalogue/golf-link-pg-home-dwarka-delhi-paying-guest-accommodations-al0rb.jpg",
          propertyName: "DSK HOMES",
          propertyAddress: "Gurugram, Harayana, India",
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
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/j6/011pxx11.xx11.171124120852.m9j6/catalogue/golf-link-pg-home-dwarka-delhi-paying-guest-accommodations-al0rb.jpg",
          propertyName: "DSK HOMES",
          propertyAddress: "Gurugram, Harayana, India",
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
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/j6/011pxx11.xx11.171124120852.m9j6/catalogue/golf-link-pg-home-dwarka-delhi-paying-guest-accommodations-al0rb.jpg",
          propertyName: "DSK HOMES",
          propertyAddress: "Gurugram, Harayana, India",
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
        viewInfoButton: {
          padding: "10px 20px",
          backgroundColor: "#34B3C0",
          border: "none",
          color: "white",
          cursor: "pointer",
        },
      },
    },
    featuresSection: {
      styles: {
        spanText: {
          color: "#34B3C0",
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
        featureHeading: {
          color: "#34B3C0",
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
          featureName: "Smart KYC",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "E-Agreement",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "24/7 Support",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Tenant Membership",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Easy Access",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
      ],
    },
    impFeatureBanner: {
      styles: {
        impFeatureBanner: {
          backgroundColor: "#34B3C0",
          display: "flex",
          padding: "20px",
        },
        visionHeading: {
          color: "white",
          letterSpacing: "4px",
        },
        vision: {
          color: "white",
          wordSpacing: "2px",
          fontWeight: "300",
        },
        seeMoreButton: {
          padding: "15px 20px",
          borderRadius: "40px",
          backgroundColor: "white",
          color: "black",
          border: "none",
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
        spanText: {
          color: "#34B3C0",
        },
      },
      heading: "Homical",
      imgUrl: "https://indiacsr.in/wp-content/uploads/2022/07/India-Gate.jpg",
      infoContainer: {
        heading: "About Us",
        description:
          "Keeping the challenges faced by both the owners and accommodation seekers in mind, Homical was created. Our focus as an organization is to act as a bridge between owners and accommodation seekers and therefore our focus is on becoming a 'one-stop search for all accommodation needs'.",
      },
    },
    footerSection: {
      styles: {
        footer: {
          backgroundColor: "#34B3C0",
        },
        heading: {
          color: "white",
        },
        emailInputContainer: {
          display: "flex",
          alignItems: "center",
          width: "300px",
          padding: "10px",
          borderRadius: "20px",
        },
        sendButton: {
          backgroundColor: "white",
          color: "black",
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
        companyDesc: {
          color: "white",
          fontSize: "2rem",
          fontWeight: "300",
        },
        companyLinksHeading: {
          color: "white",
          fontWeight: 700,
          fontSize: "1.5rem",
        },
        companyLink: {
          color: "white",
        },
        detailHeading: {
          color: "white",
          textDecoration: "underline",
        },
        detail: {
          color: "white",
        },
        footerLogo: {
          display: "none",
        },
      },
      heading: "Subscribe to Our Newsletter to Get Latest Updates",
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
          linkName: "About Us",
          linkAddress: "#aboutus",
        },
        {
          linkName: "Explore",
          linkAddress: "#explore",
        },
        {
          linkName: "Contact Us",
          linkAddress: "#contactus",
        },
      ],
      contactUs: {
        heading: "Contact Us",
        details: [
          {
            detailHeading: "Phone:",
            detail: "+91-999999",
          },
          {
            detailHeading: "Email:",
            detail: "info@homical.com",
          },
          {
            detailHeading: "Office Address:",
            detail: "Gurgaon, Harayana, India",
          },
        ],
      },
      logoLink:
        "https://i.ibb.co/ZGJ450R/Screenshot-2023-10-09-at-6-52-32-PM.png",
    },
  },
  tenant2: {
    navbar: {
      styles: {
        navbar: {
          backgroundColor: "#191423",
        },
        logoColour: {
          color: "white",
          fontWeight: "700",
          fontSize: "1.5rem",
        },
        navLink: {
          color: "white",
        },
      },
      logoText: "Lepo",
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
          name: "Why us",
          navLink: "#feature",
        },
        {
          name: "Contact Us",
          navLink: "#footer",
        },
      ],
    },
    introSection: {
      styles: {
        buttonStyle: {
          backgroundColor: "#47D185",
          padding: "10px 15px",
          borderRadius: "50px",
          cursor: "pointer",
          color: "white",
          fontSize: "1rem",
          textDecoration: "none",
        },
        buttonContainer: {
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        },
        introSection: {
          backgroundColor: "#191423",
        },
        leftContainerText: {
          color: "white",
          textAlign: "center",
        },
        rightContainerText: {
          color: "white",
        },
        rightContainer: {
          display: "none",
        },
      },
      leftContainer: "Everyone Deserves the Opportunity of Home",
      rightContainer:
        "It's easier to reach your saving goals when you have the right savings account. Take a look and find the right one for you!",
      imageURL:
        "https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg",
      buttonText: "Explore Properties",
      buttonNavigation: "#explore",
    },
    exploreSection: {
      propertyCard: [
        {
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/y1/011pxx11.xx11.200623153108.w1y1/catalogue/aggarwal-pg-house-shahdara-delhi-paying-guest-accommodations-for-men-bttmi5m2er.jpg?clr=",
          propertyName: "DSK HOMES",
          propertyAddress: "Hyderabad, India",
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
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/y1/011pxx11.xx11.200623153108.w1y1/catalogue/aggarwal-pg-house-shahdara-delhi-paying-guest-accommodations-for-men-bttmi5m2er.jpg?clr=",
          propertyName: "DSK HOMES",
          propertyAddress: "Hyderabad, India",
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
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/y1/011pxx11.xx11.200623153108.w1y1/catalogue/aggarwal-pg-house-shahdara-delhi-paying-guest-accommodations-for-men-bttmi5m2er.jpg?clr=",
          propertyName: "DSK HOMES",
          propertyAddress: "Hyderabad, India",
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
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/y1/011pxx11.xx11.200623153108.w1y1/catalogue/aggarwal-pg-house-shahdara-delhi-paying-guest-accommodations-for-men-bttmi5m2er.jpg?clr=",
          propertyName: "DSK HOMES",
          propertyAddress: "Hyderabad, India",
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
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/y1/011pxx11.xx11.200623153108.w1y1/catalogue/aggarwal-pg-house-shahdara-delhi-paying-guest-accommodations-for-men-bttmi5m2er.jpg?clr=",
          propertyName: "DSK HOMES",
          propertyAddress: "Hyderabad, India",
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
          propertyImg:
            "https://content.jdmagicbox.com/comp/delhi/y1/011pxx11.xx11.200623153108.w1y1/catalogue/aggarwal-pg-house-shahdara-delhi-paying-guest-accommodations-for-men-bttmi5m2er.jpg?clr=",
          propertyName: "DSK HOMES",
          propertyAddress: "Hyderabad, India",
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
        viewInfoButton: {
          padding: "10px 20px",
          backgroundColor: "#47D185",
          border: "none",
          color: "white",
          cursor: "pointer",
        },
      },
    },
    featuresSection: {
      styles: {
        spanText: {
          color: "#47D185",
        },
        featuresCard: {
          backgroundColor: "#191423",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          borderRadius: "20px",
          width: "22rem",
          color: "white",
        },
        featureHeading: {
          color: "#47D185",
        },
      },
      heading: "Lepo",
      featuresCard: [
        {
          featureIcon: "",
          featureName: "Smart KYC",
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
          featureName: "E-Agreement",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Tenant Membership",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "Easy Access",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
        {
          featureIcon: "",
          featureName: "24/7 Support",
          featureDescription:
            "Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.",
        },
      ],
    },
    impFeatureBanner: {
      styles: {
        impFeatureBanner: {
          backgroundColor: "#34B3C0",
          display: "none",
          padding: "20px",
        },
        visionHeading: {
          color: "white",
          letterSpacing: "4px",
        },
        vision: {
          color: "white",
          wordSpacing: "2px",
          fontWeight: "300",
        },
        seeMoreButton: {
          padding: "15px 20px",
          borderRadius: "40px",
          backgroundColor: "white",
          color: "black",
          border: "none",
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
        spanText: {
          color: "#47D185",
        },
      },
      heading: "Lepo",
      imgUrl:
        "https://images.herzindagi.info/image/2022/Oct/places-to-visit.jpg",
      infoContainer: {
        heading: "About Us",
        description:
          "Keeping the challenges faced by both the owners and accommodation seekers in mind, Homical was created. Our focus as an organization is to act as a bridge between owners and accommodation seekers and therefore our focus is on becoming a 'one-stop search for all accommodation needs'.",
      },
    },
    footerSection: {
      styles: {
        footer: {
          backgroundColor: "#191423",
        },
        heading: {
          color: "white",
          display: "none",
        },
        emailInputContainer: {
          display: "none",
        },
        emailContainer: {
          display: "none",
        },
        sendButton: {
          backgroundColor: "white",
          color: "black",
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
        companyDesc: {
          color: "white",
          fontSize: "2rem",
          fontWeight: "300",
        },
        companyLinksHeading: {
          color: "white",
          fontWeight: 700,
          fontSize: "1.5rem",
        },
        companyLink: {
          color: "white",
        },
        detailHeading: {
          color: "white",
          textDecoration: "underline",
        },
        detail: {
          color: "white",
        },
        footerLogo: {
          display: "flex",
        },
      },
      heading: "",
      inputPresent: false,
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
          linkName: "About Us",
          linkAddress: "#aboutus",
        },
        {
          linkName: "Explore",
          linkAddress: "#explore",
        },
        {
          linkName: "Contact Us",
          linkAddress: "#contactus",
        },
      ],
      contactUs: {
        heading: "Contact Us",
        details: [
          {
            detailHeading: "Phone:",
            detail: "+91-999999",
          },
          {
            detailHeading: "Email:",
            detail: "info@lepo.com",
          },
          {
            detailHeading: "Office Address:",
            detail: "Gurgaon, Harayana, India",
          },
        ],
      },
      logoLink:
        "https://i.ibb.co/ZGJ450R/Screenshot-2023-10-09-at-6-52-32-PM.png",
    },
  },
  tenant3: {},
  default: {},
};

export default tenants;
