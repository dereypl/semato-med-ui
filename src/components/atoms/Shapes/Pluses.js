import styled from "styled-components";
import pluses from "../../../images/Pluses.svg";

const Pluses = styled.div`
    display: flex;
    background-image: url(${pluses});
    background-size: contain;
    background-repeat: no-repeat;
    height: 52vh;
    width: 40vw;
    margin-left: 18rem;
    margin-top: 30rem;
    justify-self: flex-start;
    position: absolute;
    z-index: 1;
`;

export default Pluses;