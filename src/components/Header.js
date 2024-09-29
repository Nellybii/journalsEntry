import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = ({ handleLogOut, logoImg }) => {
  return (
    <div className="header-container flex justify-between items-center p-4 bg-gray-800">
      <section className="logo-section">
        <Link to="/">
          <img src={logoImg} className="logo-header h-10" alt="Journaling App logo" />
        </Link>
      </section>

      <section className="button-section flex space-x-4">
        <div>
          <Link className="header-button px-4 py-2 text-white rounded bg-gray-600 hover:bg-gray-700" to="/dashboard">
            Dashboard
          </Link>
        </div>
        <div>
          <Link className="header-button px-4 py-2 text-white rounded bg-gray-600 hover:bg-gray-700" to="/login">
            Sign In
          </Link>
        </div>
        <div>
          <Link className="header-button px-4 py-2 text-white rounded bg-gray-600 hover:bg-gray-700" to="/signup">
            Sign Up
          </Link>
        </div>
        <div>
          <Link className="header-button px-4 py-2 text-white rounded bg-gray-600 hover:bg-gray-700" to="/journal-entries">
            Journal Entries
          </Link>
        </div>
        <div>
          <Link className="header-button px-4 py-2 text-white rounded bg-gray-600 hover:bg-gray-700" to="/add-edit-journal-entry">
            Entry Handling
          </Link>
        </div>
        <div>
          <Link className="header-button px-4 py-2 text-white rounded bg-gray-600 hover:bg-gray-700" to="/settings">
            Settings
          </Link>
        </div>
        
      </section>
    </div>
  );
};

export default Header;
