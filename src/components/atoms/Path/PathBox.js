import React from 'react';
import styled, {ThemeProvider} from "styled-components";

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
    background-color: ${({theme}) => theme.medColor};
    margin-right: 1.5rem;
`;



const PathBox = ({children}) => (
    <PathBoxWrapper>
        <PathImage/>
        {children}
    </PathBoxWrapper>
);


export default PathBox;