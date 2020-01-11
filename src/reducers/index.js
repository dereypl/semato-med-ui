import {
    AUTHENTICATE_FAILURE,
    AUTHENTICATE_REQUEST,
    AUTHENTICATE_SUCCESS,
    CHANGE_USER_DATA,
    CLEAR_AUTHENTICATION_FAILURE,
    CLEAR_AVAILABLE_VISITS,
    FETCH_FAILURE,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    isUserLogged as checkIfUserIsLogged,
    LOGOUT_SUCCESS,
    MAIL_SEND,
    PASSWORD_CHANGE,
    SET_USER_INFO,
} from '../actions';

import {PURGE} from 'redux-persist';

const initialState = {
    isUserLogged: false,
    isAuthenticationFailure: false,
    dataChangeSuccess: false,
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTHENTICATE_SUCCESS:
            return {
                ...state,
                isUserLogged: checkIfUserIsLogged(),
                // username: getUserData().login,
            };

        case AUTHENTICATE_FAILURE:
            return {
                ...state,
                isAuthenticationFailure: true,
            };

        case CLEAR_AUTHENTICATION_FAILURE:
            return {
                ...state,
                isAuthenticationFailure: false,
            };

        case AUTHENTICATE_REQUEST:
            return {
                ...state,
                isAuthenticationFailure: false,
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isUserLogged: checkIfUserIsLogged(),
                isAuthenticationFailure: false,
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                [payload.itemType]: [...payload.items],
                isFetching: false,
            };

        case CHANGE_USER_DATA:
            console.log('CHANGE_USER_DATA');
            return {
                ...state,
                dataChangeSuccess: payload
            };

        case FETCH_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
            };

        case CLEAR_AVAILABLE_VISITS:
            return {
                ...state,
                availableVisitList: [],
            };

        case PASSWORD_CHANGE:
            return {
                ...state,
                isPasswordChangedCorrectly: payload,
            };

        case MAIL_SEND:
            return {
                ...state,
                isMailSendCorrectly: payload,
            };

        case SET_USER_INFO:
            const currentUser = {
                id: payload.id,
                pesel: payload.pesel,
                birthDate: payload.birthDate,
                email: payload.email,
                firstName: payload.firstName,
                lastName: payload.lastName,
                street: payload.street,
                postalCode: payload.postalCode,
                houseNumber: payload.houseNumber,
                city: payload.city,
                role: payload.roles[0].name,
            };
            return {
                ...state,
                currentUser,
            };

        case PURGE:
            console.log("PURGING!!!!");
            return {isUserLogged: false};    // Return the initial state of this reducer to 'reset' the app

        default:
            return state;
    }


};

export default rootReducer;
