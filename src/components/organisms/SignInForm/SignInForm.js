import React from "react";
import { Link, Redirect } from 'react-router-dom';
import styled from "styled-components";
import { routes } from '../../../routes';
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import GlobalStyle from "../../../theme/GlobalStyle";


const InfoParagraph = styled.h1`
   margin-bottom: 8rem;
   margin-top: 5rem;
   text-align: center;
   font-size: small;
   color: #7E828B;
   font-weight: ${({theme}) =>  theme.fontWeight.regular};
`;

const LoginForm = styled.div`
   display: flex;
   flex-direction: column;
   height: 50rem;
   width: 40rem;
   background-color: white; 
   border-radius: 20px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
   //justify-content: center;
   //justify-items:center; 
   align-items: center;
   z-index: 10;
`;


const SignInForm = ({authType}) => (
    <LoginForm>
        <InfoParagraph>Logowanie do systemu</InfoParagraph>
        <Input placeholder={"Login"}/>
        <Input placeholder={"Hasło"}/>
        <Button>Zaloguj</Button>
        <Link to={routes.home}>test</Link>
    </LoginForm>
);
export default SignInForm;
