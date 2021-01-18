import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';
import { types } from '../../types/types';

jest.mock('../../helpers/uploadFile', () => ({
    uploadFile: jest.fn( () => {
        return 'https://hello-world.com/thing.jpg'
    })
}))


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'uidTestingExample',
    },
    notes: {
        active: {
            id: 'OPuaGh7CSq73MCnkwHj4',
            title: 'Hello',
            body: 'World'
        }
    }
})

describe('Testing notes Actions', () => {

    beforeEach(() => {
        store.clearActions();
    });
    
    test('should create a new Note (startNewNote)', async () => {
        
        await store.dispatch( startNewNote() );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })

        // Delete the note
        const docId = actions[0].payload.id;
        await db.doc(`uidTestingExample/journal/notes/${docId}`).delete();
        
    })

    // test('startLoadingNotes should load the notes', async() => {
    //     await store.dispatch(startLoadingNotes('uidTestingExample'))
 
    //     const actions = store.getActions()
    //     expect(actions[0]).toEqual({
    //         type: types.notesLoad,
    //         payload: expect.any(Array)
    //     })
 
    //     const expected = {
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         body: expect.any(String),
    //         date: expect.any(Number)
    //     }
    //     expect(actions[0].payload[0]).toMatchObject(expected)
    // }, 10000)

    test('should start saving the note', async () => {
        
        const note = {
            id: 'OPuaGh7CSq73MCnkwHj4',
            title: 'Hola mundo',
            body: 'Saved'
        }

        await store.dispatch( startSaveNote( note ) );

        const actions = store.getActions();

        expect( actions[0].type ).toBe( types.notesUpdate )

        // const docRef = await db.doc(`/uidTestingExample/journal/notes/${note.id}`).get();

        // expect( docRef.data().title ).toBe( note.title )
    })

    test('startUploading should update the url of the entry', async () => {
        
        const file = new File([], 'photo.png');

        await store.dispatch( startUploading( file ));
    
        
    })
    
    
})
