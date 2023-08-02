import { useNavigate } from "react-router-dom";
import React from "react";

export default function MovieDetails(props) {
    const navigate = useNavigate(); 
    const { title, director, metascore, id } = props.movie;
    const clickMovie = () => {
      navigate(`/movie/${id}`)
    }
    return (
      <div onClick = {clickMovie} className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    );
  }
  