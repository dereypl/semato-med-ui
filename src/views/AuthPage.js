import React from 'react'
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import back from "../assets/images/bg.svg"
import back2 from "../assets/images/bg_lighter.svg"
import pluses from "../assets/images/Pluses.svg"
import doctor from "../assets/images/doctor.jpg"
import logo from "../assets/images/sematoMed_logo.png"
import Input from "../components/atoms/Input/Input"
import Button from "../components/atoms/Button/Button"
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter"
import Logo from "../components/atoms/Logo/Logo"


// import SignUpForm from '../components/organisms/SignUpForm/SignUpForm';
import SignInForm from '../components/organisms/SignInForm/SignInForm';
import Pluses from "../components/atoms/Shapes/Pluses";

const ContentWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const BackgroungShape = styled.div`
    display: flex;
    background-image: url(${back});
    background-size: contain;
    background-repeat: no-repeat;
    height: 90vh;
    width: 80vw;
    justify-self: flex-start;
    position: absolute;
    z-index: -2;
`;


const WelcomeParagraph = styled.div`
   display: flex;
   height: 6rem;
   width: 40rem;
   margin-bottom: 4rem;
   margin-top: 4rem;
   text-align: center;
   font-size: small;
   color: white;
`;


const DoctorPic = styled.div`
    display: flex;
    background-image: url(${doctor});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 45vw;
    justify-self: flex-end;
    position: absolute;
    right: 0;
    z-index: -10;
`;

const AuthPage = ({authType}) => (
    <>
        <GlobalStyle/>
        <BackgroungShape/>
        <BackgroungShapeLighter/>
        <Pluses/>
        <ContentWrapper>
            <Logo/>
            <WelcomeParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</WelcomeParagraph>
            {authType === 'signIn' && <SignInForm />}
            {/*{authType === 'signUp' && <SignUpForm />}*/}
            <DoctorPic></DoctorPic>
        </ContentWrapper>
    </>
);
export default AuthPage;


