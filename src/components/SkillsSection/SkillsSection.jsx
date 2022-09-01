import React from "react";
import styled from "styled-components";
import {DiHeroku, DiReact, DiJsBadge, DiNodejs, DiSass, DiBootstrap, DiMongodb, DiGit, DiHtml5, DiGithubBadge} from "react-icons/di";
import {SiExpress, SiStyledcomponents} from "react-icons/si";
import { motion } from "framer-motion";


function SkillsSection() {

    const SkillsSectionWrapper = styled.section`     
        display: flex;
        justify-content: center;
        position: relative;
    `
    const SkillsContent = styled.div`
        max-width: 1200px;
        border-radius: 30px;
        border: solid 1px ${props => props.theme.colors[1]};
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: -150px 200px 50px 200px;
        padding: 30px;
        background: #FFFFFF;
        box-shadow: 0px 5px 35px -22px rgba(66, 68, 90, 1);

        ${props => props.theme.media.tablet} {
            margin: -150px 100px 50px 100px;
        }

        & > h1 {
            font-size: 3rem;
            width: 100%;
            text-align: center;
            color: ${props => props.theme.colors[0]};
            margin: 10px 0;
        }
    `

    const Skill = styled.div`
        width: 200px;
        display: flex;
        flex-direction: column;
        text-align: center;
        color: ${props => props.theme.colors[2]};
        padding: 20px 10px;

        & > svg{
            align-self: center;
            font-size: 4rem;
        }

        & > span {
            color: ${props => props.theme.colors[0]};,
            font-size: 1rem;
        }
    `

    const skillList = [
        {
            name: "React", 
            icon: <DiReact />,
        },
        {
            name: "Styled Components", 
            icon: <SiStyledcomponents />,
        },
        {
            name: "MongoDB", 
            icon: <DiMongodb />,
        },
        {
            name: "Vanilla JS", 
            icon: <DiJsBadge />,
        },
        {
            name: "Node.js", 
            icon: <DiNodejs />,
        },
        {
            name: "Express", 
            icon: <SiExpress />,
        },
        {
            name: "Heroku", 
            icon: <DiHeroku />,
        },
        {
            name: "Sass", 
            icon: <DiSass />,
        },
        {
            name: "Bootstrap", 
            icon: <DiBootstrap />,
        },
        {
            name: "Git", 
            icon: <DiGit />,
        },
        {
            name: "Github", 
            icon: <DiGithubBadge />,
        },
        {
            name: "HTML5", 
            icon: <DiHtml5 />,
        }
    ]

  return (
      <SkillsSectionWrapper>
          <SkillsContent id="skills">
              <h1>
                  My Skills
              </h1>
            {skillList.map((e, index)=>{
                return (
                    <Skill key={index} as={motion.div} initial={{ rotate: 100, opacity: 0}} whileInView={{ rotate: 0, opacity: 1}} transition={{ duration: 1, delay: index * 0.1}} >
                        {e.icon}
                        <span>{e.name}</span>
                    </Skill>
                );
            })}
          </SkillsContent>
      </SkillsSectionWrapper>
  );
}

export default SkillsSection;
