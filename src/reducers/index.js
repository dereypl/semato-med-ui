import {
    // AUTHENTICATE_REQUEST,
    AUTHENTICATE_SUCCESS,
    // AUTHENTICATE_FAILURE,
    LOGOUT_SUCCESS,
    FETCH_SUCCESS,
    FETCH_REQUEST,
    FETCH_FAILURE,
    CLEAR_AVAILABLE_VISITS,
    isUserLogged as checkIfUserIsLogged, SET_USER_INFO,
} from '../actions';

import {PURGE, REHYDRATE} from 'redux-persist';

const initialState = {
    isUserLogged: false,
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTHENTICATE_SUCCESS:
            return {
                ...state,
                isUserLogged: checkIfUserIsLogged(),
                // username: getUserData().login,
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isUserLogged: checkIfUserIsLogged(),
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                [payload.itemType]: [...payload.items],
                isFetching: false,
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

        case SET_USER_INFO:
            const currentUser = {
                id: payload.role[0].id,
                email: payload.email,
                firstName: payload.firstName,
                lastName: payload.lastName,
                role: payload.role[0].name,
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
