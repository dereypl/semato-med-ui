import React from 'react';
import styled from "styled-components";
import PathInfoBox from "../../atoms/Path/PathInfoBox";
import PathBox from "../../atoms/Path/PathBox";

const PathWrapper = styled.div`
    width: 45rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const PathContainer = ({path,pathInfo, pathIcon}) => (
    <PathWrapper>
        <PathBox pathIcon={pathIcon}>{path}</PathBox>
        <PathInfoBox>{pathInfo}</PathInfoBox>
    </PathWrapper>
);


export default PathContainer;
