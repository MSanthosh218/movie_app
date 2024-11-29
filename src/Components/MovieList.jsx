import React from 'react';
// import MovieDetails from './MovieDetails';
import {  useNavigate } from 'react-router-dom';

const MovieList = (props) => {
  const navigate = useNavigate()
  
  const handleMovieDetails = (movieId) => {
    // props.setmovieId(movieId)
    navigate(`/moviedetails/${movieId}`);

  }
  // console.log(props)
  return (

    <>
    
    <div className="w-full px-4 sm:px-6 lg:px-8 overflow-x-auto">
     <div className="flex flex-nowrap gap-4">
      {props.movies.map((movie) => (
        <div key={movie.imdbID}
         className="flex-shrink-0 w-64 hover:scale-110 "
         onClick={() => handleMovieDetails(movie.imdbID)}>
          <img  src={movie.Poster} alt={movie.Title} className="w-full h-96" />
        </div>
        ))}
     </div>
    </div>
    </>
  );
};

export default MovieList;






