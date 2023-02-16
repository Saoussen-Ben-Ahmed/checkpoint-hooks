import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        placeholder="Poster URL"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
