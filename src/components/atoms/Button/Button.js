import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.medColor};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 10px;
  font-weight: ${({ theme }) => theme.bold};
  color: white;
`;

export default Button;