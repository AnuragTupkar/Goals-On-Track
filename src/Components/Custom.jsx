import React, { useState } from 'react';
import goal from '../assets/goal.png'
import { Link } from 'react-router-dom';

function Custom() {
  const [image, setImage] = useState(null);
  const [goalTitle, setGoalTitle] = useState('');
  const [error, setError] = useState('');

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (goalTitle.trim() === '') {
      setError('Please enter a goal title.');
      return;
    }
    
    // Redirect to routine page if goal title is filled
    // Replace this with your actual redirect logic
    window.location.href = "/routine";
  };

  return (
    <>
      <div className="flex mt-12 text-white">
        <div className='bg-[#FF974D] ml-20 pb-4 rounded-xl'>
          <img className="h-[30rem]" src={goal} alt="Goal"></img>
          <h1 className='text-white text-4xl font-bold text-center'>SELECT YOUR GOAL</h1>
        </div>
        <div className='bg-[#204660] w-[54.5rem] rounded-xl'>
          <form className='mt-[4rem] ml-[4rem]' onSubmit={handleSubmit}>
            <label className='text-[2rem]'>GOAL TITLE <span className="text-red-400">*</span></label><br />
            <input 
              className="border-b border-white border-gray-500 bg-transparent focus:outline-none w-[45rem] mt-6" 
              autoComplete="off" 
              type="text" 
              value={goalTitle}
              onChange={(e) => setGoalTitle(e.target.value)}
            /><br></br>
            {error && <p className="text-red-500">{error}</p>}
            <label className='text-[2rem]'>GOAL DESCRIPTION</label><br />
            <textarea className="border-b border-white border-black border-gray-500 bg-transparent focus:outline-none w-[45rem]" rows="4"></textarea><br></br>
            <div className='flex gap-10'>
              <label className='text-[2rem]'>START DATE</label><br />
              <label className='text-[2rem]'>END DATE</label><br />
              <label className='text-[2rem]'>PRIORITY LEVEL</label>
            </div>
            <div className='flex gap-16 mt-8'>
              <input className="border-b border-white border-black border-gray-500 bg-transparent focus:outline-none " type="text" />
              <input className="border-b border-white border-black border-gray-500 bg-transparent focus:outline-none " type="text" />
              <select className="border-b border-white  border-gray-500 bg-transparent focus:outline-none w-[15rem] relative right-4">
                <option className="bg-black" value="high">High</option>
                <option className="bg-black" value="normal">Normal</option>
                <option className="bg-black" value="low">Low</option>
              </select><br />
            </div>
            
            <input type="file" onChange={handleImageUpload} accept="image/*" className='hidden' id="image-upload" />
            <label htmlFor="image-upload" className='border rounded-[4rem] px-16 py-4 mt-10 mr-14 cursor-pointer'>UPLOAD IMAGE</label>
            
            <button type="submit" className='font-semibold text-xl bg-[#3B84BF] rounded-[4rem] px-16 py-[1rem] mt-10'>SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Custom;
