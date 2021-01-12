import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    const authState = useSelector( state => state.auth );
    const { name } = authState;

    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar mt-5">
                <h3>
                    <i className="far fa-moon"></i>
                    <span> { name }</span>
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
