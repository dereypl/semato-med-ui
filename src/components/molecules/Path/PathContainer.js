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

const PathContainer = ({path}) => (
    <PathWrapper>
        <PathBox>{path}</PathBox>
        <PathInfoBox>{path}</PathInfoBox>
    </PathWrapper>
);


export default PathContainer;
