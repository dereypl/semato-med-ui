import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';
export const AUTH_TOKEN_NAME = 'AUTH_TOKEN';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const API_URL = 'http://localhost:5000';

export const getHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_NAME)}`,
});

export const logInUser = accessToken => {
    localStorage.setItem(AUTH_TOKEN_NAME, accessToken);
};

const getToken = () => {
    return localStorage.getItem(AUTH_TOKEN_NAME);
};

const validateToken = (token) => {

    if (jwtDecode(token).exp < Date.now() / 1000) {
        logOutUser();
        return false
    }
    else return true;
};

export const isUserLogged = () => {
    const token = getToken();
    if (token) return validateToken(token);
    else return false;
};

export const authenticate = (email, password) => dispatch => {
    dispatch({type: AUTHENTICATE_REQUEST});
    return axios
        .post(`${API_URL}/api/auth/signin`, {
            email,
            password,
        })
        .then(payload => {
            logInUser(payload.data.accessToken);
            dispatch({type: AUTHENTICATE_SUCCESS, payload});
        })
        .catch(err => {
            console.log(err);
            dispatch({type: AUTHENTICATE_FAILURE, err});
        });
};

export const logOutUser = () => dispatch => {
    localStorage.clear();

    if (!localStorage.getItem(AUTH_TOKEN_NAME))
        dispatch({type: LOGOUT_SUCCESS});
};
