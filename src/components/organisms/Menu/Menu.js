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
import logout_icon from "../../../assets/icons/logout_icon.svg"
import {logOutUser} from "../../../actions";
import Button from "../../atoms/Button/Button";
import {useDispatch} from 'react-redux'
import {purgeStoredState} from "redux-persist";
import {persistConfig} from "../../../store/configureStore";

const MenuContentWrapper = styled.div`
   width: 80%;
   height: 60rem;
   margin-top: 1rem;
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


const HorizontalSeparator = styled.div`
  display: flex;
  width: 70%;
  height: 1px;
  background-color: grey;
  opacity: 0.3;
  position: relative;
  margin-top: 2rem;
`;


const Menu = ({username,persistor}) => {

    const dispatch = useDispatch();

    const logoutUserTrigger = (e) => {
        e.preventDefault();
        console.log("triggered");
        // purgeStoredState(persistConfig);
        dispatch(logOutUser())
    };

    return (
        <MenuWrapper>
            <PlusesHalf/>
            <Logo smaller/>
            <Info>Najlepsza klinika na świecie, nie wiem czy wiecie.</Info>
            <MenuShape>
                <WelcomeHeading>Witaj,
                    <div>&nbsp;</div>
                    <p>{username}</p></WelcomeHeading>
                <HorizontalSeparator/>
                <MenuContentWrapper>
                    <MenuHeading>Wizyty</MenuHeading>
                    {MENU_ITEMS.Visits.map(item => <MenuItem key={item.option} content={item.option} route={item.route}
                                                             path={item.icon} icon_active={item.icon_active}/>)}
                    <MenuHeading>Pacjent</MenuHeading>
                    {MENU_ITEMS.Patient.map(item => <MenuItem key={item.option} content={item.option} route={item.route}
                                                              path={item.icon} icon_active={item.icon_active}/>)}
                    <MenuHeading>System</MenuHeading>
                    {MENU_ITEMS.System.map(item => <MenuItem key={item.option} content={item.option} route={item.route}
                                                             path={item.icon} icon_active={item.icon_active}/>)}
                    <Button onClick={(e) => logoutUserTrigger(e)}>Wyloguj</Button>

                </MenuContentWrapper>
            </MenuShape>
        </MenuWrapper>
    )
};
export default Menu;
