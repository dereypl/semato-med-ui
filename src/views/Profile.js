import React, {useEffect, useState} from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import styled, {css} from 'styled-components'
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathContainer from "../components/molecules/Path/PathContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import MENU_ITEMS from "../assets/MenuItems";
import Input from "../components/atoms/Input/Input";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Button from "../components/atoms/Button/Button";
import {ErrorMessage, Form, Formik} from "formik";
import {changeUserData, getUserInfo} from "../actions";
import {connect} from "react-redux";
import {CHANGE_USER_DATA} from "../actions/requestTypes";

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
    width: 60%;
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

const Profile = ({currentUser, changeUserData,getUserInfo,dataChangeSuccess}) => {

    useEffect( () => () => getUserInfo(), [] );
    const [requested, setRequested] = useState(false);

    return(
        <>
            <Formik
                initialValues={{
                    firstName: currentUser.firstName,
                    lastName: currentUser.lastName,
                    birthDate: currentUser.birthDate,
                    pesel: currentUser.pesel,
                    email: currentUser.email,
                    postalCode: currentUser.postalCode,
                    city: currentUser.city,
                    street: currentUser.street,
                    houseNumber: currentUser.houseNumber,
                }}
                validate={values => {
                    const errors = {};

                    if (!values.firstName) {
                        errors.firstName = 'Imię jest wymagane!';
                    }

                    if (!values.lastName) {
                        errors.lastName = 'Naziwsko jest wymagane!';
                    }

                    if (!values.pesel) {
                        errors.pesel = 'pesel jest wymagany!';
                    }

                    if (!values.birthDate) {
                        errors.birthDate = 'Data urodzenia jest wymagana!';
                    }

                    if (!values.email) {
                        errors.email = 'Adres email jest wymagany!';
                    }
                    if (!values.postalCode) {
                        errors.postalCode = 'Kod pocztowy jest wymagany!';
                    }
                    if (!values.city) {
                        errors.city = 'Miasto jest wymagane!';
                    }

                    if (!values.street) {
                        errors.street = 'Ulica jest wymagana!';
                    }
                    if (!values.houseNumber) {
                        errors.houseNumber = 'Numer domu jest wymagany!';
                    }

                    return errors;
                }}
                onSubmit={(values, errors) => {
                    if (!errors.length) changeUserData(values);
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
                                        <PathContainer path={MENU_ITEMS.Patient[0].option}
                                                       pathIcon={MENU_ITEMS.Patient[0].pathIcon}
                                                       pathInfo={"Twoje dane personalne"}/>
                                    </HeaderWrapper>
                                    <ContentWrapper>
                                        <ReservationBackgroundWrapper>
                                            {requested ?
                                                (dataChangeSuccess ?
                                                    <Paragraph VisitSearchInfo problemrequest>
                                                        Twoje dane personalne zostały zaaktualizowane.</Paragraph>
                                                    :
                                                    <Paragraph VisitSearchInfo problemrequest>
                                                        Wystąpił błąd - nie udało się zmienić danych.</Paragraph>)
                                                :
                                                <>
                                                    <ReservationItemWrapper>
                                                        Imię
                                                        <InputWrapper>
                                                            <Input
                                                                placeholder={'Wprowadź imię...'}
                                                                width={'100%'}
                                                                height={'3.5rem'}
                                                                marginTop={'1rem'}
                                                                name="firstName"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.firstName}
                                                            />
                                                        </InputWrapper>
                                                        <ErrorMessage name="firstName" component={StyledErrorMsg}/>
                                                    </ReservationItemWrapper>
                                                    <ReservationItemWrapper>
                                                        Nazwisko
                                                        <InputWrapper>
                                                            <Input
                                                                placeholder={'Wprowadź nazwisko...'}
                                                                width={'100%'}
                                                                height={'3.5rem'}
                                                                marginTop={'1rem'}
                                                                name="lastName"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.lastName}
                                                            />
                                                        </InputWrapper>
                                                        <ErrorMessage name="lastName" component={StyledErrorMsg}/>
                                                    </ReservationItemWrapper>
                                                    <ReservationItemWrapper>
                                                        Data urodzenia
                                                        <InputWrapper>
                                                            <Input
                                                                disabled={true}
                                                                placeholder={'Wprowadź datę urodzenia...'}
                                                                width={'100%'}
                                                                height={'3.5rem'}
                                                                marginTop={'1rem'}
                                                                name="birthDate"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.birthDate}
                                                            />
                                                        </InputWrapper>
                                                        <ErrorMessage name="birthDate" component={StyledErrorMsg}/>
                                                    </ReservationItemWrapper>
                                                    <ReservationItemWrapper>
                                                        Pesel
                                                        <InputWrapper>
                                                            <Input
                                                                disabled={true}
                                                                placeholder={'Wprowadź numer PESEL...'}
                                                                width={'100%'}
                                                                height={'3.5rem'}
                                                                marginTop={'1rem'}
                                                                name="pesel"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.pesel}
                                                            />
                                                        </InputWrapper>
                                                        <ErrorMessage name="pesel" component={StyledErrorMsg}/>
                                                    </ReservationItemWrapper>
                                                    <ReservationItemWrapper>
                                                        Email
                                                        <InputWrapper>
                                                            <Input
                                                                disabled={true}
                                                                placeholder={'Wprowadź adres email...'}
                                                                width={'100%'}
                                                                height={'3.5rem'}
                                                                marginTop={'1rem'}
                                                                name="email"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                            />
                                                        </InputWrapper>
                                                        <ErrorMessage name="email" component={StyledErrorMsg}/>
                                                    </ReservationItemWrapper>
                                                    <ReservationItemWrapper>
                                                        Kod pocztowy
                                                        <InputWrapper>
                                                            <Input
                                                                placeholder={'Wprowadź kod pocztowy...'}
                                                                width={'100%'}
                                                                height={'3.5rem'}
                                                                marginTop={'1rem'}
                                                                name="postalCode"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.postalCode}
                                                            />
                                                        </InputWrapper>
                                                        <ErrorMessage name="postalCode" component={StyledErrorMsg}/>
                                                    </ReservationItemWrapper>
                                                    <ReservationItemWrapper>
                                                        Miasto
                                                        <InputWrapper>
                                                            <Input
                                                                placeholder={'Wprowadź miasto...'}
                                                                width={'100%'}
                                                                height={'3.5rem'}
                                                                marginTop={'1rem'}
                                                                name="city"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.city}
                                                            />
                                                        </InputWrapper>
                                                        <ErrorMessage name="city" component={StyledErrorMsg}/>
                                                    </ReservationItemWrapper>
                                                    <ReservationItemWrapper>
                                                        Ulica
                                                        <InputWrapper>
                                                            <Input
                                                                placeholder={'Wprowadź ulicę...'}
                                                                width={'100%'}
                                                                height={'3.5rem'}
                                                                marginTop={'1rem'}
                                                                name="street"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.street}
                                                            />
                                                        </InputWrapper>
                                                        <ErrorMessage name="street" component={StyledErrorMsg}/>
                                                    </ReservationItemWrapper>
                                                    <ReservationItemWrapper>
                                                        Numer domu
                                                        <InputWrapper>
                                                            <Input
                                                                placeholder={'Wprowadź numer domu...'}
                                                                width={'100%'}
                                                                height={'3.5rem'}
                                                                marginTop={'1rem'}
                                                                name="houseNumber"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.houseNumber}
                                                            />
                                                        </InputWrapper>
                                                        <ErrorMessage name="houseNumber" component={StyledErrorMsg}/>
                                                    </ReservationItemWrapper>
                                                </>}
                                        </ReservationBackgroundWrapper>
                                        <Paragraph VisitSearchInfo>{" "}</Paragraph>
                                        {!requested &&
                                        <Button searchVisit changeUserData type="submit">Zmień swoje dane</Button>}
                                    </ContentWrapper>
                                </PageWrapper>
                            </SidebarTemplate>
                        </Form>
                    );
                }}
            </Formik>
        </>
    )
};

const mapStateToProps = state => ({currentUser: state.currentUser, dataChangeSuccess: state.dataChangeSuccess});

const mapDispatchToProps = dispatch => ({
    changeUserData: (userData) => dispatch(changeUserData(CHANGE_USER_DATA, userData)),
    getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);









