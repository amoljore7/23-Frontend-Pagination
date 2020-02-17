import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Posts } from './components/posts';

const App = ()=> {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);
  
    return (
      <React.Fragment className="container mt-5">
        <h1 className="text-primary mb-3">My Blog</h1>
        <Posts posts={posts} loading={loading} />
      </React.Fragment>
    );
}



export default App;
