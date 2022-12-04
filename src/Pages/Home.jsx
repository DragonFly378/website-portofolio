import React from "react";
import Jumbotron from "../Components/Jumbotron";
import Layout from "../Layout/Layout";
import About from "./About";

const Home = () => {
  return (
    <>
      <Layout>
        <Jumbotron />
        <About page={false}/>
      </Layout>
    </>
  );
};

export default Home;
