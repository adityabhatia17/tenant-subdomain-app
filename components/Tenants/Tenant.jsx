import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import ExploreSection from "./components/ExploreSection";
import FeaturesSection from "./components/FeaturesSection";
import VisionBanner from "./components/VisionBanner";
import AboutUsSection from "./components/AboutUsSection";
import Footer from "./components/Footer";

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
