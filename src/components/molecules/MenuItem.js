import React from 'react';
import styled from 'styled-components'
import {NavLink } from "react-router-dom";


const MenuItemImage = styled.div`
height: 24px;
width: 24px;
margin-right: 10px;
margin-left: 20px;
background-image: url(${props => props.path});
    background-size: 90%;
    background-repeat: no-repeat;
`;


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
  
  &:hover ${MenuItemImage}{
  background-image: url(${props => props.icon_active});

  }
  &.active {
     background-color: ${({theme}) => theme.medColor};
         color: white;
  }
  
  &.active ${MenuItemImage}{
  background-image: url(${props => props.icon_active});
  }
`;

const MenuItem = ({content, route, path, icon_active}) => (
    <MenuItemWrapper as={NavLink} to={route} activeclass="active" icon_active={icon_active}>
        <MenuItemImage path={path} icon_active={icon_active}/>
        {content}
    </MenuItemWrapper>
);

export default MenuItem;