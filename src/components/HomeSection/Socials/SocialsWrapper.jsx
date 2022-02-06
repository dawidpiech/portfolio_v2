import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";


function SocialsWrapper() {


    const SocialList = [
        {
            link: "https://github.com/dawidpiech",
            icon: <AiFillGithub />,
        },
        {
            link: "https://www.linkedin.com/in/dawid-piech-2a2999159/",
            icon: <AiFillLinkedin />,
        }
    ]

    const SocialsWrapper = styled.div`
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 20px;
        left: 20px;
        padding: 0 0 70px 0;
        
    `

    const SocialLink = styled.a`
        color: ${props => props.theme.colors[1]};
        font-size: 2rem;
        margin: 15px 0;

        &:hover{
            color: ${props => props.theme.colors[2]};
            border-radius: 1rem;
        }
    `
  return (
    <SocialsWrapper>
        {
            SocialList.map((e, index) => {
                return (
                    <SocialLink href={e.link} key={index} target="_blank">
                        {e.icon}
                    </SocialLink>
                )
            })
        }
    </SocialsWrapper>

  );
}

export default SocialsWrapper;
