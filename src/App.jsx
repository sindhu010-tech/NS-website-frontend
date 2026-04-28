import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import NeuralBackground from "./components/NeuralBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Reviews from "./pages/Reviews";
import Testimonials from "./pages/Testimonials";

import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
  }, []);

  return (
    <Router>

      {/* ✅ Default SEO (fallback) */}
      <Helmet>
        <title>Neuricorn Syndicate | Software Solutions</title>
        <meta
          name="description"
          content="Neuricorn Syndicate provides modern software development, web solutions, and IT services for businesses."
        />
      </Helmet>

      <NeuralBackground />
      <ScrollToTop />
      <Header dark={dark} setDark={setDark} />

      <main className="relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;