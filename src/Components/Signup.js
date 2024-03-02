// SignUp.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      console.log(response.data); // Assuming the backend sends back a response message
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <>
      {/* Your signup form JSX */}
    </>
  );
};

export default SignUp;
