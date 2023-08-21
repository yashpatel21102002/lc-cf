// CreateContest.js

import React, { useState } from 'react';

const CreateContest = () => {
  const [contestData, setContestData] = useState({
    author: '',
    platform: '',
    contestName: '',
    contestLink: '',
    authorHandleLink: '',
    youtubeLink: '',
    description: '',
    isImportant: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContestData({
      ...contestData,
      [name]: value,
    });
  };

  const handleImportantToggle = () => {
    setContestData({
      ...contestData,
      isImportant: !contestData.isImportant,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submit logic here, e.g., send data to the server
    console.log('Submitted data:', contestData);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Create New Contest</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
            Author's Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full max-w-md px-3 py-2 placeholder-gray-300 border rounded-lg shadow-md focus:outline-none focus:shadow-outline"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="platform" className="block text-gray-700 text-sm font-bold mb-2">
            Platform <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="platform"
            name="platform"
            className="w-full max-w-md px-3 py-2 placeholder-gray-300 border rounded-lg shadow-md focus:outline-none focus:shadow-outline"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contestName" className="block text-gray-700 text-sm font-bold mb-2">
            Contest Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contestName"
            name="contestName"
            className="w-full max-w-md px-3 py-2 placeholder-gray-300 border rounded-lg shadow-md focus:outline-none focus:shadow-outline"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contestLink" className="block text-gray-700 text-sm font-bold mb-2">
            Contest Link
          </label>
          <input
            type="url"
            id="contestLink"
            name="contestLink"
            className="w-full max-w-md px-3 py-2 placeholder-gray-300 border rounded-lg shadow-md focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="authorHandleLink" className="block text-gray-700 text-sm font-bold mb-2">
            Author's Personal Handle Link
          </label>
          <input
            type="url"
            id="authorHandleLink"
            name="authorHandleLink"
            className="w-full max-w-md px-3 py-2 placeholder-gray-300 border rounded-lg shadow-md focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="youtubeLink" className="block text-gray-700 text-sm font-bold mb-2">
            YouTube Video Link
          </label>
          <input
            type="url"
            id="youtubeLink"
            name="youtubeLink"
            className="w-full max-w-md px-3 py-2 placeholder-gray-300 border rounded-lg shadow-md focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full max-w-md px-3 py-2 placeholder-gray-300 border rounded-lg shadow-md focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="isImportant" className="block text-gray-700 text-sm font-bold mb-2">
            Mark as Important
          </label>
          <input
            type="checkbox"
            id="isImportant"
            name="isImportant"
            className="mr-2"
            onChange={handleImportantToggle}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Contest
        </button>
      </form>
    </div>
  );
};

export default CreateContest;
