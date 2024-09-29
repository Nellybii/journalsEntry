import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Link to view existing journal entries */}
        <Link to="/journal-entries" className="bg-blue-500 text-white px-4 py-2 rounded text-center">
          View Journal Entries
        </Link>
        
        {/* Link to add or edit a journal entry */}
        <Link to="/add-edit-journal-entry" className="bg-green-500 text-white px-4 py-2 rounded text-center">
          Add New Entry
        </Link>
        
        {/* Link to access settings */}
        <Link to="/settings" className="bg-gray-500 text-white px-4 py-2 rounded text-center">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
