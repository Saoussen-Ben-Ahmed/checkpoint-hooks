import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card-container">
          <MovieCard
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            rating={movie.rating}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
