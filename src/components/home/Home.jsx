import Hero from "../home/Hero/Hero";
import About from "../home/about/About";
import Products from "../home/product/Products";
import ManufacturingProcess from "../home/ManufacturingProcess/ManufacturingProcess";
import Applications from "../Industry/Applications";
import WhyChoose from "./whyChoose/WhyChoose";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <ManufacturingProcess />
      <Applications />
      <WhyChoose/>
    </main>
  );
};

export default Home;