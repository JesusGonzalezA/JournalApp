import React from 'react';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { activateNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/notes', () => ({
    activateNote: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const inititalState = {
    auth: {
        uid: '1',
        name: 'Test'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 1234,
            title: 'Hello',
            body: 'World',
            date: 0
        },
        notes: []
    }
};
let store = mockStore( inititalState );
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={store}>
        <MemoryRouter>
            <NoteScreen />
        </MemoryRouter>
    </Provider>
);

describe('Testing NoteScreen Component', () => {
    
    test('should match the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should change the note in the store when i change the input', () => {
        const input = wrapper.find('input[name="title"]');

        input.simulate('change', {
            target: {
                name: 'title',
                value: 'Hola'
            }
        });

        expect( activateNote ).toHaveBeenLastCalledWith(
            1234,
            {
                body: 'World',
                title: 'Hola',
                id: 1234,
                date: 0
            }
        );
    })
    
    
})
