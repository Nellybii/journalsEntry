import React from 'react';
import '../styles/journalItem.css';

const JournalEntryItem = ({ entry }) => {
  return (
    <div className="border rounded p-4 mb-4">
      <h3 className="text-xl font-bold">{entry.title}</h3>
      <p>{entry.content}</p>
      <p className="text-gray-600"><strong>Category:</strong> {entry.category}</p>
      <p className="text-gray-600"><strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}</p>
    </div>
  );
};

export default JournalEntryItem;
