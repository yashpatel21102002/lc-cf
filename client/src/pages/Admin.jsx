// Admin.js

import React, { useState } from 'react';
import CreateContest from '../components/CreateContest';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('create');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'jndnyxjsbv') {
      setAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    // If authenticated, show the admin content
    return (
      <div>
        <div className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <ul className="flex space-x-4">
              <li
                className={`cursor-pointer ${
                  activeTab === 'create' ? 'text-indigo-500' : 'text-white'
                }`}
                onClick={() => setActiveTab('create')}
              >
                Create New Contest
              </li>
              <li
                className={`cursor-pointer ${
                  activeTab === 'edit' ? 'text-indigo-500' : 'text-white'
                }`}
                onClick={() => setActiveTab('edit')}
              >
                Edit Contests
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto p-4">
          {activeTab === 'create' ? <CreateContest /> : <CreateContest/>}
        </div>
      </div>
    );
  }
};

export default Admin;
