import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated to use useNavigate from React Router v6
import CategoryEntryForm from '../components/CategoryEntryForm';
import '../styles/dashboard.css'; // Import the CSS file

const CategoryDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate(); // Updated to useNavigate for navigation

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
    setShowForm(false); // Hide form after submission
  };

  const handleCreateClick = () => {
    setShowForm(true);
  };

  const navigateToJournals = () => {
    navigate('/journal-entries'); // Updated navigation to useNavigate
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Categorise your Journals</h1>

      <p className="dashboard-description">
        Categories help you keep your journals organized. Create categories like 
        <strong> Personal, Work, Travel</strong>, or anything that fits your lifestyle. 
        This will allow you to easily navigate through your memories and keep them well-organized. 
        You can add more categories later as your journaling journey grows!
      </p>

      {/* Image before the button using a URL */}
      <div className="image-container">
        <img 
          src="https://images.unsplash.com/photo-1620034949504-339c43e9cd56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGpvdXJuYWwlMjBlbnRyeXxlbnwwfHwwfHx8MA%3D%3D" // Replace with your actual image URL
          alt="Category Illustration" 
          className="category-image" 
        />
      </div>

      {/* Button container for creating or skipping category */}
      <div className="button-container">
        <button
          onClick={handleCreateClick}
          className="create-category-button"
        >
          Create Category
        </button>
        <button
          onClick={navigateToJournals}
          className="skip-journals-button"
        >
          Go to Your Journals
        </button>
      </div>

      {/* Show the category form if the user clicks the "Create Category" button */}
      {showForm && (
        <div className="form-container">
          <CategoryEntryForm onSubmit={handleAddCategory} />
        </div>
      )}

      {/* Show the categories list if there are any */}
      {categories.length > 0 ? (
        <div className="categories-list">
          <h2 className="categories-title">Your Categories</h2>
          <ul className="categories-ul">
            {categories.map((category, index) => (
              <li key={index} className="category-item">{category.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center">
          <p className="empty-categories-text">No categories yet. Start by creating one!</p>
        </div>
      )}

      {/* Show navigation to journals if categories exist */}
      {categories.length > 0 && (
        <div className="journals-button-container">
          <button
            onClick={navigateToJournals}
            className="navigate-journals-button"
          >
            I'm Ready! Take Me to My Journals
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryDashboard;
