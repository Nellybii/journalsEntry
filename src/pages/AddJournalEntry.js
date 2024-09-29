// AddJournalEntry.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import JournalEntryForm from '../components/JournalEntryForm';
import api from '../utils/utils'; // Import your Axios instance for API calls

const AddJournalEntry = () => {
  const navigate = useNavigate(); // Navigation hook

  const handleFormSubmit = async (formData) => {
    try {
      await api.post('/api/journals/', formData);
      
      alert('Journal entry created successfully!');
      navigate('/journal-entries'); 
    } catch (error) {
      console.log(error.response.data);
      const errorMessage = error.response?.data?.category || error.message || 'Failed to save the journal entry. Please try again.';
      console.error('Error saving journal entry:', errorMessage);
      alert(errorMessage);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Add Journal Entry</h2>
      <JournalEntryForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddJournalEntry;
