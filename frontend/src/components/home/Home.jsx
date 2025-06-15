import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const postsPerPage = isMobile ? 3 : 6;

  const isLoggedIn = !!localStorage.getItem('access');
  const username = localStorage.getItem('username');

  useEffect(() => {
    axios.get('https://blogsiteapp-kjw2.onrender.com/api/posts/')
      .then(res => setPosts(res.data))
      .catch(err => console.error("Failed to fetch posts", err));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.clear();
      alert('Logged out');
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const handleCreateClick = () => {
    if (isLoggedIn) {
      navigate('/create');
    } else {
      alert('Please login to create a blog');
    }
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <>
      {/* Keep existing Navbar */}
      <nav className="navbar">
        <div className="left">
          <Link to="/" className="logo">BlogWebApp</Link>
        </div>
        <div className="right">
          <button className="link" onClick={handleCreateClick}>Create Blog</button>
          <button onClick={handleAuthClick} className="auth-button">
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
          {isLoggedIn && <span className="username">{username || 'User'}</span>}
        </div>
      </nav>

      {/* Blog Posts Section */}
      <div className="posts-container">
          {currentPosts.length === 0 ? (
            <div className='no-post'><p>No blog posts available.</p></div>
        ) : (
          <>
          <h2 style={{textAlign: "center"}}>All Blog Posts</h2>
          <div className="posts-grid">
            {currentPosts.map(post => (
              <div key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.content.slice(0, 100)}...</p>
                <Link to={`/blog/${post.id}`} className="show-button">Show Blog</Link>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          </>
        )}        
      </div>
    </>
  );
};

export default Home;
