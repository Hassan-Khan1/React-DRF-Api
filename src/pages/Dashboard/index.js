import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

// services
import API from '../../services/API';

// contexts
import { UserContext } from '../../context/UserContext'

const Dashboard = () => {
  // initials
  const history = useHistory();

  // states
  const [movies, setMovies] = useState([]);
  const { data, setData } = useContext(UserContext);

  useEffect(() => {
    const getMoviesWatchList = async () => {
      setMovies(await API.get('watch/list'));
    };
    getMoviesWatchList();
  }, []);

  return (
    <div>
      {movies.map((movie, i) => <div key={i}>{movie.title} - {movie.storyline}</div>)}
    </div>
  );

}

export default Dashboard;
