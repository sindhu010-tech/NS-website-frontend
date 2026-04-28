import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import CTA from "../sections/CTA";

export default function Home() {
  return (
    <>
      {/* ✅ SEO for Home Page */}
      <Helmet>
        <title>
          Neuricorn Syndicate | Software Development & IT Solutions Company
        </title>
        <meta
          name="description"
          content="Neuricorn Syndicate is a leading software development company offering web development, mobile app solutions, and IT services for modern businesses."
        />
        <meta
          name="keywords"
          content="software development company, web development services, IT solutions, mobile app development, Neuricorn Syndicate"
        />
      </Helmet>

      {/*  H1 for SEO (important) */}
      <h1 className="sr-only">
        Software Development Company - Neuricorn Syndicate
      </h1>

      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <CTA />
    </>
  );
}