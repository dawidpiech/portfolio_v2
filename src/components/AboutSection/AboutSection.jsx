import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function AboutSection() {
  const AboutSectionWrapper = styled.section`
    background: ${(props) => props.theme.colors[4]};
    padding: 30px 0 200px 0;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
  `;

  const AboutDescription = styled.div`
    text-align: justify;
    color: ${(props) => props.theme.colors[1]};
    background: ${(props) => props.theme.colors[4]};
    width: 50%;

    & h1 {
      text-align: center;
    }

    ${(props) => props.theme.media.tablet} {
      width: 80%;
    }
  `;

  return (
    <AboutSectionWrapper id="about">
      <AboutDescription
        as={motion.div}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, times: [0, 0.7, 1] }}
      >
        <h1>Hi, I'm David. Nice to meet you.</h1>
        Front-end developer with solid skills in Javascript ES6 and intensive
        study of React.js. In addition to my front-end expertise, I can also
        effectively create simple programming interfaces (APIs) and have
        extensive knowledge of database design and maintenance. I have
        experience in developing innovative web applications, and my analytical
        skills allow me to solve problems effectively. I demonstrate flexibility
        at work, being able to both work effectively individually and
        collaborate in a team. I have experience working with a variety of
        technical and non-technical teams, as well as with business clients. I
        am currently looking for new challenges and opportunities to develop my
        skills.
      </AboutDescription>
    </AboutSectionWrapper>
  );
}

export default AboutSection;
