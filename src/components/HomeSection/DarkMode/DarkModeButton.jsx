import React from "react";
import styled, {useTheme} from "styled-components";
import { FaRegMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';

function DarkModeButton(props) {
    const DarkModeWrapper = styled.div`
        margin: 40px;
        right: 0;
        position: absolute;
        cursor: pointer;

       & > svg {
        color: ${props => props.theme.colors[4]};
        font-size: 2rem;
       }
    `

    const theme = useTheme()

    const changeTheme = () => {
      props.changeTheme();
      console.log(theme)
    }


  return (
      <DarkModeWrapper>
        { theme.mode === "light" ? <FaRegMoon onClick={changeTheme}/> : <BsSun onClick={changeTheme}/>}
      </DarkModeWrapper>
  );
}

export default DarkModeButton;
