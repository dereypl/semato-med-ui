import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.medColor};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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