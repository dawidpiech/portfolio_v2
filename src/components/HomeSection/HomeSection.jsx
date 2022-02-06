import React from "react";
import styled from "styled-components";
import HomeData from "./HomeData/HomeData";
import Logo from "./Logo/Logo";
import SocialsWrapper from "./Socials/SocialsWrapper";
import ScrollDown from "./ScrollDown/ScrollDown";

function HomeSection() {

    const HomeSectionWrapper = styled.section`
        background: linear-gradient(115deg, ${(props => props.theme.colors[4])} 50%, ${(props => props.theme.colors[2])} 50%);
        height: 100vh;
        position: relative;
        overflow: hidden;
    `    

    return (
        <HomeSectionWrapper id="home_section">
            <Logo></Logo>
            <HomeData></HomeData>
            <SocialsWrapper></SocialsWrapper>
            <ScrollDown></ScrollDown>
        </HomeSectionWrapper>
    );
}

export default HomeSection;
