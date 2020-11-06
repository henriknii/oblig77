import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from '../../components/general/List';
import { InfoButton } from '../../styled/Styled';

const ListPosts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);

  const createMap = ({ data }) => Object.entries(data);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/posts', {
          transformResponse: createMap,
          responseType: 'json',
        });
        if (response.status === 200) {
          setPosts(response.data);
          setError('');
        }
      } catch (error) {
        setPosts([]);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts page</h1>
      <div>
        {loading && 'Loading ...'}
        {error && <p>{error}</p>}
        {posts && posts.length > 0 && <List data={posts} />}
      </div>
      <InfoButton>
        <Link to="/posts/create">Ny post</Link>
      </InfoButton>
    </div>
  );
};

export default ListPosts;
