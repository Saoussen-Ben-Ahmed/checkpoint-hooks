import React from "react";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div classeName="movie-card">
      <h2 className="movie-card h2">{title}</h2>
      <p className="movie-card p">{description}</p>
      <img className="movie-card img" src={posterURL} alt={title} />
      <p className="movie-card p">{rating}/10</p>
    </div>
  );
};

export default MovieCard;
