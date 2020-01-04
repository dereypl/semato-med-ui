import React, {useState} from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import styled, {css} from 'styled-components'
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathContainer from "../components/molecules/Path/PathContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import MENU_ITEMS from "../assets/data_hardcoded";
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import {changePassword} from "../actions";
import {CHANGE_PASSWORD} from "../actions/requestTypes";
import {connect} from "react-redux";

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
    width: 90%;
    height: auto;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: flex-start;
`;

const ReservationBackgroundWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
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


const ChangePassword = ({changePassword, isPasswordChangedCorrectly}) => {

    const [oldPassword, setOldPassword] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [newPasswordCopy, setNewPasswordCopy] = useState(null);
    const [message, setMessage] = useState(" ");
    const [afterChange, setAfterChange] = useState(false);

    return (
        <>
            <BackgroundHeader/>
            <BackgroungShapeLighter smaller/>
            <SidebarTemplate>
                <PageWrapper>
                    <HeaderWrapper>
                        <PathContainer path={MENU_ITEMS.Patient[2].option} pathIcon={MENU_ITEMS.Patient[2].pathIcon}
                                       pathInfo={"Haslo zostanie zmienione przy ponownym logowaniu"}/>
                    </HeaderWrapper>
                    <ContentWrapper>
                        <ReservationBackgroundWrapper>
                            <ReservationItemWrapper>
                                Obecne hasło
                                <InputWrapper>
                                    <Input
                                        width={'100%'}
                                        height={'3.5rem'}
                                        marginTop={'1rem'}
                                        name="oldPassword"
                                        type="password"
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                </InputWrapper>
                            </ReservationItemWrapper>
                            <ReservationItemWrapper>
                                Nowe hasło
                                <InputWrapper>
                                    <Input
                                        width={'100%'}
                                        height={'3.5rem'}
                                        marginTop={'1rem'}
                                        name="oldPassword"
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </InputWrapper>
                            </ReservationItemWrapper>
                            <ReservationItemWrapper>
                                Powtórz nowe hasło
                                <InputWrapper>
                                    <Input
                                        width={'100%'}
                                        height={'3.5rem'}
                                        marginTop={'1rem'}
                                        name="oldPassword"
                                        type="password"
                                        value={newPasswordCopy}
                                        onChange={(e) => setNewPasswordCopy(e.target.value)}
                                    />
                                </InputWrapper>
                            </ReservationItemWrapper>
                        </ReservationBackgroundWrapper>
                        {afterChange ?
                            <Paragraph VisitSearchInfo alert>{isPasswordChangedCorrectly ? 'Hasło zostało zmienione!' : 'Podano nieprawidłowe obecne hasło'}</Paragraph>
                            :
                            <Paragraph VisitSearchInfo alert>{message}</Paragraph>
                        }
                        <Button searchVisit onClick={() => {
                            if (newPassword !== newPasswordCopy) {
                                setMessage("Wprowadzono różne hasła");
                                setAfterChange(false);
                            } else {
                                changePassword(oldPassword, newPassword);
                                setMessage(" ");
                                setAfterChange(true);
                            }
                        }}>Zmień hasło</Button>
                    </ContentWrapper>
                </PageWrapper>
            </SidebarTemplate>
        </>
    )
};

const mapStateToProps = state => ({
    visitList: state.visitList,
    currentUser: state.currentUser,
    isPasswordChangedCorrectly: state.isPasswordChangedCorrectly
});


const mapDispatchToProps = dispatch => ({
    changePassword: (oldPassword, newPassword) => dispatch(changePassword(CHANGE_PASSWORD, oldPassword, newPassword)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChangePassword);




