import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} 
        link = {<Link to = {`/movie/${movie.id}`}>Details</Link>} />
      ))}
    </div>
  );
}

