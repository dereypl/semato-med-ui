import styled from 'styled-components'

const MenuParagraph = styled.div`
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  list-style: none;
  text-decoration: none;
  color: ${({theme}) => theme.medGrey};
  
  &.active{
  color: red;
  }
`;

export default MenuParagraph;




