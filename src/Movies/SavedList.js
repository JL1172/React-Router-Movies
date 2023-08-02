import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SavedList(props) {
  const {saved} = props;
  
  const navigate = useNavigate();
  const click = () => {
    navigate('/');
  }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie,i) => {
          return <li key = {i} className="saved-movie">{movie.title}</li>
     }
      )}
      <div className="home-button" onClick={click}>Home</div>
    </div>
  );
}
