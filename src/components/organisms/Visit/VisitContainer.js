import styled, {css} from "styled-components";
import React, {useState} from "react";
import calendar_icon_date from "../../../assets/icons/calendar_icon_date.svg";
import time_icon from "../../../assets/icons/time_icon.svg";
import gps_icon from "../../../assets/icons/gps_icon.svg";
import calendar_change_date from "../../../assets/icons/calendar_change_date.svg";
import star_outline from "../../../assets/icons/star_outline.svg";
import star_selected from "../../../assets/icons/star_selected.svg";
import cancel_icon from "../../../assets/icons/cancel_icon.svg";
import Button from "../../atoms/Button/Button";
import {deleteItem, makeReservation, setVisitRatinig} from "../../../actions";
import {CANCEL_VISIT, MAKE_RESERVATION, SET_VISIT_RATING} from "../../../actions/requestTypes";
import {connect} from "react-redux";

const VisitContainerWrapper = styled.div`
    height: 10rem;
    width: 100%;
    display: flex;
    border-radius: 10px;
    background-color: ${({theme}) => theme.backgroundColor};
    margin-bottom: 15px;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.09);
    
    &::before {
    content: '';
    height: 7.5rem;
    width: 3%;
    border-radius: 10px;
    background-color: ${({theme}) => theme.medGrey};
    display: flex;
    align-self: center;
    margin-left: -1.2rem;
    z-index: -1;
    }
    
    ${({nearest}) =>
    nearest === true &&
    css`
      &::before {
      background-color: ${({theme}) => theme.medColor};
      }
   `}
   
${({cancelled}) =>
    cancelled === true &&
    css`
      background-color: #dcdcdc;
      transition: 2s;
   `}

`;

const DateWrapper = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
`;

const DateContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    align-items: center;
    color: ${({theme}) => theme.medGrey};
    font-size:  1rem;
    
    span{
       font-size:  ${({theme}) => theme.fontSize.xl};
       font-weight:  ${({theme}) => theme.fontWeight.semiBold};
       color: ${({theme}) => theme.medColor};
    }
`;

const IconContainer = styled.div`
    display: flex;
    height: 100%;
    width: 4rem;
    align-items: center;
    margin-right: 1rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90%;
   
    ${({date}) =>
    date &&
    css`
    background-image: url(${calendar_icon_date});
    `} 

    ${({gps}) =>
    gps &&
    css`
    background-image: url(${gps_icon});
    background-size: 50%;
    background-position: 1.5rem 50%;
    `} 
    
    ${({time}) =>
    time &&
    css`
    background-image: url(${time_icon});
    background-size: 80%;
    `}
    

    ${({changeDate}) =>
    changeDate &&
    css`
    background-image: url(${calendar_change_date});
    background-size: 60%;
    `}
    
    ${({cancel}) =>
    cancel &&
    css`
    background-image: url(${cancel_icon});
    background-size: 60%;
    `}
    
   
`;


const TimeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    align-items: center;
    span{
       font-size:  ${({theme}) => theme.fontSize.xl};
       font-weight:  ${({theme}) => theme.fontWeight.semiBold};
       margin-right: 0.5rem;
       color: ${({theme}) => theme.medGrey};
    }
`;


const ActionWrapper = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:  ${({theme}) => theme.fontSize.s};
`;

const ActionContainer = styled.div`
    display: flex;
    width: 80%;
    height: 4rem;
    align-items: center;
    font-size:  ${({theme}) => theme.fontSize.s};
`;

const VisitTypeWrapper = styled.div`
    display: flex;
    width:  ${({Width}) => Width || '30%'};
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0 3%;
`;

const VisitTypeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    align-items: center;
    font-weight: bold;
    color: ${({theme}) => theme.medColor};
    ${({patient}) =>
    patient &&
    css`
    justify-content: center;
    `} 
`;
const DoctorInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 2rem;
    align-items: center;
    color: ${({theme}) => theme.grey200};
    
    ${({patient}) =>
    patient &&
    css`
    justify-content: center;
    `} 

`;

const Star = styled.div`
    display: flex;
    width: 2.5rem;
    height: 2rem;
    align-items: center;
    color: ${({theme}) => theme.grey200};
    justify-content: center;
    cursor: pointer;
    background-image: url(${star_outline});
    background-size: contain;
    background-repeat: no-repeat;
 `;

const RatingContainer = styled.div`
    display: flex;
    flex-direction: row-reverse; width: 100%;
    height: 3rem;
    align-items: center;
    color: ${({theme}) => theme.grey200};
    justify-content: center;
    
    ${({patient}) =>
    patient &&
    css`
    justify-content: center;
    `} 
    
     ${Star}:hover, ${Star}:hover ~ ${Star} {
          background-image: url(${star_selected});
     }

`;
const PlaceContainer = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    color: ${({theme}) => theme.medColor};
    font-size: 1.4rem;
    font-weight: ${({theme}) => theme.fontWeight.medium};
    align-items: center;
`;

const Separator = styled.div`
    display: flex;
    width: 1px;
    align-self: center;
    height: 50%;
    background-color: ${({theme}) => theme.medGrey};
    opacity: 0.4;
`;


const VisitContainer = ({visit, past, deleteVisits, actionType, actionDesc, makeReservation,setVIsitRatinigAction}) => {
    const visitDateStart = new Date(visit.dateTimeStart);
    const visitDateEnd = new Date(visit.dateTimeEnd);

    const [cancelled, setCancelled] = useState(false);
    const [reserved, serReserved] = useState(false);
    const [rating, setRating] = useState(0);

    const setRatingTrigger = (rating) => {
        setRating(rating);
        setVIsitRatinigAction(visit.id, rating);
    };

    const getVisitAction = (actionType) => {
        switch (actionType) {
            case 'cancel':
                return (
                    cancelled ? 'Wizyta odwołana' :
                        <ActionContainer>
                            <IconContainer cancel/>
                            <Button cancel Action onClick={() => {
                                deleteVisits(visit.id);
                                setCancelled(true);
                            }}>
                                {actionDesc}
                            </Button>
                        </ActionContainer>
                );
            case 'reservation':
                return (
                    reserved ? 'Zarezerwowano wiztę!' :
                        <ActionContainer>
                            <IconContainer cancel/>
                            <Button Action onClick={() => {
                                makeReservation(visit);
                                serReserved(true);
                            }}>
                                {actionDesc}
                            </Button>
                        </ActionContainer>
                );
            case 'physician':
                return (
                    <VisitTypeWrapper Width={'100%'}>
                        <VisitTypeContainer patient>
                            Pacjent: {visit.patientName}
                        </VisitTypeContainer>
                        <DoctorInfoContainer patient>
                            PESEL: {visit.patientPesel}
                        </DoctorInfoContainer>
                    </VisitTypeWrapper>
                );

            case 'past':
                return (
                    <VisitTypeWrapper Width={'100%'}>
                        <VisitTypeContainer patient>
                            Ocena
                        </VisitTypeContainer>
                        <DoctorInfoContainer patient>
                            {rating || visit.rating ? <p> Oceniłeś wizytę na {rating || visit.rating}/5 !</p>
                                :
                                <RatingContainer>
                                    <Star five onClick={() => setRatingTrigger(5)}> </Star>
                                    <Star four onClick={() => setRatingTrigger(4)}> </Star>
                                    <Star three onClick={() => setRatingTrigger(3)}> </Star>
                                    <Star two onClick={() => setRatingTrigger(2)}> </Star>
                                    <Star one onClick={() => setRatingTrigger(1)}> </Star>
                                </RatingContainer>
                            }
                        </DoctorInfoContainer>
                    </VisitTypeWrapper>
                );
            default:
                break;
        }
    };

    return (
        <VisitContainerWrapper cancelled={cancelled}>
            <DateWrapper>
                <DateContainer>
                    <IconContainer date/>
                    <span>{new Date(visit.dateTimeStart).toLocaleDateString().slice(0, 10)}</span>&nbsp;{visit.dayOfWeek}
                </DateContainer>
                <TimeContainer>
                    <IconContainer time/>
                    <span>{visitDateStart.getHours() + ":" + (visitDateStart.getMinutes() ? visitDateStart.getMinutes() : visitDateStart.getMinutes() + "0")}
                        -
                        {visitDateEnd.getHours() + ":" + (visitDateEnd.getMinutes() ? visitDateEnd.getMinutes() : visitDateEnd.getMinutes() + "0")}</span>
                </TimeContainer>
            </DateWrapper>
            <Separator/>
            <VisitTypeWrapper>
                <VisitTypeContainer>
                    Konsultacja {visit.specialityName}
                </VisitTypeContainer>
                <DoctorInfoContainer>
                    {visit.physicianName}
                </DoctorInfoContainer>
            </VisitTypeWrapper>
            <Separator/>
            <PlaceContainer>
                <IconContainer gps/>
                {visit.clinicName}
            </PlaceContainer>
            <Separator/>
            <ActionWrapper>
                {getVisitAction(actionType)}
            </ActionWrapper>
        </VisitContainerWrapper>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteVisits: (visitId) => dispatch(deleteItem(CANCEL_VISIT, {visitId: visitId})),
    makeReservation: (visit) => dispatch(makeReservation(MAKE_RESERVATION, {
        specialityId: visit.specialityId,
        clinicId: visit.clinicId,
        physicianId: visit.physicianId,
        dateTimeEnd: visit.dateTimeEnd,
        dateTimeStart: visit.dateTimeStart
    })),
    setVIsitRatinigAction: (visitId,rating) => dispatch(setVisitRatinig(SET_VISIT_RATING, visitId, rating)),
});

export default connect(
    null,
    mapDispatchToProps,
)(VisitContainer);


