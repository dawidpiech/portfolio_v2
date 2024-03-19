import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AboutSection from "../components/AboutSection/AboutSection";
import HomeSection from "../components/HomeSection/HomeSection";
import Navigation from "../components/Navigation/Navigation";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import MyProjectSection from "../components/MyProjectSection/MyProjectSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

function Home(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const Layout = styled.div`
    overflow-x: hidden;
  `;

  return (
    <Layout>
      <LoadingSpinner isLoading={isLoading}></LoadingSpinner>
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
