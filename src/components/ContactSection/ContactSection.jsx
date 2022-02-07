import React from "react";
import styled from "styled-components";

function ContactSection() {

    const ContactSectionWrapper = styled.section`
        background: ${props => props.theme.colors[2]};
        padding: 30px 0 70px 0;
        display: flex;
        justify-content: center;
        flex-direction: column;

        & > h1 {
            color: ${props => props.theme.colors[4]};
            text-align: center;
            font-size: 3rem;
        }

    `

    
    const Button = styled.a`
        align-self: center;
        padding: 20px 40px;
        border-radius: 1rem;
        border: solid 2px ${props => props.theme.colors[4]};
        text-decoration: none;
        color: ${props => props.theme.colors[4]};
        font-weight: 600;

        &:hover{
            border: solid 2px ${props => props.theme.colors[1]};
            background: ${props => props.theme.colors[1]};
            
        }
    `

  return (
      <ContactSectionWrapper id="contact">
          <h1>Contact to me.</h1>
          <Button href="mailto:dawid.piech243@gmail.com">SEND ME A MAIL</Button>
      </ContactSectionWrapper>
  );
}

export default ContactSection;
