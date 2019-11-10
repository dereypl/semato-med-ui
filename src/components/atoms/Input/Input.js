import styled, { css } from 'styled-components';

const Input = styled.input`
display: flex;
margin-top: 2.5rem;
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 10px;
  width: 32rem;
  height: 4rem;
  ::placeholder {
    //text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey200};
 }
`;


export default Input;