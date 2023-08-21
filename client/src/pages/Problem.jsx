import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    authorName: '',
    contestName: '',
    problemName: '',
    youtubeLink: '',
    instagramLink: '',
    leetcodeLink: '',
    complexity: '',
    solution: '',
    codeOption: 'upload', // Default to 'upload', can be 'upload' or 'input'
    codeFile: null, // To store the selected file
    codeInput: '', // To store the manually input code
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData({ ...formData, codeOption: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, codeFile: file });

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        setFormData({ ...formData, codeInput: fileContent });
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md md:w-1/2 lg:w-2/3 xl:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Problem One Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="authorName" className="block font-medium">Name of the Author</label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                value={formData.authorName}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div>
            <div>
              <label htmlFor="contestName" className="block font-medium">Name of the Contest</label>
              <input
                type="text"
                id="contestName"
                name="contestName"
                value={formData.contestName}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="problemName" className="block font-medium">Name of the Problem</label>
              <input
                type="text"
                id="problemName"
                name="problemName"
                value={formData.problemName}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div>
            <div>
              <label htmlFor="youtubeLink" className="block font-medium">YouTube Video Link</label>
              <input
                type="text"
                id="youtubeLink"
                name="youtubeLink"
                value={formData.youtubeLink}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="instagramLink" className="block font-medium">Instagram Reel Link</label>
              <input
                type="text"
                id="instagramLink"
                name="instagramLink"
                value={formData.instagramLink}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="leetcodeLink" className="block font-medium">LeetCode Profile Link</label>
              <input
                type="text"
                id="leetcodeLink"
                name="leetcodeLink"
                value={formData.leetcodeLink}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="solution" className="block font-medium">Solution</label>
              <textarea
                id="solution"
                name="solution"
                value={formData.solution}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3 h-32"
                required
              ></textarea>
            </div>
            <div>
              <label className="block font-medium">Choose Code Option:</label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="codeOption"
                  value="upload"
                  checked={formData.codeOption === 'upload'}
                  onChange={handleChange}
                />
                <span className="ml-2">Upload Code</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="codeOption"
                  value="input"
                  checked={formData.codeOption === 'input'}
                  onChange={handleChange}
                />
                <span className="ml-2">Manually Input Code</span>
              </label>
            </div>
            {formData.codeOption === 'upload' && (
              <div>
                <label htmlFor="codeFile" className="block font-medium">Upload Code File</label>
                <input
                  type="file"
                  id="codeFile"
                  name="codeFile"
                  onChange={handleFileChange}
                  className="w-full border rounded-md py-2 px-3"
                />
              </div>
            )}
            {formData.codeOption === 'input' && (
              <div>
                <label htmlFor="codeInput" className="block font-medium">Manually Input Code</label>
                <textarea
                  id="codeInput"
                  name="codeInput"
                  value={formData.codeInput}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 h-32"
                  required
                ></textarea>
              </div>
            )}
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
