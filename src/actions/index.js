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

export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_LOCAL = 'DELETE_LOCAL';

export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
export const CHANGE_USER_DATA = 'CHANGE_USER_DATA';

export const MAIL_SEND = 'MAIL_SEND';

export const SET_USER_INFO = 'SET_USER_INFO';
export const CLEAR_AVAILABLE_VISITS = 'CLEAR_AVAILABLE_VISITS';
export const CLEAR_AUTHENTICATION_FAILURE = 'CLEAR_AUTHENTICATION_FAILURE';
export const CLEAR_LIST_CLINIC = 'CLEAR_LIST_CLINIC';
export const CLEAR_LIST_SPECIALITY = 'CLEAR_LIST_SPECIALITY';
export const CLEAR_LIST_PHYSICIAN = 'CLEAR_LIST_PHYSICIAN';
export const CLEAR_VISIT_COMPONENT = 'CLEAR_VISIT_COMPONENT';

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
    } else return true;
};

export const isUserLogged = () => {
    const token = getToken();
    if (token) return validateToken(token);
    else return false;
};

export const getUserInfo = () => dispatch => {
    console.log('getUserInfo');
    axios.get(`${API_URL}/api/user/me`, {
        headers: {Authorization: `Bearer ${getToken()}`}
    }).then(userInfo => {
        console.log('getUserInfo2');
        return dispatch({type: SET_USER_INFO, payload: userInfo.data});
    });
};

export const authenticate = (email, password) => dispatch => {
    dispatch({type: AUTHENTICATE_REQUEST});
    return axios
        .post(`${API_URL}/api/auth/signin`, {
            email,
            password,
        })
        .then(payload => {
            axios.get(`${API_URL}/api/user/me`, {
                headers: {Authorization: `Bearer ${payload.data.accessToken}`}
            }).then(userInfo => {
                return dispatch({type: SET_USER_INFO, payload: userInfo.data});
            });
            logInUser(payload.data.accessToken);
            dispatch({type: AUTHENTICATE_SUCCESS, payload});
        })

        .catch(err => {
            console.log(err);
            dispatch({type: AUTHENTICATE_FAILURE, err});
        });
};

export const resetPassword = (email) => dispatch => {
    return axios
        .post(`${API_URL}/api/user/forgotPassword?email=${email}`, {})
        .then(payload => {
            console.log(payload);
            dispatch({type: MAIL_SEND, payload: payload.data.success});
        })

        .catch(err => {
            console.log(err);
            dispatch({type: MAIL_SEND, payload: false});
        });
};

export const logOutUser = () => dispatch => {

    console.log("logout user");
    localStorage.clear();
    // dispatch({type: PURGE, key: "root"});
    // purgeStoredState(persistConfig);

    if (!localStorage.getItem(AUTH_TOKEN_NAME))
        dispatch({type: LOGOUT_SUCCESS});
};


export const fetchItems = (actionType, params = {}) => dispatch => {
    // dispatch({type: FETCH_REQUEST});
    return axios
    // .get(`${API_URL}/api/${actionType.path}/?where=${JSON.stringify(actionType.where)}`, {
        .get(`${API_URL}/api/${actionType.path}/`, {
            params: params,
            headers: getHeaders(),
        })
        .then(({data}) => {
            const itemType = actionType.itemType;
            return dispatch({
                type: FETCH_SUCCESS,
                payload: {
                    items: data[itemType],
                    itemType,
                },
            });
        })
        .catch(err => {
            console.log(err);

            //TODO: Handle error
            // const payload = err;
            // dispatch({ type: FETCH_FAILURE, payload });
        });
};


export const deleteItem = (actionType, params = {}) => dispatch => {
    return axios
        .delete(`${API_URL}/api/${actionType.path}/`, {
            params: params,
            headers: getHeaders(),
        })
        .then(({data}) => {
            console.log('deleted successfully!')
        })
        .catch(err => {
            console.log(err);
        });
};

export const makeReservation = (actionType, visit) => dispatch => {
    return axios
        .put(`${API_URL}/api/${actionType.path}/`, {
                ...visit
            },
            {
                headers: getHeaders(),
            })
        .then(({response}) => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
};

export const changePassword = (actionType, oldPassword, newPassword) => dispatch => {
    return axios
        .post(`${API_URL}/api/${actionType.path}/`, {
                oldPassword,
                newPassword,
            },
            {
                headers: getHeaders(),
            })
        .then(() => {
            return dispatch({
                type: PASSWORD_CHANGE,
                payload: true,
            });
        })
        .catch(err => {
            console.log(err);
            return dispatch({
                type: PASSWORD_CHANGE,
                payload: false,
            });
        });
};

export const requestProblem = (actionType, subject, content) => dispatch => {
    return axios
        .put(`${API_URL}/api/${actionType.path}/`, {
                subject,
                content,
            },
            {
                headers: getHeaders(),
            })
        .then(({response}) => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
};

export const changeUserData = (actionType, userData) => dispatch => {
    return axios
        .post(`${API_URL}/api/${actionType.path}/`, {
                ...userData,
            },
            {
                headers: getHeaders(),
            })
        .then(() => {
            return dispatch({
                type: CHANGE_USER_DATA,
                payload: true,
            });
        })
        .catch(err => {
            console.log(err);
            return dispatch({
                type: CHANGE_USER_DATA,
                payload: true,
            });
        });
};

export const setVisitRatinig = (actionType, visitId,rating) => dispatch => {
    return axios
        .post(`${API_URL}/api/${actionType.path}/`, {
                visitId,
                rating,
            },
            {
                headers: getHeaders(),
            })
        .catch(err => {
            console.log(err);
        });
};

