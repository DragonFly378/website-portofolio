import React from "react";
import SEO from "../Components/SEO";
import Layout from "../Layout/Layout";
import { AboutContent } from "./About";

const Contact = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Contact - Muhammad Hafiz Hisbullah"
          description="Get in touch with Muhammad Hafiz Hisbullah for collaboration, freelance work, or just to say hello."
          path="/contact"
        />
        <AboutContent />
      </Layout>
    </>
  );
};

export default Contact;
