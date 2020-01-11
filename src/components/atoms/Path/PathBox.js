import React from 'react';
import styled from "styled-components";


const PathBoxWrapper = styled.div`
    width: 45rem;
    height: 10rem;
    background-color: ${({theme}) => theme.backgroundColor};
    font-weight: ${({theme}) => theme.fontWeight.medium};
    color: ${({theme}) => theme.medColor};
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    justify-content: center;
    
    align-items: center;
    font-size: 2.4rem;
`;

const PathImage = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 1.5rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${({pathIcon}) => `url(${pathIcon})`};
   
`;



const PathBox = ({children,pathIcon}) => (
    <PathBoxWrapper>
        <PathImage pathIcon={pathIcon}/>
        {children}
    </PathBoxWrapper>
);


export default PathBox;