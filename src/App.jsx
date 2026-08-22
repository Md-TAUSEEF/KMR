import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// Navbar
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/pages/NotFound";
// Pages
import Home from "./components/home/Home";
import ClientsPage from "./components/pages/ClientsPage";
import AboutPage from "./components/home/about/AboutPage";
import Services from "./components/pages/Services";
import OurTeamPage from "./components/pages/OurTeamPage";
import AchievementsPage from "./components/home/about/achievements"
import AwardsRecognitionPage from "./components/home/about/AwardsRecognitionPage"
import VisionMissionPage from "./components/pages/VisionMissionPage"
// Product Pages
import Products from "./components/home/product/Products";
import ProductDetails from "./components/home/product/ProductDetails";

// Industry Pages
import Applications from "./components/Industry/Applications";
import IndustryDetails from "./components/Industry/IndustryDetails";
import WorkDetails from "./components/Industry/WorkDetails";
import CertificatesPreview from "./components/home/certificates/CertificatesPreview";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/pages/contact";
import Footer from "./components/pages/Footer";



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/certificate" element={<CertificatesPreview/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/achievements" element={<AchievementsPage/>}/>
        <Route path="/aword" element={<AwardsRecognitionPage/>}/>
        <Route path="/vision" element={<VisionMissionPage/>}/>
        

        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categorySlug" element={<Products />} />
        <Route
          path="/products/:categorySlug/:productSlug"
          element={<ProductDetails />}
        />

        {/*About*/}
        <Route path="/about" element={<AboutPage/>}/>

        {/* Applications */}
        <Route path="/applications" element={<Applications />} />
        <Route
          path="/applications/:industrySlug"
          element={<IndustryDetails />}
        />
        <Route
          path="/applications/:industrySlug/:workSlug"
          element={<WorkDetails />}
        />

        {/* 404 Page */}
     <Route path="*" element={<NotFound />} />
        
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
