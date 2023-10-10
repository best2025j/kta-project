import React from "react";
import Layout from "../../components/layout/Layout";
import Corousel from "../../components/ui/Corousel";
import Hero from "../../components/ui/Hero";
import OutSponsors from "../../components/ui/OutSponsors";
import CarouselCard from "../../components/carouselSections/CarouselCard";

const Home = () => {
  return (
    <div>
      <Layout />
      <Hero />
      <Corousel />
      <OutSponsors />
      <CarouselCard />
    </div>
  );
};

export default Home;
