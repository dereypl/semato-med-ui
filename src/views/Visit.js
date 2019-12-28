import React, {useEffect,useState} from 'react'
import styled, {css} from 'styled-components'
import PathContainer from "../components/molecules/Path/PathContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import Input from "../components/atoms/Input/Input";
import Dropdown from "../components/atoms/Dropdown/Dropdown";
import Button from "../components/atoms/Button/Button";
import MENU_ITEMS from "../assets/data_hardcoded";
import {fetchItems} from "../actions";
import {GET_CLINIC_LIST, GET_SPECIALITY_LIST, GET_VISITS_LIST} from "../actions/requestTypes";
import {connect} from "react-redux";
import Paragraph from "../components/atoms/Paragraph/Paragraph";


const PageWrapper = styled.div`
    width: 78%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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

//TODO: if user is not authenticate => redirect to login page


const Visit = ({fetchSpecialityList, specialityList}) => {

    const [selectedSpeciality, setSelectedSpeciality] = useState(null);

    const setSelectedSpecialityTrigger = dispatch => (id) => {
        setSelectedSpeciality(id);
        dispatch(fetchItems(GET_CLINIC_LIST))
    };


    useEffect(() => {fetchSpecialityList()}, [fetchSpecialityList]);

    console.log(selectedSpeciality);


    return (
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={MENU_ITEMS.Visits[1].option}
                                   pathInfo={"Wypełnij formularz aby zobaczyć dostępne wizyty"}
                                   pathIcon={MENU_ITEMS.Visits[1].pathIcon}/>
                </HeaderWrapper>
                <ContentWrapper>
                    <ReservationBackgroundWrapper>
                        <ReservationItemWrapper>
                            Specjalizacja*
                            <Dropdown
                                items={specialityList}
                                visitReservstion
                                name="selectedSpeciality"
                                type="text"
                                action={setSelectedSpecialityTrigger}
                            />
                        </ReservationItemWrapper>
                        <ReservationItemWrapper>
                            Placówka*
                            <Dropdown
                                visitReservstion
                                name="place"
                                type="text"
                                placeholder="Wybierz"
                            />
                        </ReservationItemWrapper>
                        <ReservationItemWrapper>
                            Lekarz
                            <Dropdown
                                visitReservstion
                                name="doctor"
                                type="text"
                                placeholder="Wybierz"
                            />
                        </ReservationItemWrapper>
                        <ReservationItemWrapper double>
                            <InputWrapper>
                                <span>Data od*</span>
                                <Input
                                    reservationDate
                                    visitReservstion
                                    name="doctor"
                                    type="text"
                                    placeholder="YYYY-MM-DD"
                                />
                            </InputWrapper>
                            <InputWrapper right>
                                <span>Data do*</span>
                                <Input
                                    reservationDate
                                    dateFloating
                                    visitReservstion
                                    name="doctor"
                                    type="text"
                                    placeholder="YYYY-MM-DD"
                                />
                            </InputWrapper>
                        </ReservationItemWrapper>
                    </ReservationBackgroundWrapper>
                    <Paragraph VisitSearchInfo>* Wartości obowiązkowe</Paragraph>
                    <Button searchVisit>Wyszukaj</Button>
                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    )
};
const mapStateToProps = state => ({specialityList: state.specialityList});

const mapDispatchToProps = dispatch => ({
    fetchSpecialityList: () => dispatch(fetchItems(GET_SPECIALITY_LIST)),
});

Visit.defaultProps = {
    specialityList: [],
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Visit);


