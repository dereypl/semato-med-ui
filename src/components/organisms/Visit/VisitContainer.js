import styled, {css} from "styled-components";
import React from "react";
import BackgroundHeader from "../../atoms/Shapes/BackgroundHeader";
import BackgroungShapeLighter from "../../atoms/Shapes/BackgroungShapeLighter";
import SidebarTemplate from "../../../templates/SidebarTemplate";
import PathContainer from "../../molecules/Path/PathContainer";

const VisitContainerWrapper = styled.div`
    height: 10rem;
    width: 100%;
    display: flex;
    border-radius: 10px;
    background-color: ${({theme}) => theme.backgroundColor};
    margin-bottom: 15px;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.09);
    display: flex;
    
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
    nearest &&
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
`;
const TimeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    align-items: center;

`;


const ActionContainer = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
`;

const ChangeDateContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    align-items: center;
`;
const CancelVisitContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    align-items: center;

`;

const VisitTypeWrapper = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
`;

const VisitTypeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    align-items: center;
        font-weight: bold;
`;
const DoctorInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    align-items: center;
`;

const PlaceContainer = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    align-items: center; 
    color: ${({theme}) => theme.medColor};
    font-size: 1.2rem;

`;


const VisitContainer = () => (
    <VisitContainerWrapper>
        <DateWrapper>
            <DateContainer>
                15.11 piątek
            </DateContainer>
            <TimeContainer>
                18:30 - 19:00
            </TimeContainer>
        </DateWrapper>
        <VisitTypeWrapper>
            <VisitTypeContainer>
                Konsultacja Kardiologiczna
            </VisitTypeContainer>
            <DoctorInfoContainer>
                dr n. med. Janusz Kutrzeba
            </DoctorInfoContainer>
        </VisitTypeWrapper>
        <PlaceContainer>
            Oddział Galeria Krakowska al. Pawia 5
        </PlaceContainer>
        <ActionContainer>
            <ChangeDateContainer>
                Zmień termin
            </ChangeDateContainer>
            <CancelVisitContainer>
                Odwołaj wizytę
            </CancelVisitContainer>
        </ActionContainer>
    </VisitContainerWrapper>
);
export default VisitContainer;


