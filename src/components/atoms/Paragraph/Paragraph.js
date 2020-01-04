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


    ${({problemrequest}) =>
    problemrequest &&
    css`
      font-size: ${({theme}) => theme.fontSize.l};
      color:  white;
      margin-left: 1rem;
      margin-top: 5rem;
   `}
  
  ${({alert}) =>
    alert &&
    css`
    color:red;
    display: flex;
    height: 3rem;
    margin-bottom: 1rem;
`}
`;

export default Paragraph;
