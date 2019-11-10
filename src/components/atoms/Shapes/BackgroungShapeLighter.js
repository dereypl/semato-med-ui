import styled from "styled-components";
import back2 from "../../../images/bg_lighter.svg";
import Button from "../Button/Button";
import { css } from 'styled-components';

const BackgroungShapeLighter = styled.div`
    display: flex;
    background-image: url(${back2});
    background-size: contain;
    //background-size: 90%;
    background-repeat: no-repeat;
    height: 80vh;
    width: 44.5vw;
    justify-self: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    
    ${({ smaller }) =>
    smaller &&
    css`
       height: 40vh;
    width: 30vw;
    `}

`;

export default BackgroungShapeLighter;