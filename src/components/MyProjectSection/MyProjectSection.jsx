import React from "react";
import styled from "styled-components";
import Sportejo from "../../assets/images/sportejo.jpg";
import Portfolio from "../../assets/images/portfolio.jpg";
import MovieApp from "../../assets/images/movieapp.jpg";
import AbbRetentionTool from "../../assets/images/abb-retention-tool.jpg";
import { motion } from "framer-motion";

function MyProjectSection() {
  const MyProjectSectionWrapper = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors[1]};
    background: ${(props) => props.theme.colors[4]};

    & > h1 {
      width: 100%;
      font-size: 3rem;
      margin: 10px 0;
      text-align: center;
      margin: 40px 0;
      letter-spacing: 0.3rem;
    }
  `;
  const ProjectWrapper = styled.div`
    max-width: 1200px;
    margin: 30px 0;
    display: flex;
    flex-direction: ${(props) => (props.id % 2 === 0 ? "row" : "row-reverse")};
    flex-wrap: wrap;

    & > div {
      width: 50%;
      margin: 10px 0;
      padding: 0 20px;

      ${(props) => props.theme.media.tablet} {
        width: 100%;
      }
    }

    & > div > h1 {
      font-size: 2rem;
      margin: 10px;
    }

    & > div > div > span {
      border-radius: 1rem;
      background: ${(props) => props.theme.colors[2]};
      color: ${(props) => props.theme.colors[4]};
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
      border-radius: 10px;

      ${(props) => props.theme.media.tablet} {
        width: 100%;
      }
    }
  `;

  const Button = styled.a`
    text-decoration: none;
    padding: 5px 30px;
    margin: 0 10px;
    border: 4px solid ${(props) => props.theme.colors[2]};
    color: ${(props) => props.theme.colors[1]};
    border-radius: 2rem;
    font-weight: 700;

    &:hover {
      background: ${(props) => props.theme.colors[2]};
      color: ${(props) => props.theme.colors[4]};
    }
  `;

  const projectList = [
    {
      name: "ABB Retention Tool",
      technologies: [
        "TypeScript",
        "React.js",
        "Styled Components",
        "SQLServer",
        "Node.js",
        "Express.js",
      ],
      description:
        "A commercial project commissioned by ABB. The application was developed for effective data management, allowing the user to easily retrieve and view information from the database in a transparent manner. In addition, the user has the ability to filter records using multiple parameters. The entire application was written in TypeScript The backend of the application was implemented using the Node.js environment in conjunction with the Express.js framework , while the frontend was created using React.js. The application uses a database based on SQL Server.",
      mockup: AbbRetentionTool,
      linkToRepo: "https://github.com/dawidpiech/ABB-Report-app",
      linkToLive: "https://abb-retention-tool.piech.it/",
    },
    {
      name: "MovieAPP",
      technologies: [
        "React.js",
        "Styled Components",
        "React Redux",
        "Redux Saga",
        "Axios",
      ],
      description:
        "Movie Browser is an application where you can browse the films, actors and crew working on a film. In addition, the app has a search engine where you can find your favourite film and actor.",
      mockup: MovieApp,
      linkToRepo: "https://github.com/dawidpiech/MovieAPP",
      linkToLive: "https://movieapp.piech.it/",
    },
    {
      name: "Portfolio",
      technologies: ["React.js", "Styled Components"],
      description:
        "Portfolio page where I presents my projects. It was written in accordance with good practice using React.js and the Styled Components library.",
      mockup: Portfolio,
      linkToRepo: "https://github.com/dawidpiech/portfolio_v2",
      linkToLive: "https://piech.it/",
    },
    {
      name: "Sportejo",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Sass",
        "MongoDB",
        "Mongoose",
      ],
      description:
        "Application for renting sports facilities. Node.js with a database based on MongoDB is responsible for the server side, while the frontend was written in React.js.",
      mockup: Sportejo,
      linkToRepo: "https://github.com/dawidpiech/SPORTEJO",
      linkToLive: "https://sportejo.piech.it/",
    },
  ];

  return (
    <MyProjectSectionWrapper id="my-projects">
      <h1>My Projects</h1>
      {projectList.map((e, index) => {
        return (
          <ProjectWrapper key={index} id={index}>
            <motion.div
              as={motion.div}
              initial={{ opacity: 0, x: -500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ time: 1 }}
            >
              <h1>{e.name}</h1>
              <div>
                {e.technologies.map((e, index) => {
                  return <span key={index}>{e}</span>;
                })}
              </div>
              <p>{e.description}</p>
              <div>
                {e.linkToLive !== "" ? (
                  <Button href={e.linkToLive} target="_blank">
                    LIVE
                  </Button>
                ) : (
                  ""
                )}
                {e.linkToRepo !== "" ? (
                  <Button href={e.linkToRepo} target="_blank">
                    CODE
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </motion.div>
            <motion.img
              src={e.mockup}
              alt={e.name}
              initial={{ opacity: 0, x: 500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ times: [0, 0.7, 1] }}
            ></motion.img>
          </ProjectWrapper>
        );
      })}
    </MyProjectSectionWrapper>
  );
}

export default MyProjectSection;
