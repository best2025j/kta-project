import React from "react";
import Layout from "../../components/layout/Layout";
import Corousel from "../../components/ui/Corousel";
import Hero from "../../components/ui/Hero";
import OutSponsors from "../../components/ui/OutSponsors";
import Sections from "../../components/sections/Sections";
import ContactUs from "../../components/ui/ContactUs";
import Instructors from "../../components/carouselSections/Instructors";
import CarouselCards from "../../components/carouselSections/CarouselCards";

const Home = () => {
  return (
    <div>
      <Layout />
      <Hero />
      <Corousel />
      <OutSponsors />
      <CarouselCards />
      <Sections />
      <ContactUs />
      <Instructors />
    </div>
  );
};

export default Home;
