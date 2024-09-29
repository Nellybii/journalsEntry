// EditJournalEntry.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JournalEntryForm from '../components/JournalEntryForm';
import api from '../utils/utils';

const EditJournalEntry = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      if (id) {
        try {
          const response = await api.get(`/api/journals/${id}/`);
          setEntry(response.data);
        } catch (error) {
          console.error('Error fetching journal entry:', error);
        }
      }
    };
    fetchEntry();
  }, [id]);

  const handleFormSubmit = async (formData) => {
    try {
      await api.put(`/api/journals/${id}/`, formData);
      alert('Journal entry updated successfully!');
      navigate('/journal-entries');
    } catch (error) {
      console.error('Error saving journal entry:', error);
      alert('Failed to save the journal entry. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Edit Journal Entry</h2>
      <JournalEntryForm entry={entry} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default EditJournalEntry;
