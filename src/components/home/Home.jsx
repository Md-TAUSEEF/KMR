import Hero from "../home/Hero/Hero";
import About from "../home/about/About";
import Products from "../home/product/Products";
import ManufacturingProcess from "../home/ManufacturingProcess/ManufacturingProcess";
import Applications from "../Industry/Applications";
import WhyChoose from "./whyChoose/WhyChoose";
import ManufacturingFactory from "../home/about/ManufacturingFactory"
import Clients from "./Clients/Clients";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <ManufacturingFactory/>
      <Products />
      <ManufacturingProcess />
      <Applications />
      <WhyChoose/>

      <Clients/>
    </main>
  );
};

export default Home;