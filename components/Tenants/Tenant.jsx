import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/IntroSection/IntroSection";
import ExploreSection from "./components/ExploreSection/ExploreSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import VisionBanner from "./components/VisonBanner/VisionBanner";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import Footer from "./components/Footer/Footer";

function Tenant({ content }) {
  return (
    <div>
      <Navbar navContent={content.navbar} />
      <div>
        {/* Intro Section */}
        <IntroSection introContent={content.introSection} />

        {/* Explore Section */}
        <ExploreSection exploreContent={content.exploreSection} />

        {/* Features Section */}
        <FeaturesSection featuresContent={content.featuresSection} />

        {/* Vision Banner */}

        <VisionBanner visionContent={content.impFeatureBanner} />

        {/* About Us Section */}
        <AboutUsSection aboutUsContent={content.aboutUsSection} />

        {/* Footer */}
        <Footer footerContent={content.footerSection} />
      </div>
    </div>
  );
}

export default Tenant;
