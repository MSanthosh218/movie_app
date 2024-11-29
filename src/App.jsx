
import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import axios from "axios";
import Header from './Components/Header';
import MovielistName from './Components/MovielistName';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';

function App() {
  const [Searchval, setSearchval] = useState("");   
  const [Movies, setMovies] = useState([]);

  const getmovie = async (Searchval) => {
    try {
      const api = `https://www.omdbapi.com/?s=${Searchval}&apikey=7271c3f9`;
      const res = await axios.get(api);
      const resJson = await res.data;

      if (resJson.Search) {
        setMovies(resJson.Search);
      } else {
        const api2 = "https://www.omdbapi.com/?i=tt3896198&apikey=7271c3f9";
        const defaultRes = await axios.get(api2);
        const defaultData = defaultRes.data ? [defaultRes.data] : [];
        setMovies(defaultData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMovies([]);
    }
  };

  useEffect(() => {
    getmovie(Searchval);
  }, [Searchval]);

  return (
    <>
      <div>
        <Header searchval={Searchval} setsearchval={setSearchval} />
      </div>
      <div className='mb-3 ml-7 text-xl underline underline-offset-8 font-semibold flex'>
        <MovielistName heading="Movies" />
      </div>
      <div className='flex-grow mb-20'>
        <Routes>
          <Route path='/' element={<MovieList movies={Movies} />} />
          <Route path='/moviedetails/:id' element={<MovieDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
