import styled from "styled-components";
import plusesHalf from "../../../assets/images/Pluses-half.svg";

const PlusesHalf= styled.div`
    display: flex;
    background-image: url(${plusesHalf});
    background-size: contain;
    background-repeat: no-repeat;
    height: 10rem;
    width: 10rem;
    margin-left: 32rem;
    margin-top: 6rem;
    justify-self: flex-start;
    position: absolute;
`;

export default PlusesHalf;