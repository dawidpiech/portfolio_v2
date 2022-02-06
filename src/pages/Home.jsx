import React from "react";
import styled from 'styled-components';
import AboutSection from "../components/AboutSection/AboutSection";
import HomeSection from "../components/HomeSection/HomeSection";
import Navigation from "../components/Navigation/Navigation";
import SkillsSection from "../components/SkillsSection/SkillsSection";

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
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <Section id="my-projects"></Section>
      <Section id="contact"></Section>
    </Layout>
  );
}

export default Home;
