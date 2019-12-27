import styled, {css} from "styled-components";
import logo from "../../../assets/images/sematoMed_logo.png";


const Logo = styled.div`
   background-image: url(${logo});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   height: 10rem;
   width: 60rem;
   margin-top: 15vh;
   
   ${({smaller}) =>
    smaller &&
    css`
       height: 5rem;
       width: 30rem;
       margin-top: 0;
    `}
   
`;


export default Logo;