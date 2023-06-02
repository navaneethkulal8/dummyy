import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        setSummary(data.summary);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Show Summary</h1>
      <p>{summary}</p>
    </div>
  );
};

export default ShowSummary;
