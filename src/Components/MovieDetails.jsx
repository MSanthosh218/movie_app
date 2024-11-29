import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

  const [movie, setmovie] = useState(null)
  console.log(movie)
  const { id } = useParams();
   useEffect(() => {
    const fetchMovieDetails = async()=>{
      if (!id) return;
      try{
        const api = `https://www.omdbapi.com/?i=${id}&apikey=7271c3f9`;
        const res = await axios.get(api)
        setmovie(res.data)

      }
      catch(error){
        console.error("something  wrong",error)
      }

      
    };
    fetchMovieDetails()
   }, [id])
   if (!movie) {
    return <div>................loading.....................</div>
   }
   

 
  
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
     <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
    </div>
  )
}

export default MovieDetails





