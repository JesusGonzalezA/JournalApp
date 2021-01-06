import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content mt-5">

                <input 
                    type="text"
                    placeholder="Title"
                    className="notes__title-input mb-5"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__text-area mb-5"
                />

                <div className="notes__image">
                    <img 
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        alt="" 
                    />   
                </div>
            </div>
        </div>
    )
}
