import React, { useState, useEffect } from 'react'

const UseFriends = () => {
  const [friends, setFriends] = useState([]);
  // loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('/data.json');
      const data = await res.json();
      console.log(data, 'data');

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 2000);
    };
    
    fetchData();
  }, []);
  
  return { friends, loading };
}

export default UseFriends