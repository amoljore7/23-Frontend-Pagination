import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { async } from 'q';

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
      <React.Fragment>
        Hello
      </React.Fragment>
    );
}



export default App;
