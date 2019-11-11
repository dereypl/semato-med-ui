import React from "react";
import styled from "styled-components";

const BackgroundHeader = styled.div`
    background-color: ${({theme}) => theme.medColor};
    width: 100%;
    height: 22rem;
    position: absolute;
    z-index: -10;
    top:0;
`;

export default BackgroundHeader;