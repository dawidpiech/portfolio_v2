import React from "react";
import styled from "styled-components";
import HomeData from "./HomeData/HomeData";
import Logo from "./Logo/Logo";
import SocialsWrapper from "./Socials/SocialsWrapper";
import ScrollDown from "./ScrollDown/ScrollDown";
import DarkModeButton from "./DarkMode/DarkModeButton";

function HomeSection(props) {
  const HomeSectionWrapper = styled.section`
    background: linear-gradient(
      115deg,
      ${(props) => props.theme.colors[4]} 50%,
      ${(props) => props.theme.colors[2]} 50%
    );
    height: 100vh;
    position: relative;
    overflow: hidden;
    min-height: 680px;
  `;

  return (
    <HomeSectionWrapper id="home_section">
      <Logo></Logo>
      <DarkModeButton changeTheme={props.changeTheme}></DarkModeButton>
      <HomeData></HomeData>
      <SocialsWrapper></SocialsWrapper>
      <ScrollDown></ScrollDown>
    </HomeSectionWrapper>
  );
}

export default HomeSection;
