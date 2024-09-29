import React from 'react';
import JournalEntryItem from './JournalEntryItem'; // Assuming you have this component

const JournalEntryList = ({ entries, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <div key={entry.id} className="border rounded p-4 mb-4 shadow-md">
          <JournalEntryItem entry={entry} />
          <div className="flex justify-between mt-4">
              <button
                onClick={() => onEdit(entry.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                    onClick={() => onDelete(entry.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2"
                  >
                    Delete
              </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default JournalEntryList;
