import styled from 'styled-components'

const WelcomeHeading = styled.h1`
  
  background-color: red;
  width: 32rem;
  height: 7rem;
  font-size: ${({theme}) => theme.fontSize.xl};
  font-weight: ${({theme}) => theme.regular};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background-color: #F6F7FB;
  color: #828282;
  
  p {
  color: #008E9C;
  }
 
`;

export default WelcomeHeading;