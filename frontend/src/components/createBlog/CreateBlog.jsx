import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateBlog.css';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('access');
    const username = localStorage.getItem('username');

    if (!token || !username) {
      alert("You must be logged in to create a blog.");
      return;
    }

    try {
      const res = await axios.post(
        'https://blogsiteapp-kjw2.onrender.com/api/posts/',  // Change URL if your API route differs
        {
          ...formData,
          author: username  // Pass the username to the backend
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      alert('Blog created successfully!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error creating blog. Please try again.');
    }
  };

  return (
    <div className="create-blog-container">
      <form className="create-blog-form" onSubmit={handleSubmit}>
        <h2>Create New Blog</h2>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Blog Content"
          value={formData.content}
          onChange={handleChange}
          rows={10}
          required
        ></textarea>
        <button type="submit">Publish Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
