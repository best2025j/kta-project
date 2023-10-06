import React from "react";
import Layout from "../../components/layout/Layout";
import Corousel from "../../components/ui/Corousel";
import Hero from "../../components/ui/Hero";
import OutSponsors from "../../components/ui/OutSponsors";

const Home = () => {
  return (
    <div>
      <Layout />
      <Hero />
      <Corousel />
      <OutSponsors />
    </div>
  );
};

export default Home;
