import React from "react";
import {Redirect} from 'react-router-dom';
import styled from "styled-components";
import {routes} from '../../../routes';
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import {ErrorMessage, Form, Formik} from 'formik';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {authenticate as authenticateAction} from '../../../actions';

const InfoParagraph = styled.h1`
   margin-bottom: 8rem;
   margin-top: 5rem;
   text-align: center;
   font-size: small;
   color: #7E828B;
   font-weight: ${({theme}) => theme.fontWeight.regular};
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

const SignInForm = ({authenticate, isUserLogged,isAuthenticationFailure}) => (
    <>
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            validate={values => {
                const errors = {};

                if (!values.username) {
                    errors.username = 'Username is required';
                }

                if (!values.password) {
                    errors.password = 'Password is required';
                }

                return errors;
            }}
            onSubmit={values => {
                authenticate(values.username, values.password);
            }}
        >
            {({values, handleChange, handleBlur}) => {
                if (isUserLogged) {
                    return <Redirect to={routes.dashboard}/>;
                }

                return (
                    <FormWrapper>
                        <LoginForm>
                            <InfoParagraph>Logowanie do systemu</InfoParagraph>
                            <Input
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                            <ErrorMessage name="username" component={StyledErrorMsg}/>
                            <Input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <ErrorMessage name="password" component={StyledErrorMsg}/>
                            <Button type="submit" login>Zaloguj</Button>
                            {isAuthenticationFailure &&  <InfoParagraph>Podano nieprawidłowy login lub hasło.</InfoParagraph>
                            }
                        </LoginForm>
                    </FormWrapper>
                );
            }}
        </Formik>
    </>
);

SignInForm.propTypes = {
    authenticate: PropTypes.func.isRequired,
    isUserLogged: PropTypes.bool,
};

SignInForm.defaultProps = {
    isUserLogged: false,
};

const mapStateToProps = state => ({
    isUserLogged: state.isUserLogged,
    isAuthenticationFailure: state.isAuthenticationFailure,
});

const mapDispatchToProps = dispatch => ({
    authenticate: (email, password) => dispatch(authenticateAction(email, password)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInForm);