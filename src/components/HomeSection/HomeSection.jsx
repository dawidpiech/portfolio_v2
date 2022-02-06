import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";

function HomeSection() {


    const HomeSectionWrapper = styled.section`
        background: linear-gradient(115deg, ${(props => props.theme.colors[4])} 50%, ${(props => props.theme.colors[2])} 50%);
        height: 100vh;
        position: relative;
    `
  return (
    <HomeSectionWrapper id="home_section">
        <Logo></Logo>

    </HomeSectionWrapper>
  );
}

export default HomeSection;
