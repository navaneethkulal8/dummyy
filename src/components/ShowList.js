import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        const formattedShows = data.map(item => {
          const showData = item.show;
          return {
            id: showData.id,
            name: showData.name,
            genres: showData.genres,
            image: showData.image.medium
          };
        });
        setShows(formattedShows);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="show-list">
      {shows.map(show => (
        <div key={show.id} className="show-item">
          <h2>{show.name}</h2>
          <p>Genres: {show.genres.join(', ')}</p>
          <img src={show.image} alt={show.name} />
          <div>
          <Link to={`/show/${show.id}`}>
            <button className="summary-button">Summary</button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
