import styled from 'styled-components'

const MenuHeading = styled.p`
  font-size: ${({theme}) => theme.fontSize.xl};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  color: ${({theme}) => theme.medColor};
  margin-left: 2rem;
`;

export default MenuHeading;
