import React from "react";
import { CgMouse } from "react-icons/cg";
import styled from "styled-components";

function ScrollDown() {

    const ScrollDown = styled.div`
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 90px;
        right: 20px;
        color: ${props => props.theme.colors[1]};

        & > span{
            text-orientation: sideways;
            writing-mode: vertical-lr;
            margin: 10px 0;
        }
    `

  return (
    <ScrollDown>
        <CgMouse></CgMouse>
        <span>Scroll Down</span>
    </ScrollDown>
  )
}

export default ScrollDown;
