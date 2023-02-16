import React, { useState } from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 7,
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 6,
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 10,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <Filter movies={movies} setFilteredMovies={setFilteredMovies} />
      <MovieList movies={filteredMovies} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
};

export default App;
