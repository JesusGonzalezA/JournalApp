import React from 'react';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { act } from '@testing-library/react'

import { firebase } from '../../../firebase/firebaseConfig'

import { MemoryRouter } from 'react-router-dom';
import { login } from '../../../actions/auth';
import { AppRouter } from '../../../components/routers/AppRouter';
import Swal from 'sweetalert2'

jest.mock('sweetalert2', () => {
    fire: jest.fn()
})

jest.mock('../../../actions/auth', () => ({
    login: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const inititalState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 'abc',
        },
        notes: []
    }
};
let store = mockStore( inititalState );
store.dispatch = jest.fn();


describe('Testing authRouter Component', () => {
    
    test('should call login if i am authenticated', async () => {
        
        let user;

        await act( async () => {

            const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456');
            user = userCred.user;
            
            const wrapper = mount( 
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter /> 
                    </MemoryRouter>
                </Provider>
            )
        })
        
        expect( login ).toHaveBeenCalledWith('VQAVqtkja4WPtD5Iw4U2q4fIr9W2', null);
    })
})
