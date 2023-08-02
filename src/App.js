import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);
  const [select,setSelect] = useState(false);

  useEffect(() => {
    async function getMovies() {
      const res = await axios.get('http://localhost:5001/api/movies') // Study this endpoint with Postman
      try {
        setMovies(res.data)
        //* console.log(res.data)// Study this response with a breakpoint or log statements //*breakpoint is debugger
        // and set the response data as the 'movies' slice of state
        //! debugger
      } catch {
        console.log(new Error);
      }
    }
    getMovies();
  }, []);

const addToSavedList = (id) => {

}
    // This is stretch. Prevent the same movie from being "saved" more than once


  return (
    <div>
      <SavedList addToSavedList = {addToSavedList} saved = {saved}
      setSaved = {setSaved} list={[]} />
      <div>
        <Routes>
          <Route path = '/' element = {<MovieList movies = {movies}/>} />
          <Route path = 'movie/:id' element = {<Movie
          saved = {saved} setSaved = {setSaved}
          
          select = {select} setSelect = {setSelect} movies = {movies}/>} />
          {/* <Route path = 'movie/:id' */}
        </Routes>
      </div>
    </div>
  );
}
