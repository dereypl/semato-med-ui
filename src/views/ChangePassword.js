import React from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import styled, {css} from 'styled-components'
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathContainer from "../components/molecules/Path/PathContainer";
import VisitContainer from "../components/organisms/Visit/VisitContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import MENU_ITEMS from "../assets/data_hardcoded";
import SimpleMap from "../components/organisms/Map/SimpleMap";
import Dropdown from "../components/atoms/Dropdown/Dropdown";
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";
import Paragraph from "../components/atoms/Paragraph/Paragraph";

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
    flex-direction: column;
    border-radius: 15px;
    background-color: ${({theme}) => theme.medColor};
    color: white;       
    padding: 1rem 3rem 4rem 3rem;  
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


const ChangePassword = () => (
    <>
        <BackgroundHeader/>
        <BackgroungShapeLighter smaller/>
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={MENU_ITEMS.Patient[2].option} pathIcon={MENU_ITEMS.Patient[2].pathIcon}
                                   pathInfo={"Wprowadź nowe hasło, aby dokonać zmiany"}/>
                </HeaderWrapper>
                <ContentWrapper>
                    <ReservationBackgroundWrapper>
                        <ReservationItemWrapper>
                            Obecne hasło
                            <InputWrapper>
                            <Input
                                marginTop={'1rem'}
                                name="oldPassword"
                                type="password"
                            />
                            </InputWrapper>
                        </ReservationItemWrapper>
                        <ReservationItemWrapper>
                            Nowe hasło
                            <InputWrapper>
                                <Input
                                    marginTop={'1rem'}
                                    name="oldPassword"
                                    type="password"
                                />
                            </InputWrapper>
                        </ReservationItemWrapper>
                        <ReservationItemWrapper>
                            Powtórz nowe hasło
                            <InputWrapper>
                                <Input
                                    marginTop={'1rem'}
                                    name="oldPassword"
                                    type="password"
                                />
                            </InputWrapper>
                        </ReservationItemWrapper>
                    </ReservationBackgroundWrapper>
                    <Paragraph VisitSearchInfo> </Paragraph>
                    <Button searchVisit onClick={() => {}}>Wyszukaj</Button>
                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    </>
);
export default ChangePassword;


