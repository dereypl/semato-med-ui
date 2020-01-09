import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.medColor};
  width: ${({ width }) => width || '220px'};
  min-height: 47px;
  border: none;
  border-radius: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  transition: all .4s;
  background-position: 0;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${({ theme }) => theme.medDarkBlue} 50%);
  background-size: 220%;
          &:hover{
            background-color: ${({ theme }) => theme.medDarkBlue};
            color: white;
            background-position: 100%;
          }
          
  &:focus{
      outline: none;
  }
  
 ${({searchVisit}) =>
    searchVisit &&
    css`
      width: 100%;
      height: 5rem;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.medDarkBlue};
      margin-bottom: 3rem;
      margin-top: -1rem;
    `} 

  ${({changeUserData}) =>
    changeUserData &&
    css`
           width: 60%;

    `} 

 ${({action}) =>
    action &&
    css`
  margin-top: 0rem;
      width: 100%;
      height: 4rem;
      border-radius: 8px;
      justify-self: center;
      align-self: center;
    `}
`;

export default Button;