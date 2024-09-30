import React, { useState, useEffect } from 'react';
import api from '../utils/utils'; // Make sure api is correctly imported

const CategoryEntryForm = ({ category, onSubmit }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for handling loading

  const predefinedCategories = ['Personal', 'Travel', 'Work'];

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setError('Please select a category.');
      return;
    }
    
    const formData = { name };

    try {
      setLoading(true); // Start loading
      setError(''); // Clear previous errors

      // Sending POST request to create a new category
      const response = await api.post('/api/category/', formData);

      if (response.status === 201) {
        // Call the parent onSubmit handler if successful
        onSubmit(response.data);
        setName(''); // Clear the form
      } else {
        setError('Failed to create category. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while submitting. Please try again.');
    } finally {
      setLoading(false); // Stop loading after request
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="" disabled>Select a category</option>
          {predefinedCategories.map((categoryOption) => (
            <option key={categoryOption} value={categoryOption}>
              {categoryOption}
            </option>
          ))}
        </select>
      </div>

      {/* Display error message if any */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Display loading state */}
      {loading && <p className="text-blue-500 text-sm">Submitting...</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading} // Disable the button while loading
      >
        {category ? 'Update Category' : 'Add Category'}
      </button>
    </form>
  );
};

export default CategoryEntryForm;
