import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../components/general/Error';

const Post = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:5000/posts/${id}`);
          if (response.status === 200) {
            setPost(response.data.data);
            setError('');
          }
        } catch (error) {
          setPost([]);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <h2>Post Page</h2>
      <div>
        {loading ? (
          'Loading ...'
        ) : (
          <>
            <div>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </>
        )}
        {error ? <Error message={error} /> : null}
      </div>
    </div>
  );
};

export default Post;
