import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SavedList(props) {
  const {saved} = props;
  const {list } = props;
  const array = [];
  array.push(list)
  const navigate = useNavigate();
  const click = () => {
    navigate('/');
  }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {array.map((movie,i) => {
          return <li key = {i} className="saved-movie">{movie}</li>
     }
      )}
      <div className="home-button" onClick={click}>Home</div>
    </div>
  );
}
