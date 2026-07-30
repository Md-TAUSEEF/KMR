import About from "../about/About";
import Clients from "../Clients/Clients";
import WhyChoose from "../whyChoose/WhyChoose";
import AchievementsCertifications from "./achievements";
import ManufacturingFactory from "./ManufacturingFactory";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <About />
      <ManufacturingFactory/>
      <AchievementsCertifications/>
      <WhyChoose/>
      <Clients/>
    </main>
  );
};

export default AboutPage;