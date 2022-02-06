import React from "react";
import styled from 'styled-components';
import HomeSection from "../components/HomeSection/HomeSection";
import Navigation from "../components/Navigation/Navigation";

function Home() {
  const Layout = styled.div`
    overflow-x: hidden;
  `

  const Section = styled.section`
    width: 100%;
    height: 800px;
  `

  return (
    <Layout>
      <Navigation></Navigation>
      <HomeSection></HomeSection>
      <Section id="section-2"></Section>
      <Section id="section-3"></Section>
      <Section id="section-4"></Section>
      <Section id="section-5"></Section>
    </Layout>
  );
}

export default Home;
