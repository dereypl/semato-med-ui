import React,{useState} from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import styled, {css} from 'styled-components'
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathContainer from "../components/molecules/Path/PathContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import MENU_ITEMS from "../assets/data_hardcoded";
import Input from "../components/atoms/Input/Input";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Button from "../components/atoms/Button/Button";
import TextArea from "../components/atoms/Textarea/Textarea";
import {ErrorMessage, Form, Formik} from "formik";
import {authenticate as authenticateAction, requestProblem} from "../actions";
import {connect} from "react-redux";
import {REQUEST_PROBLEM} from "../actions/requestTypes";

const PageWrapper = styled.div`
    width: 78%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-right: 5rem;
`;

const HeaderWrapper = styled.div`
    height: 30rem;
    display: flex;
`;
const ContentWrapper = styled.div`
    height: auto;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
`;

const ReservationBackgroundWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: ${({theme}) => theme.medColor};
    color: white;       
    padding: 0rem 3rem 3rem 3rem;  
`;

const ReservationItemWrapper = styled.div`
padding-top: 2rem;
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    
    ${({double}) =>
    double &&
    css`
       flex-direction: row;
    `}
`;

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding-right: 5rem;

     ${({right}) =>
    right &&
    css`
    padding-left: 5rem;
    padding-right: 0;
    `}
 
     span{
     margin-bottom: 1rem;
     }
`;
const StyledErrorMsg = styled.div`
  margin: 10px 0 0;
  font-weight: ${({theme}) => theme.fontWeight.regular};
  font-size: ${({theme}) => theme.fontSize.s};
  color: white;
  text-align: center;
`;


const ProblemRequest = ({requestProblem}) => {

    const [requested, setRequested] = useState(false);

return(
    <>
        <Formik
            initialValues={{
                subject: '',
                content: '',
            }}
            validate={values => {
                const errors = {};

                if (!values.subject) {
                    errors.subject = 'Temat jest wymagany!';
                }

                if (!values.content) {
                    errors.content = 'Opis problemu jest wymagany!';
                }

                return errors;
            }}
            onSubmit={values => {
                requestProblem(values.subject, values.content);
                setRequested(true);
            }}
        >
            {({values, handleChange, handleBlur}) => {
                return (
                    <Form>
                        <BackgroundHeader/>
                        <BackgroungShapeLighter smaller/>
                        <SidebarTemplate>
                            <PageWrapper>
                                <HeaderWrapper>
                                    <PathContainer path={MENU_ITEMS.System[1].option} pathInfo={"Wypełnij formularz, aby zgłosić problem"} pathIcon={MENU_ITEMS.System[1].pathIcon}/>
                                </HeaderWrapper>
                                <ContentWrapper>
                                    <ReservationBackgroundWrapper>
                                        {requested?
                                            <Paragraph VisitSearchInfo problemrequest>Problem został zgłoszony! Przepraszamy za zainstniałą sytuację.</Paragraph>:
                                            <>
                                        <ReservationItemWrapper>
                                            Opisz swój problem
                                            <InputWrapper>
                                                <Input
                                                    placeholder={'Temat'}
                                                    width={'100%'}
                                                    height={'3.5rem'}
                                                    marginTop={'1rem'}
                                                    name="subject"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.subject}
                                                />
                                            </InputWrapper>
                                            <ErrorMessage name="subject" component={StyledErrorMsg}/>
                                        </ReservationItemWrapper>
                                        <ReservationItemWrapper>
                                            <InputWrapper>
                                                <TextArea
                                                    placeholder={'Opis problemu...'}
                                                    marginTop={'0.5rem'}
                                                    name="content"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.content}
                                                />
                                                <ErrorMessage name="content" component={StyledErrorMsg}/>
                                            </InputWrapper>
                                        </ReservationItemWrapper>
                                            </>}
                                    </ReservationBackgroundWrapper>
                                    <Paragraph VisitSearchInfo>{" "}</Paragraph>
                                    {!requested && <Button searchVisit type="submit">Zgłoś problem</Button>}
                                </ContentWrapper>
                            </PageWrapper>
                        </SidebarTemplate>
                    </Form>
                );
            }}
        </Formik>
    </>
)};
const mapDispatchToProps = dispatch => ({
    requestProblem: (subject, content) => dispatch(requestProblem(REQUEST_PROBLEM,subject, content)),
});

export default connect(
    null,
    mapDispatchToProps,
)(ProblemRequest);






