import React from "react";
import { Link, Redirect } from 'react-router-dom';
import styled from "styled-components";
import { routes } from '../../../routes';
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import GlobalStyle from "../../../theme/GlobalStyle";



const MenuShape = styled.div`
   display: flex;
   flex-direction: column;
   height: 75rem;
   width: 30rem;
   background-color: white; 
   border-radius: 20px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
   //justify-content: center;
   //justify-items:center; 
   align-items: center;
   z-index: 10;
   margin-top: 3rem;
`;


const Menu = () => (
    <MenuShape>

    </MenuShape>
);
export default Menu;
