import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar mt-5">
                <h3>
                    <i className="far fa-moon"></i>
                    <span> Jesus</span>
                </h3>

                <button className="btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x mb-5"></i>
                <p>New entry</p>
            </div>

            <JournalEntries />
            
        </aside>
    )
}
