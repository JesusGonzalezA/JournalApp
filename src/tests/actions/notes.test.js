import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { startNewNote } from '../../actions/notes';
 
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'uidTestingExample',
    }
})

describe('Testing notes Actions', () => {
    
    test('should create a new Note (startNewNote)', async () => {
        
        await store.dispatch( startNewNote() );
    })
    
})
