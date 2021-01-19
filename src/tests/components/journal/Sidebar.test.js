import React from 'react';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn()
}));

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const inititalState = {
    auth: {
        name: 'Jesus'
    },
    notes: {
        notes: []
    }
};
let store = mockStore( inititalState );
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={store}>
        <Sidebar />
    </Provider>
);

describe('Testing Sidebar Component', () => {
    
    test('should match the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should call startLogout', () => {
        const buttonLogout = wrapper.find('button');

        buttonLogout.simulate('click');

        expect( startLogout ).toHaveBeenCalled();
    })

    test('should call startNewNote', () => {
        const buttonNewNote = wrapper.find('.journal__new-entry');
        buttonNewNote.simulate('click');
        
        expect( startNewNote ).toHaveBeenCalled();
    })
    
})
