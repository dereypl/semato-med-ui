import React from "react";
import {mount} from 'enzyme';
import AuthPage from "./AuthPage";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import SignInForm from "../components/organisms/SignInForm/SignInForm";
import MainTemplate from "../templates/MainTemplate";
import {BrowserRouter} from "react-router-dom";
import PassResetForm from "../components/organisms/PassResetForm/PassResetForm";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<AuthPage/> Component", () => {
    let wrapper;
    describe('"authType" props set to "signIn"', () => {
        beforeEach(() => {
            wrapper = mount(
                <Provider store={store}>
                    <MainTemplate>
                        <BrowserRouter>
                            <AuthPage authType="signIn"/>
                        </BrowserRouter>
                    </MainTemplate>
                </Provider>
            );
        })
        it("should render <SignInForm/> component", () => {
            expect(wrapper.containsMatchingElement(<SignInForm/>)).toEqual(true);
        });
    })

    describe('"authType" props set to "passReset"', () => {
        beforeEach(() => {
            wrapper = mount(
                <Provider store={store}>
                    <MainTemplate>
                        <BrowserRouter>
                            <AuthPage authType="passReset"/>
                        </BrowserRouter>
                    </MainTemplate>
                </Provider>
            );
        })
        it("should render <PassResetForm/> component", () => {
            expect(wrapper.containsMatchingElement(<PassResetForm/>)).toEqual(true);
        });
    })
});