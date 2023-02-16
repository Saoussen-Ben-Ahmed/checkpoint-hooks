import React from "react";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={posterURL} alt={title} />
      <p>{rating}/10</p>
    </div>
  );
};

export default MovieCard;
