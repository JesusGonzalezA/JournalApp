import React from 'react';
import { mount } from 'enzyme'
import { RegisterScreen } from '../../components/auth/RegisterScreen';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const inititalState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};
let store = mockStore( inititalState );

const wrapper = mount( 
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
);


describe('Testing Register Screen Component', () => {

    beforeEach(() => {
        store.clearActions();
    });

    test('should match the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should set email error when it is empty', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        const actions = store.getActions();        
        
        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload: 'Email is not valid'
        })
    })

    test('should set name error when it is empty and email is filled', () => {
        const emailField = wrapper.find('input[name="email"]');

        emailField.simulate('change', {
            target: {
                name: 'email',
                value: 'jesus@gmail.com'
            }
        })

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        const actions = store.getActions();        
        
        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload: 'Name is required'
        })
    })
    
    
    
})
