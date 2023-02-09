import React, { useState, useEffect } from "react";

const Filter = ({ movies, setFilteredMovies }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    setFilteredMovies(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
          movie.rating >= ratingFilter
      )
    );
  }, [movies, titleFilter, ratingFilter]);

  return (
    <div className="filter">
      <input
        type="text"
        className="filter__input"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        placeholder="Filter by title"
      />
      <input
        className="filter__input"
        type="number"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
        placeholder="Filter by minimum rating"
      />
    </div>
  );
};

export default Filter;
