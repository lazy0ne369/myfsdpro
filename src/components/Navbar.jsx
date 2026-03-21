import React from "react";

function Navbar({ user, onLogout, currentPage, onNavigate }) {
    return (
        <aside className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li className={currentPage === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</li>
                <li className={currentPage === 'about' ? 'active' : ''} onClick={() => onNavigate('about')}>About</li>
                <li className={currentPage === 'contact' ? 'active' : ''} onClick={() => onNavigate('contact')}>Contact</li>
            </ul>
            <div className="sidebar-footer">
                <p>Welcome, <strong>{user}</strong></p>
                <button className="logout-btn" onClick={onLogout}>Logout</button>
            </div>
        </aside>
    );
}

export default Navbar;