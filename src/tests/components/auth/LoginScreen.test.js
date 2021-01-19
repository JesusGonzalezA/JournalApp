import React from 'react';
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))

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
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
);

describe('Testing LoginScreen Component', () => {
    
    beforeEach(() => {
        store = mockStore( inititalState );
        jest.clearAllMocks();
    });

    test('should match the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should dispatch startGoogleSignIn', () => {

        wrapper.find('.google-btn').prop('onClick')();

        expect( startGoogleLogin ).toHaveBeenCalled();
    })

    test('should not call login when the form is not correct', () => {
        
        wrapper.find('form').simulate('submit'), {
            preventDefault: () => {}
        }

        expect( startLoginEmailPassword ).not.toHaveBeenCalled();
    })

    test('should call login with user and password', () => {
        wrapper.find('input[name="email"]').simulate('change', {             
            target: {
                name: 'email',                 
                value: 'jesus@jesus.com'
            }         
        });

        wrapper.find('input[name="password"]').simulate('change', {             
            target: {
                name: 'password',                 
                value: '123456'
            }         
        });

        wrapper.find('form').simulate('submit'), {
            preventDefault: () => {}
        }

        expect( startLoginEmailPassword ).toHaveBeenCalledWith('jesus@jesus.com', '123456');
    })
    
})
