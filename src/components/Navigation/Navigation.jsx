import React from "react";
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import {BsBriefcase} from 'react-icons/bs';
import {GoTools} from 'react-icons/go';


function Navigation() {

    const menuButtons = [
        {
            name: "Home",
            id: "home_section",
            icon: <AiOutlineHome />
        },
        {
            name: "About",
            id: "about",
            icon: <BsPerson />
        },
        {
            name: "Skills",
            id: "skills",
            icon: <GoTools />
        },
        {
            name: "Work",
            id: "my-projects",
            icon: <BsBriefcase />
        },
        {
            name: "Contact",
            id: "contact",
            icon: <AiOutlineMessage />
        }
    ];

    const NavigationWrapper = styled.nav`

        position: fixed;
        bottom: 1rem;
        background: ${({theme}) => theme.colors[4] + "DD"};
        border-radius: 4rem;
        padding: .7rem 2.25rem;
        width: 50%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 9px 35px -13px rgba(66, 68, 90, 1);
        z-index: 1000;

        ${({theme}) => theme.media.tablet} {
            width: 80%;
        }


        & > ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
    `

    const Link = styled(HashLink)`
        text-decoration: none;
        display: block;
        color: ${({theme}) => theme.colors[1]};
        font-size: 1.5rem;
        padding: .8rem;
        border-radius: 20rem;

        &:hover{
            background: ${({theme}) => theme.colors[2]+"AA"};
            box-shadow: 0px 0px 35px -8px rgba(66, 68, 90, 1);
        }
    `


    return (
        <NavigationWrapper>
            <ul>
                {
                    menuButtons.map((e, id) => {
                        return (
                            <li key={id}>
                                <Link smooth to={`#${e.id}`}>{e.icon}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </NavigationWrapper>
    );
}

export default Navigation;
