import React from "react";
import {Link, Redirect} from 'react-router-dom';
import styled from "styled-components";
import {routes} from '../../../routes';
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import GlobalStyle from "../../../theme/GlobalStyle";
import WelcomeHeading from "../../atoms/Heading/WelcomeHeading";
import PlusesHalf from "../../atoms/Shapes/PlusesHalf";
import Logo from "../../atoms/Logo/Logo";


const MenuWrapper = styled.div`
   width: 22%;
   height: 100vh;
   padding-top: 5rem;
`;


const MenuShape = styled.div`
   display: flex;
   flex-direction: column;
   height: 75rem;
   width: 30rem;
   background-color: white; 
   border-radius: 20px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
   align-items: center;
   z-index: 10;
   margin-top: 3rem;
`;

const Info = styled.p`
display: block;
width: 30rem;
color: white;
text-align: center;
font-size: 1rem;
`;


const Menu = ({username}) => (
    <MenuWrapper>
        <PlusesHalf/>
        <Logo smaller/>
        <Info>Najlepsza klinika na świecie, nie wiem czy wiecie.</Info>
        <MenuShape>
            <WelcomeHeading>Witaj,
                <div>&nbsp;</div>
                <p>{username}</p></WelcomeHeading>
        </MenuShape>
    </MenuWrapper>
);
export default Menu;
