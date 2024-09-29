import React from 'react';
import UserSettingsForm from '../components/UserSettingsForm';

const Settings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <UserSettingsForm />
    </div>
  );
};

export default Settings;
