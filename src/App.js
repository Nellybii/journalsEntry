import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // Ensure you import AuthProvider correctly
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import JournalEntries from './pages/JournalEntries';
import AddJournalEntry from './pages/AddJournalEntry';
import Settings from './pages/Settings';
import EditJournalEntry from './pages/EditJounal';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
};

const Main = () => {
  const { authToken } = useAuth(); // Access the auth context

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={authToken ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/journal-entries" element={authToken ? <JournalEntries /> : <Navigate to="/login" />} />
        <Route path="/journal-entries/add" element={authToken ? <AddJournalEntry /> : <Navigate to="/journal-entries" />} />
        <Route path="/journal-entries/edit/:id" element={authToken ? <EditJournalEntry /> : <Navigate to="/login" />} />
        <Route path="/settings" element={authToken ? <Settings /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
