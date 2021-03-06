import React from 'react';
import styled from 'styled-components'
import {NavLink } from "react-router-dom";

const MenuItemImage = styled.div`
    height: 24px;
    width: 24px;
    margin-right: 10px;
    margin-left: 20px;
    background-image: url(${props => props.path});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

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
   
   transition: all .15s;
   transition-delay: .06s;
  background-position: 0;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${({ theme }) => theme.medGrey} 50%);
  background-size: 220%;
          &:hover{
            color: white;
            background-position: 100%;
          }
  
  
  &:hover ${MenuItemImage}{
  background-image: url(${props => props.icon_active});
  transition-delay: .1s;
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