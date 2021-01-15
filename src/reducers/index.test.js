import {AUTHENTICATE_FAILURE, FETCH_SUCCESS, MAIL_SEND, SET_USER_INFO} from "../actions";
import {initialState, rootReducer} from "./index";

describe('rootReducer', () => {
    let action;
    let result;
    let expected;
    let initState;
    describe('default case', () => {
        beforeEach(() => {
            initState = initialState;
            expected = initialState;
            action = {};
        });
        it("should return state without any changes", () => {
            result = rootReducer(initState, action);
            expect(result).toEqual(expected);
        });
    });

    describe('AUTHENTICATE_FAILURE', () => {
        beforeEach(() => {
            initState = {
                isAuthenticationFailure: false
            };
            expected = {
                isAuthenticationFailure: true
            };
            action = {
                type: AUTHENTICATE_FAILURE
            }
        });
        it("should set 'isAuthenticationFailure' to true", () => {
            result = rootReducer(initState, action);
            expect(result).toEqual(expected);
        });
    });

    describe('SET_USER_INFO', () => {
        const mockUser = {
            id: 1,
            pesel: 1110001001,
            birthDate: '00-00-000',
            email: 'email@email.com',
            firstName: 'User',
            lastName: 'Testowy',
            street: 'Testowa',
            postalCode: '00-000',
            houseNumber: 1,
            city: 'Kraków',
            roles: [
                {
                    name: 'test'
                }
            ],
        };
        beforeEach(() => {
            initState = {
                currentUser: null
            };
            expected = {
                currentUser: {
                    ...mockUser,
                    roles: undefined,
                    role: 'test'
                }
            };
            action = {
                type: SET_USER_INFO,
                payload: mockUser,
            }
        });
        it("should set 'currentUser' to object having properties from action payload", () => {
            result = rootReducer(initState, action);
            expect(result).toEqual(expected);
        });
    });

    describe('FETCH_SUCCESS', () => {
        beforeEach(() => {
            initState = {
                isFetching: true
            };
            expected = {
                isFetching: false,
                test: [
                    {
                        id: 1,
                        name: 'item-1'
                    },
                    {
                        id: 2,
                        name: 'item-2'
                    },
                ]
            };
            action = {
                type: FETCH_SUCCESS,
                payload: {
                    itemType: 'test',
                    items: [
                        {
                            id: 1,
                            name: 'item-1'
                        },
                        {
                            id: 2,
                            name: 'item-2'
                        },
                    ]
                }
            }
        });
        it(`should set 'isFetching' to false and insert into the store property 'payload.itemType' which contains array of 'payload.items'`, () => {
            result = rootReducer(initState, action);
            expect(result).toEqual(expected);
        });
    });

    describe('MAIL_SEND', () => {
        describe('action.payload equals true', () => {
            beforeEach(() => {
                initState = {
                    isMailSendCorrectly: false
                };
                expected = {
                    isMailSendCorrectly: true
                };
                action = {
                    type: MAIL_SEND,
                    payload: true
                }
            });
            it("should set 'isMailSendCorrectly' to be true", () => {
                result = rootReducer(initState, action);
                expect(result).toEqual(expected);
            });
        });
        describe('action.payload equals false', () => {
            beforeEach(() => {
                initState = {
                    isMailSendCorrectly: true
                };
                expected = {
                    isMailSendCorrectly: false
                };
                action = {
                    type: MAIL_SEND,
                    payload: false
                }
            });
            it("should set 'isMailSendCorrectly' to be false", () => {
                result = rootReducer(initState, action);
                expect(result).toEqual(expected);
            });
        });
    });
});