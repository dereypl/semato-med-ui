import styled,{css} from 'styled-components'

const Paragraph = styled.p`
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  
  ${({VisitSearchInfo}) =>
    VisitSearchInfo &&
    css`
      color:  ${({theme}) => theme.grey200};
      margin-left: 5rem;
   `}
`;

export default Paragraph;
