import React from "react";
import styled from "styled-components";
import {DiHeroku, DiReact, DiJsBadge, DiNodejs, DiSass, DiBootstrap, DiMongodb, DiGit, DiHtml5, DiGithubBadge} from "react-icons/di";
import {SiExpress, SiStyledcomponents} from "react-icons/si";


function SkillsSection() {

    const SkillsSectionWrapper = styled.section`     
        display: flex;
        justify-content: center;
        padding: 50px;
        margin: -150px;
    `
    const SkillsContent = styled.div`
        max-width: 1200px;
        border-radius: 30px;
        height: 500px;
        border: solid 1px ${props => props.theme.colors[1]};
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 200px;
        padding: 30px;
        background: ${props=> props.theme.colors[4]};

        & > h1 {
            font-size: 3rem;
            width: 100%;
            text-align: center;
            color: ${props => props.theme.colors[1]};
            margin: 10px 0;
        }
    `

    const Skill = styled.div`
        width: 200px;
        display: flex;
        flex-direction: column;
        text-align: center;
        color: ${props => props.theme.colors[2]};

        & > svg{
            align-self: center;
            font-size: 4rem;
        }

        & > span {
            color: ${props => props.theme.colors[1]};,
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
      <SkillsSectionWrapper id="skills">
          <SkillsContent>
              <h1>
                  My Skills
              </h1>
            {skillList.map((e, index)=>{
                return (
                    <Skill key={index}>
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
