import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title } = formValues;

    const activeId = useRef( note.id );
    
    useEffect(() => {
        if ( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id;
        }
    }, [note, reset])

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content mt-5">

                <input 
                    type="text"
                    placeholder="Title"
                    className="notes__title-input mb-5"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__text-area mb-5"
                    name="body"
                    value={ body }
                    onChange={handleInputChange}
                />

                {
                    (note.url) && 
                        <div className="notes__image">
                            <img 
                                src={ note.url }
                                alt="" 
                            />   
                        </div>
                }
            </div>
        </div>
    )
}
