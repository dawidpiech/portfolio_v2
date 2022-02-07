import React from "react";
import styled from "styled-components";
import Sportejo from "../../assets/images/sportejo.png";
import Billterra from "../../assets/images/billterra.png";
import Portfolio from "../../assets/images/portfolio.png";
import Webcatalog from "../../assets/images/webcatalog.png";

function MyProjectSection() {

    const MyProjectSectionWrapper = styled.section`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        color: ${props => props.theme.colors[1]};

        & > h1 {
            width: 100%;
            font-size: 3rem;
            margin: 10px 0;
            text-align: center;
            margin: 40px 0;
        }
    `
    const ProjectWrapper = styled.div`
        max-width: 1200px;
        margin: 30px 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        & > div {
            width: 50%;
            margin: 10px 0;

            ${props => props.theme.media.tablet} {
                width: 100%;
            }
        }

        & > div > h1{
            font-size: 2rem;
            margin: 10px;
        }

        & > div > div > span {
            border-radius: 1rem;
            background: ${props => props.theme.colors[2]};
            color: ${props => props.theme.colors[4]};
            margin: 5px;
            padding: 5px 10px;
        }

        & > div > div {
            display: flex;
            flex-wrap: wrap;
        }

        & > div > p {
            padding: 10px;
            text-align: justify;
        }

        & > img {
            width: 50%;
            margin: 10px 0;

            ${props => props.theme.media.tablet} {
                width: 100%;
            }
        }
    `

    const Button = styled.a`
        text-decoration: none;
        padding: 5px 30px;
        margin: 0 10px;
        border: 4px solid ${props => props.theme.colors[2]};
        color: ${props => props.theme.colors[1]};
        border-radius: 2rem;
        font-weight: 700;

        &:hover{
            background: ${props => props.theme.colors[2]};
            color: ${props => props.theme.colors[4]};
        }
    `

    const projectList = [
        {
            name: "Portfolio",
            technologies: ["React.js", "Styled Components"],
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit libero dolor nihil eligendi soluta, voluptates quasi ipsum molestias illum atque, quidem quos sunt. Beatae quidem accusamus repellat ipsam dolore?",
            mockup: Portfolio,
            linkToRepo: "https://github.com/dawidpiech/portfolio_v2",
            linkToLive: "https://piech.it/"
        },
        {
            name: "Sportejo",
            technologies: ["React.js", "Node.js", "Express.js", "Sass", "MongoDB", "Mongoose"],
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit libero dolor nihil eligendi soluta, voluptates quasi ipsum molestias illum atque, quidem quos sunt. Beatae quidem accusamus repellat ipsam dolore?",
            mockup: Sportejo,
            linkToRepo: "https://github.com/dawidpiech/SPORTEJO",
            linkToLive: "https://sportjeo.piech.it/"
        },
        {
            name: "BillTerra",
            technologies: ["React.js", "Sass", ".Net Core"],
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit libero dolor nihil eligendi soluta, voluptates quasi ipsum molestias illum atque, quidem quos sunt. Beatae quidem accusamus repellat ipsam dolore?",
            mockup: Billterra,
            linkToRepo: "https://github.com/dawidpiech/BillTerra",
            linkToLive: "https://billterra.piech.it/"
        },
        
        {
            name: "WebCatalog",
            technologies: ["HTML5", "CSS"],
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit libero dolor nihil eligendi soluta, voluptates quasi ipsum molestias illum atque, quidem quos sunt. Beatae quidem accusamus repellat ipsam dolore?",
            mockup: Webcatalog,
            linkToRepo: "https://github.com/dawidpiech/WebCatalog",
            linkToLive: "https://webcatalog.piech.it/"
        },
    ]

  return (
      <MyProjectSectionWrapper id="my-projects">
          <h1>My Projects</h1>
          {projectList.map((e, index)=>{
              return (
                <ProjectWrapper key={index}>
                    <div>
                            <h1>{e.name}</h1>
                            <div>
                                {e.technologies.map((e, index)=>{
                                    return <span key={index}>{e}</span>
                                })}
                            </div>
                            <p>{e.description}</p>
                            <div>
                                <Button href={e.linkToLive} target="_blank">LIVE</Button>
                                <Button href={e.linkToRepo} target="_blank">CODE</Button>
                            </div>
                    </div>
                    <img src={e.mockup} alt={e.name}></img>
                </ProjectWrapper>
              );
          })}
      </MyProjectSectionWrapper>
  );
}

export default MyProjectSection;
