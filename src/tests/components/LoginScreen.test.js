import React from 'react';
import { mount } from 'enzyme'
import { LoginScreen } from '../../components/auth/LoginScreen';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const inititalState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};
let store = mockStore( inititalState )

const wrapper = mount( 
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
);

describe('Testing LoginScreen Component', () => {
    
    beforeEach(() => {
        store = mockStore( inititalState )
    });

    test('should match the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})
