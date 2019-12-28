import styled from "styled-components";

const PathInfoBox = styled.div`
    margin-top: 1.5rem;
    width: 45rem;
    height: 5rem;
    background-color: ${({theme}) => theme.medColor}
    color: ${({theme}) => theme.backgroundColor}
    font-size: ${({theme}) => theme.fontSize.l}
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;


export default PathInfoBox;