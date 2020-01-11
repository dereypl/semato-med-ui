import React, {useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import {connect} from 'react-redux'
import PathContainer from "../components/molecules/Path/PathContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import Input from "../components/atoms/Input/Input";
import Dropdown from "../components/atoms/Dropdown/Dropdown";
import Button from "../components/atoms/Button/Button";
import MENU_ITEMS from "../assets/MenuItems";
import {
    CLEAR_AVAILABLE_VISITS,
    CLEAR_LIST_CLINIC,
    CLEAR_LIST_PHYSICIAN,
    CLEAR_VISIT_COMPONENT,
    fetchItems
} from "../actions";
import {
    GET_AVAILABLE_VISITS_LIST,
    GET_CLINIC_LIST,
    GET_PHYSICIAN_LIST,
    GET_SPECIALITY_LIST
} from "../actions/requestTypes";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import VisitContainer from "../components/organisms/Visit/VisitContainer";
import {routes} from "../routes";
import {Link} from "react-router-dom";


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


const Visit = ({fetchSpecialityList, specialityList, fetchClinicList, clinicList, fetchPhysicianList, physicianList, fetchAvailableVisitsList, availableVisitList,clearAvailableVisitsList,clearClinicList,clearPhysicianList,clearAllData}) => {

    const [selectedSpeciality, setSelectedSpeciality] = useState(null);
    const [selectedClinic, setSelectedClinic] = useState(null);
    const [selectedPhysician, setSelectedPhysician] = useState(null);
    const [periodStart, setPeriodStart] = useState(null);
    const [periodEnd, setPeriodEnd] = useState(null);
    const [showSearchForm, setShowSearchForm] = useState(true);

    useEffect( () => () => {clearAvailableVisitsList(); if(!selectedSpeciality) clearAllData();}, [] );

    const buttonDisabled = !(selectedSpeciality && selectedClinic && periodStart && periodEnd);

    const setSelectedSpecialityTrigger = (id) => {
        setSelectedClinic('-');
        clearClinicList();
        setSelectedPhysician('-');
        clearPhysicianList();
        setSelectedSpeciality(id);
        fetchClinicList(id);
    };
    const setSelectedClinicTrigger = (id) => {
        setSelectedPhysician('-');
        clearPhysicianList();
        setSelectedClinic(id);
        fetchPhysicianList(selectedSpeciality, id);
    };

    const setSelectedPhysicianTrigger = (id) => {
        setSelectedPhysician(id);
    };

    useEffect(() => {
        fetchSpecialityList()
    }, [fetchSpecialityList]);


    return (
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={MENU_ITEMS.Visits[1].option}
                                   pathInfo={"Wypełnij formularz aby zobaczyć dostępne wizyty"}
                                   pathIcon={MENU_ITEMS.Visits[1].pathIcon}/>
                </HeaderWrapper>
                <ContentWrapper>
                    {showSearchForm ?
                        <>
                            <ReservationBackgroundWrapper>
                                <ReservationItemWrapper>
                                    Specjalizacja*
                                    <Dropdown
                                        value={selectedSpeciality}
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
                                        value={selectedClinic}
                                        items={clinicList}
                                        visitReservstion
                                        name="place"
                                        type="text"
                                        placeholder="Wybierz"
                                        action={setSelectedClinicTrigger}
                                    />
                                </ReservationItemWrapper>
                                <ReservationItemWrapper>
                                    Lekarz
                                    <Dropdown
                                        value={selectedPhysician}
                                        items={physicianList}
                                        visitReservstion
                                        name="physician"
                                        type="text"
                                        placeholder="Wybierz"
                                        action={setSelectedPhysicianTrigger}

                                    />
                                </ReservationItemWrapper>
                                <ReservationItemWrapper double>
                                    <InputWrapper>
                                        <span>Data od*</span>
                                        <Input
                                            value={periodStart}
                                            reservationDate
                                            visitReservstion
                                            name="periodStart"
                                            type="text"
                                            placeholder="YYYY-MM-DD"
                                            onChange={(e) => setPeriodStart(e.target.value)}
                                        />
                                    </InputWrapper>
                                    <InputWrapper right>
                                        <span>Data do*</span>
                                        <Input
                                            value={periodEnd}
                                            reservationDate
                                            dateFloating
                                            visitReservstion
                                            name="periodEnd"
                                            type="text"
                                            placeholder="YYYY-MM-DD"
                                            onChange={(e) => setPeriodEnd(e.target.value)}
                                        />
                                    </InputWrapper>
                                </ReservationItemWrapper>
                            </ReservationBackgroundWrapper>
                            <Paragraph VisitSearchInfo>* Wartości obowiązkowe</Paragraph>
                            <Button disabled={buttonDisabled} searchVisit onClick={() => {
                                fetchAvailableVisitsList(selectedSpeciality, selectedClinic, selectedPhysician, periodStart, periodEnd);
                                setShowSearchForm(false);
                            }}>Wyszukaj</Button>
                        </>
                        :
                        <Button searchVisit as={Link} to={routes.visit} onClick={() =>  {
                            setShowSearchForm(true);
                            clearAvailableVisitsList();
                        }}>Zmień kryteria wyszukiwania</Button>
                    }
                    {availableVisitList.map(visit => <VisitContainer visit={visit} key={visit.id} actionType={'reservation'} actionDesc={'Zarezerwuj'}/>)}
                </ContentWrapper>
                </PageWrapper>
        </SidebarTemplate>
)
};
const mapStateToProps = state => ({
    specialityList: state.specialityList,
    clinicList: state.clinicList,
    physicianList: state.physicianList,
    availableVisitList: state.availableVisitList
});

const mapDispatchToProps = dispatch => ({
    fetchSpecialityList: () => dispatch(fetchItems(GET_SPECIALITY_LIST)),
    clearAvailableVisitsList: () => dispatch({type: CLEAR_AVAILABLE_VISITS}),
    clearClinicList: () => dispatch({type: CLEAR_LIST_CLINIC}),
    clearPhysicianList: () => dispatch({type: CLEAR_LIST_PHYSICIAN}),
    clearAllData: () => dispatch({type: CLEAR_VISIT_COMPONENT}),
    fetchClinicList: (id) => dispatch(fetchItems(GET_CLINIC_LIST, {specialityId: id})),
    fetchPhysicianList: (selectedSpeciality, id) => dispatch(fetchItems(GET_PHYSICIAN_LIST, {
    specialityId: selectedSpeciality,
    clinicId: id
    })),
    fetchAvailableVisitsList: (selectedSpeciality, selectedClinic, selectedPhysician, periodStart, periodEnd) => dispatch(fetchItems(GET_AVAILABLE_VISITS_LIST, {
    specialityId: selectedSpeciality,
    clinicId: selectedClinic,
    physicianId: selectedPhysician || null,
    periodStart,
    periodEnd
})),
});

Visit.defaultProps = {
    specialityList: [],
    clinicList: [],
    physicianList: [],
    availableVisitList: [],
};

export default connect(
mapStateToProps,
mapDispatchToProps,
)(Visit);


