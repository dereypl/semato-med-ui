import React from "react";
import styled from "styled-components";
import WelcomeHeading from "../../atoms/Heading/WelcomeHeading";
import PlusesHalf from "../../atoms/Shapes/PlusesHalf";
import Logo from "../../atoms/Logo/Logo";
import MenuHeading from "../../atoms/Heading/MenHeading";
import MenuItem from "../../molecules/MenuItem";
import MENU_ITEMS from "../../../assets/MenuItems";
import {logOutUser} from "../../../actions";
import Button from "../../atoms/Button/Button";
import {useDispatch} from 'react-redux'

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

const Menu = ({currentUser}) => {
    const dispatch = useDispatch();

    const logoutUserTrigger = (e) => {
        e.preventDefault();
        console.log("triggered");
        // purgeStoredState(persistConfig);
        dispatch(logOutUser())
    };

    const getRoleBasedResources = ({role}) => {
        switch(role){
            case 'ROLE_PATIENT':
                return(
                    <>
                        <MenuHeading>Wizyty</MenuHeading>
                        {MENU_ITEMS.Visits.map(item => <MenuItem key={item.option} content={item.option} route={item.route}
                                                                 path={item.icon} icon_active={item.icon_active}/>)}
                        <MenuHeading>Pacjent</MenuHeading>
                        {MENU_ITEMS.Patient.map(item => <MenuItem key={item.option} content={item.option} route={item.route}
                                                                  path={item.icon} icon_active={item.icon_active}/>)}
                        <MenuHeading>System</MenuHeading>
                        {MENU_ITEMS.System.map(item => <MenuItem key={item.option} content={item.option} route={item.route}
                                                                 path={item.icon} icon_active={item.icon_active}/>)}
                    </>
                );
            case 'ROLE_PHYSICIAN':
                return(
                    <>
                        <MenuHeading>Wizyty</MenuHeading>
                        {MENU_ITEMS.VisitsPhysician.map(item => <MenuItem key={item.option} content={item.option} route={item.route}
                                                                 path={item.icon} icon_active={item.icon_active}/>)}
                        <MenuHeading>System</MenuHeading>
                        {<MenuItem key={MENU_ITEMS.Patient[2].option} content={MENU_ITEMS.Patient[2].option} route={MENU_ITEMS.Patient[2].route} path={MENU_ITEMS.Patient[2].icon} icon_active={MENU_ITEMS.Patient[2].icon_active}/>}
                        {MENU_ITEMS.System.map(item => <MenuItem key={item.option} content={item.option} route={item.route}
                                                                 path={item.icon} icon_active={item.icon_active}/>)}
                    </>
                );
            default: break;
        }
    };

    return (
        <MenuWrapper>
            <PlusesHalf/>
            <Logo smaller/>
            <Info>Najlepsza klinika na świecie, nie wiem czy Państwo wiecie.</Info>
            <MenuShape>
                <WelcomeHeading>Witaj,
                    <div>&nbsp;</div>
                    <p>{currentUser.firstName + " " + currentUser.lastName}</p></WelcomeHeading>
                <HorizontalSeparator/>
                <MenuContentWrapper>
                    {getRoleBasedResources(currentUser)}
                    <Button onClick={(e) => logoutUserTrigger(e)}>Wyloguj</Button>
                </MenuContentWrapper>
            </MenuShape>
        </MenuWrapper>
    )
};

Menu.defaultProps = {
    currentUser: {}
};
export default Menu;
