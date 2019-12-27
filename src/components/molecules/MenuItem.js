import React from 'react';
import styled from 'styled-components'
import {NavLink } from "react-router-dom";

const MenuItemWrapper = styled.div`
width: 90%;
height: 3rem;
display: flex;
align-items: center;
border-radius: 10px;
font-size: ${({theme}) => theme.fontSize.s};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  list-style: none;
  text-decoration: none;
  color: ${({theme}) => theme.medGrey};
  margin-bottom: 0.5rem;
&:hover{
  background-color: ${({theme}) => theme.medGrey};
    color: white;

}
  &.active {
     background-color: ${({theme}) => theme.medColor};
         color: white;
  }

`;

const MenuItemImage = styled.div`
height: 24px;
width: 24px;
margin-right: 10px;
margin-left: 20px;
background-image: url(${props => props.path});
`;

const MenuItem = ({content, route, path}) => (
    <MenuItemWrapper as={NavLink} to={route} activeclass="active">
        <MenuItemImage path={path}/>
        {content}
    </MenuItemWrapper>
);

export default MenuItem;