import React, {useEffect} from "react";
import {Link, Redirect} from 'react-router-dom';
import styled, {css} from "styled-components";
import {routes} from '../../../routes';
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import {ErrorMessage, Form, Formik} from 'formik';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {authenticate as authenticateAction, MAIL_SEND, resetPassword} from '../../../actions';

const InfoParagraph = styled.h1`
   margin-bottom: 8rem;
   margin-top: 5rem;
   text-align: center;
   font-size: small;
   color: #7E828B;
   font-weight: ${({theme}) => theme.fontWeight.regular};
   text-decoration: none;
   
     ${({resetPassParagraph}) =>
    resetPassParagraph &&
    css`
              margin-bottom: 0;
                 margin-top: 2rem;

    `} 
     
      ${({badRequest}) =>
    badRequest &&
    css`

              margin-bottom: 0;
                 margin-top: 0;
   `}
`;

const LoginForm = styled.div`
   display: flex;
   flex-direction: column;
   height: 50rem;
   width: 40rem;
   background-color: white; 
   border-radius: 20px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
   //justify-content: center;
   //justify-items:center; 
   align-items: center;
   z-index: 10;
`;

const StyledErrorMsg = styled.div`
  margin: 10px 0 0;
  font-weight: ${({theme}) => theme.fontWeight.regular};
  font-size: ${({theme}) => theme.fontSize.s};
  color: red;
  text-align: center;
`;


const FormWrapper = styled(Form)`
   // width: 100%;
   // height: 60vh;
   // background-color: ${({theme}) => theme.background};
    display: flex;
   // justify-content: center;
   
`;

const PassResetForm = ({isUserLogged, isAuthenticationFailure, resetPasswordAction, isMailSendCorrectly,clearIsMailSendCorrectly}) => {

    useEffect(() => clearIsMailSendCorrectly(), []);

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                }}
                validate={values => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = 'Email jest wymagany';
                    }

                    return errors;
                }}
                onSubmit={values => {
                    resetPasswordAction(values.email);
                }}
            >
                {({values, handleChange, handleBlur}) => {
                    if (isUserLogged) {
                        return <Redirect to={routes.dashboard}/>;
                    }

                    return (
                        <FormWrapper>
                            <LoginForm>
                                <InfoParagraph>Formularz zmiany hasła</InfoParagraph>
                                {isMailSendCorrectly ?
                                    <InfoParagraph resetPassParagraph>Sprawdź swoją skrzynkę pocztową, aby uzyskać dalsze instrukcje.</InfoParagraph>
                                    :
                                    <>
                                        <InfoParagraph resetPassParagraph>Wprowadź swój adres email</InfoParagraph>
                                        <Input
                                            name="email"
                                            type="text"
                                            placeholder="Adres Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <ErrorMessage name="username" component={StyledErrorMsg}/>
                                        <Button type="submit" login>Zresetuj hasło</Button>
                                        {isAuthenticationFailure &&
                                        <InfoParagraph badRequest>Podano nieprawidłowy login lub hasło.</InfoParagraph>}
                                    </>
                                }
                                <InfoParagraph as={Link} to={routes.login}>{'<'} Wróć do logowania</InfoParagraph>
                            </LoginForm>
                        </FormWrapper>
                    );
                }}
            </Formik>
        </>
    )
};

PassResetForm.defaultProps = {
    isAuthenticationFailure: false,
    isMailSendCorrectly: false,
};

const mapStateToProps = state => ({
    isMailSendCorrectly: state.isMailSendCorrectly,
});

const mapDispatchToProps = dispatch => ({
    resetPasswordAction: (email) => {dispatch(resetPassword(email))},
    clearIsMailSendCorrectly: () => {dispatch({type: MAIL_SEND, payload: false})},
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PassResetForm);