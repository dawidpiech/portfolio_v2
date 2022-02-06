import React from "react";
import styled from "styled-components";

function AboutSection() {

    const AboutSectionWrapper = styled.div`
        background: ${props => props.theme.colors[1]};
        padding: 30px 0 300px 0;
        display: flex;
        justify-content: center;
    `

    const AboutDescription = styled.div`
        text-align: center;
        color: ${props => props.theme.colors[4]};
        width: 50%;

        ${props => props.theme.media.mobile} {
            width: 80%;
        }
    `

  return (
      <AboutSectionWrapper id="about">
            <AboutDescription>
              <h1>Hi, I'm David. Nice to meet you.</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quas saepe dolorum ex dolores natus illo quia molestiae sapiente magnam minima ab laudantium, dolore deleniti qui error, sit autem. Suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod excepturi totam commodi nihil. Laudantium cum aperiam pariatur accusantium numquam labore cupiditate. Maxime voluptatum sequi nam assumenda dolorum eius vitae tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, unde quod autem possimus optio praesentium accusantium aliquam quisquam illo. Voluptas facilis consequatur consequuntur nemo eaque, praesentium ea sit error molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </AboutDescription>
      </AboutSectionWrapper>
  );
}

export default AboutSection;
