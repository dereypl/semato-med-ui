import React from "react";
import {Link, NavLink, Redirect} from 'react-router-dom';
import styled from "styled-components";
import {routes} from "../../../routes";
import WelcomeHeading from "../../atoms/Heading/WelcomeHeading";
import PlusesHalf from "../../atoms/Shapes/PlusesHalf";
import Logo from "../../atoms/Logo/Logo";
import MenuHeading from "../../atoms/Heading/MenHeading";
import MenuItem from "../../molecules/MenuItem";
import MenuParagraph from "../../atoms/Paragraph/MenuParagraph";
import MENU_ITEMS from "../../../assets/data_hardcoded";

const MenuContentWrapper = styled.div`
   width: 80%;
   height: 60rem;
   margin-top: 2rem;
`;


const MenuWrapper = styled.div`
   width: 25%;
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
   box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.09);
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
            <MenuContentWrapper>
                <MenuHeading>Wizyty</MenuHeading>
                {MENU_ITEMS.Visits.map(item => <MenuItem content={item.option} route={item.route} path={item.icon}/>)}
                <MenuHeading>Pacjent</MenuHeading>
                {MENU_ITEMS.Patient.map(item => <MenuItem content={item.option} route={item.route} path={item.icon}/>)}
                <MenuHeading>System</MenuHeading>
                {MENU_ITEMS.System.map(item => <MenuItem content={item.option} route={item.route} path={item.icon}/>)}
            </MenuContentWrapper>
        </MenuShape>
    </MenuWrapper>
);
export default Menu;
