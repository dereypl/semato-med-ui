import styled from "styled-components";
import React from "react";

const NotificationWrapper = styled.div`
    width: 60%;
    min-height: 7rem;
    display: flex;
    flex-direction: column;
    border-radius:  1rem;
    padding: 2rem;
    background-color: ${({theme}) => theme.backgroundColor};
    margin-bottom: 1.5rem;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.09);
    color: #707070;
    font-size:  ${({theme}) => theme.fontSize.s};
`;

const NotificationContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 1rem;
`;

const NotificationDateContainer = styled.div`
    width: auto;
    height: 2rem;
    display: flex;
    color: ${({theme}) => theme.medColor};
    font-size:  ${({theme}) => theme.fontSize.l};
    font-weight:  ${({theme}) => theme.fontWeight.semiBold};
    margin-right: 1rem;
`;
const NotificationAuthorContainer = styled.div`
    width: 50%;
    height: 1.5rem;
    align-content: center;
    display: flex;
    font-weight:  ${({theme}) => theme.fontWeight.semiBold};
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;


const NotificationContainer = ({notification}) => (
    <NotificationWrapper>
        <Wrapper>
            <NotificationDateContainer>{notification.noteUpdated}</NotificationDateContainer>
            <NotificationAuthorContainer>{notification.userName+" "+notification.userLastName}</NotificationAuthorContainer>
        </Wrapper>
        <NotificationContent>{notification.note}</NotificationContent>
    </NotificationWrapper>
);

export default NotificationContainer;