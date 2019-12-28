import styled, {css} from "styled-components";
import React from "react";
import calendar_icon_date from "../../../assets/icons/calendar_icon_date.svg";
import time_icon from "../../../assets/images/time_icon.svg";
import gps_icon from "../../../assets/icons/gps_icon.svg";
import calendar_change_date from "../../../assets/icons/calendar_change_date.svg";
import cancel_icon from "../../../assets/icons/cancel_icon.svg";


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
    font-size:  ${({theme}) => theme.fontSize.s};
    
    span{
       font-size:  ${({theme}) => theme.fontSize.xl};
       font-weight:  ${({theme}) => theme.fontWeight.semiBold};
       margin-right: 0.5rem;
       color: ${({theme}) => theme.medColor};

    }
`;

const IconContainer = styled.div`
    display: flex;
    height: 100%;
    width: 4rem;
    align-items: center;
    //background-color: grey;
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
    width: 30%;
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
`;
const DoctorInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 2rem;
    align-items: center;
    color: ${({theme}) => theme.grey200};
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


const VisitContainer = ({visit}) => {
    const visitDateStart = new Date(visit.dateTimeStart);
    const visitDateEnd = new Date(visit.dateTimeEnd);

    return (
        <VisitContainerWrapper>
            <DateWrapper>
                <DateContainer>
                    <IconContainer date/>
                    <span>{visitDateStart.getDate() + "." + visitDateStart.getMonth() + "." + visitDateStart.getFullYear()}</span> {visit.dayOfWeek}
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
                    {visit.physicianFullName}
                </DoctorInfoContainer>
            </VisitTypeWrapper>
            <Separator/>
            <PlaceContainer>
                <IconContainer gps/>
                {visit.clinicName}
            </PlaceContainer>
            <Separator/>
            <ActionWrapper>
                {/*<ActionContainer>*/}
                {/*    <IconContainer changeDate/>*/}
                {/*    Zmień termin*/}
                {/*</ActionContainer>*/}
                <ActionContainer>
                    <IconContainer cancel/>
                    Odwołaj wizytę
                </ActionContainer>
            </ActionWrapper>
        </VisitContainerWrapper>
    )
};
export default VisitContainer;


