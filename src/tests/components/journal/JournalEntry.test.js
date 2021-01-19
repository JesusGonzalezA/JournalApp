import React from 'react';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

import { activateNote } from '../../../actions/notes';
import { JournalEntry } from '../../../components/journal/JournalEntry';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const inititalState = {};
let store = mockStore( inititalState );
store.dispatch = jest.fn();

const note = {
    id: 10,
    date: 0,
    title: 'Hello',
    body: 'World',
    url: 'https://somewhere.com/photo.jpg'
}
const wrapper = mount( 
    <Provider store={store}>
        <JournalEntry {...note} />
    </Provider>
);

describe('Testing JournalEntry Component', () => {
    
    test('should match the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should activate the note', () => {
        wrapper.find('.journal__entry').prop('onClick')();

        expect( store.dispatch ).toHaveBeenCalledWith(
            activateNote( note.id, {...note})
        );
    })
    
    
})
