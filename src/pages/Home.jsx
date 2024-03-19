import React from "react";
import styled from "styled-components";
import AboutSection from "../components/AboutSection/AboutSection";
import HomeSection from "../components/HomeSection/HomeSection";
import Navigation from "../components/Navigation/Navigation";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import MyProjectSection from "../components/MyProjectSection/MyProjectSection";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

function Home(props) {
  const Layout = styled.div`
    overflow-x: hidden;
  `;

  return (
    <Layout>
      <LoadingSpinner></LoadingSpinner>
      <Navigation></Navigation>
      <HomeSection changeTheme={props.changeTheme}></HomeSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <MyProjectSection></MyProjectSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </Layout>
  );
}

export default Home;
