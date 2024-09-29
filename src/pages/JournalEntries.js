import React, { useEffect, useState } from 'react';
import JournalEntryList from '../components/JournalEntryList';
import CategoryFilter from '../components/CategoryFilter';
import api from '../utils/utils';
import '../styles/journalEntries.css';
import { useNavigate } from 'react-router-dom';  // Navigation hook

const JournalEntries = () => {
  const navigate = useNavigate();  // Hook to navigate between pages
  const [selectedCategory, setSelectedCategory] = useState('');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ['Personal', 'Work', 'Travel'];

  // Fetch journal entries from API
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await api.get('/api/journals/');
        setEntries(response.data);
      } catch (err) {
        setError('Failed to fetch journal entries');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  // Function to handle editing an entry
  const handleEdit = (id) => {
    // Navigate to the edit page for the selected entry
    navigate(`/journal-entries/edit/${id}`);
  };

  // Function to handle deleting an entry
  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/journals/${id}/`);
      setEntries(entries.filter((entry) => entry.id !== id));
    } catch (err) {
      console.error('Failed to delete entry', err);
    }
  };

  // Filter entries based on the selected category
  const filteredEntries = selectedCategory
    ? entries.filter((entry) => entry.category === selectedCategory)
    : entries;

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Journal Entries</h2>
      
      {/* Button to navigate to the Add Journal Entry page */}
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/journal-entries/add')}
        >
          Add New Journal Entry
        </button>
      </div>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      {/* Show message if there are no entries */}
      {filteredEntries.length === 0 ? (
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg mb-4">
            You have no journal entries yet. Start journalling now. A journal that goes with you everywhere without the risk of going anywhere.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate('/journal-entries/new')}
          >
            Add Your First Entry
          </button>
        </div>
      ) : (
        <JournalEntryList
          entries={filteredEntries}
          onEdit={handleEdit} // Pass the edit function to the list
          onDelete={handleDelete} // Pass the delete function to the list
        />
      )}
    </div>
  );
};

export default JournalEntries;
