import React from "react";
import Jumbotron from "../Components/Jumbotron";
import Layout from "../Layout/Layout";
import About from "./About";
import Work from "./Work";

const Home = () => {
  return (
    <Layout>
      <Jumbotron />
      <Work page={false} />
      <About page={false} />
    </Layout>
  );
};

export default Home;
