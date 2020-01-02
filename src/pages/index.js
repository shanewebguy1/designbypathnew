import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";


import HomeMainBanner from "../components/index/HomeMainBanner";
import FirstRow from "../components/index/FirstRow";
import SecondRow from "../components/index/SecondRow";
import ThirdRow from "../components/index/ThirdRow";



const IndexPage = () => (
  <Layout>
    <SEO title="Design By Patrick - ADA Friendly Developer &amp; Designer" keywords={['Design By Patrick - ADA Friendly Developer &amp; Designer' ]} />
    <HomeMainBanner />
    <FirstRow />
    <SecondRow />
    <ThirdRow />
  </Layout>
)

export default IndexPage
