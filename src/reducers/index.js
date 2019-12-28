import {
    // AUTHENTICATE_REQUEST,
    AUTHENTICATE_SUCCESS,
    // AUTHENTICATE_FAILURE,
    LOGOUT_SUCCESS,
    FETCH_SUCCESS,
    FETCH_REQUEST,
    FETCH_FAILURE,
    isUserLogged as checkIfUserIsLogged,
} from '../actions';

const initialState = {
    isUserLogged: checkIfUserIsLogged(),
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

        default:
            return state;
    }
};

export default rootReducer;
