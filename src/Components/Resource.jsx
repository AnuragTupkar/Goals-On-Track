import React, { useState } from 'react';

const Resource= () => {
  const [resources, setResources] = useState([]);
  const [inputLink, setInputLink] = useState('');
  const [inputImage, setInputImage] = useState('');

  const handleLinkInputChange = (event) => {
    setInputLink(event.target.value);
  };

  const handleImageInputChange = (event) => {
    setInputImage(event.target.value);
  };

  const handleAddResource = () => {
    if (inputLink.trim() !== '' && inputImage.trim() !== '') {
      setResources([...resources, { link: inputLink, image: inputImage }]);
      setInputLink('');
      setInputImage('');
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Resources</h1>
      <div className="mb-4">
        <input
          type="text"
          value={inputLink}
          onChange={handleLinkInputChange}
          placeholder="Enter a link..."
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={inputImage}
          onChange={handleImageInputChange}
          placeholder="Enter an image URL..."
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none"
        />
      </div>
      <button
        onClick={handleAddResource}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mb-4"
      >
        Add Resource
      </button>
      <div>
        <h3 className="text-lg font-semibold mb-2">Added Resources:</h3>
        {resources.map((resource, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded">
            <span><a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.link}</a></span>
            <img src={resource.image} alt={`Resource ${index}`} className="h-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
