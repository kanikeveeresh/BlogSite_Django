import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogDetail.css';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({ title: '', content: '' });

  const token = localStorage.getItem('access');
  const username = localStorage.getItem('username');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts/${id}/`)
      .then(res => {
        setPost(res.data);
        setEditableData({ title: res.data.title, content: res.data.content });
      })
      .catch(err => console.error('Error loading post:', err));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${id}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Post deleted");
      navigate('/');
    } catch (err) {
      alert("Error deleting post");
    }
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:8000/api/posts/${id}/`, editableData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPost(res.data);
      setIsEditing(false);
      alert("Post updated");
    } catch (err) {
      alert("Failed to update post");
    }
  };

  if (!post) return <div>Loading...</div>;

  const isAuthor = token && username === post.author;

  return (
    <div className="blog-detail-container">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editableData.title}
            onChange={(e) => setEditableData({ ...editableData, title: e.target.value })}
            className="blog-detail-title-input"
          />
          <textarea
            value={editableData.content}
            onChange={(e) => setEditableData({ ...editableData, content: e.target.value })}
            rows={10}
            className="blog-detail-textarea"
          />
        </>
      ) : (
        <>
          <h2 className="blog-detail-title">{post.title}</h2>
          <p className="blog-detail-content">{post.content}</p>
        </>
      )}

      {isAuthor && (
        <div className="blog-detail-buttons">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="btn-primary">Post</button>
              <button onClick={() => setIsEditing(false)} className="btn-secondary">Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEditing(true)} className="btn-primary">Edit</button>
              <button onClick={handleDelete} className="btn-danger">Delete</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
