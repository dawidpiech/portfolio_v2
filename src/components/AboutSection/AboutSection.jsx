import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function AboutSection() {

    const AboutSectionWrapper = styled.section`
        background: ${props => props.theme.colors[4]};
        padding: 30px 0 200px 0;
        display: flex;
        justify-content: center;
    `

    const AboutDescription = styled.div`
        text-align: center;
        color: ${props => props.theme.colors[1]};
        background: ${props => props.theme.colors[4]};
        width: 50%;

        ${props => props.theme.media.tablet} {
            width: 80%;
        }
    `

  return (
      <AboutSectionWrapper id="about">
            <AboutDescription as={motion.div} initial={{ y: 100, opacity: 0}} whileInView={{ y: 0, opacity: 1}} transition={{ duration: 1, times: [0, 0.7, 1] }}>
              <h1>Hi, I'm David. Nice to meet you.</h1>
              I am a computer science graduate and I am looking for experience as a front-end developer. I have a good command of Javascript ES6 and I'm learning React.js. I am eager to raise my qualifications through video courses and articles on technology blogs. I love to analyze and look for the most effective solutions to the problems encountered. I prefer individual work, but I have no problems finding myself in the team. 
            </AboutDescription>
      </AboutSectionWrapper>
  );
}

export default AboutSection;
