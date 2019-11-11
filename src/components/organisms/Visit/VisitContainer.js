import styled, {css} from "styled-components";

const VisitContainer = styled.div`
    height: 10rem;
    width: 100%;
    display: flex;
    border-radius: 10px;
    background-color: ${({theme}) => theme.backgroundColor};
    margin-bottom: 15px;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.09);
    
    &::before {
    content: '';
    height: 7.5rem;
    width: 3%;
    border-radius: 10px;
    background-color: ${({theme}) => theme.medGrey};
    display: flex;
    align-self: center;
    margin-left: -1.2rem;
    z-index: -1;
    }
    
    ${({nearest}) =>
    nearest &&
    css`

      &::before {
      background-color: ${({theme}) => theme.medColor};
      }
      
   `}

`;
export default VisitContainer;
