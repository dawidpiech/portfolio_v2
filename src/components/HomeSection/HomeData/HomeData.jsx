import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import Avatar from "../../../assets/avatar.png";
import CV from "../../../assets/CV.pdf";



function HomeData() {
    const HomeDataWrapper = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        top: 120px;

        ${props => props.theme.media.mobile} {
            top: 80px;
        }

        & > span {
            font-weight: 600;

            ${props => props.theme.media.mobile} {
                font-size: 1rem;
            }
        }


        & > h3 {
            font-weight: 600;
            margin: -10px  0 20px 0;
            color: ${props => props.theme.colors[1]};

            ${props => props.theme.media.mobile} {
                font-size: 1rem;
                margin: 0;
            }
        }

        & > h1 {
            font-weight: 900;
            font-size: 2rem;
            margin: 15px;
        }

        & > div {
            display: flex;
            justify-content: center;
            padding: 20px 0;
            flex-wrap: wrap;
        }
    `
    const ButtonAbout = styled(HashLink)`
        text-decoration: none;
        color: ${({theme}) => theme.colors[1]};
        font-weight: 600;
        font-size: 1.2rem;
        border-radius: 1rem;
        border: solid ${({theme}) => theme.colors[3]};
        padding: 10px 30px;
        margin: 10px 20px;    

        &:hover{
            background: ${({theme}) => theme.colors[3]};
            color: ${({theme}) => theme.colors[4]};
        }

        ${props => props.theme.media.mobile} {
            font-size: 1rem;
            padding: 5px 30px;
            margin: 5px 20px;  
        }
    `
    const ButtonDownloadCV = styled.a`
        text-decoration: none;
        color: ${({theme}) => theme.colors[1]};
        font-weight: 600;
        font-size: 1.2rem;
        border-radius: 1rem;
        border: solid ${({theme}) => theme.colors[1]};
        padding: 10px 30px;
        margin: 10px 20px;

        &:hover{
            background: ${({theme}) => theme.colors[1]};
            color: ${({theme}) => theme.colors[4]};
        }

        ${props => props.theme.media.mobile} {
            font-size: .8rem;
            padding: 5px 30px;
            margin: 5px 20px;  
        }
    `

    const AvatarWrapper = styled.div`
        overflow: hidden;
        border-radius: 50%;
        background: ${props => props.theme.colors[4]};
        width: 300px;
        height: 300px;
        border-radius: 50%;
        align-self: center;

        & > img{
            height: 320px;
        }

        ${props => props.theme.media.mobile} {
            width: 200px;
            height: 200px; 

            & > img{
            height: 220px;
            }
        }
    `

    

    return (
        <HomeDataWrapper>
            <span>Hello, I'm</span>
            <h1>Dawid Piech</h1>
            <h3>Beginner front end developer</h3>
            <div>
                <ButtonAbout smooth to="#about">About Me</ButtonAbout>
                <ButtonDownloadCV href={CV}>Download CV</ButtonDownloadCV>
            </div>
            <AvatarWrapper>
                <img src={Avatar} alt="Avatar"/>
            </AvatarWrapper>
        </HomeDataWrapper>
    );
}

export default HomeData;
