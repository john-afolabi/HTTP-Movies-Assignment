import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateMovie({ history, location }) {
  const [movieForm, setMovieForm] = useState({
    id: null,
    title: "",
    director: "",
    metascore: null,
    stars: ""
  });

  useEffect(() => {
    setMovieForm({
      id: location.state.movie.id,
      title: location.state.movie.title,
      director: location.state.movie.director,
      metascore: location.state.movie.metascore,
      stars: location.state.movie.stars.join(" | ")
    });
  }, []);

  const handleChange = event => {
    setMovieForm({
      ...movieForm,
      [event.target.id]: event.target.value
    });
    console.log(movieForm);
  };

  const updatePayload = {
    ...movieForm,
    stars: movieForm.stars.split(" | ")
  };

  const updateMovie = () => {
    axios
      .put(`http://localhost:5000/api/movies/${movieForm.id}`, updatePayload)
      .then(res => {
        debugger;

        history.push(`/movies/${movieForm.id}`);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <form>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        value={movieForm.title}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="title">Director: </label>
      <input
        type="text"
        id="director"
        value={movieForm.director}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="title">Metascore: </label>
      <input
        type="number"
        id="metascore"
        value={movieForm.metascore}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="title">Stars: </label>
      <input
        type="stars"
        id="stars"
        value={movieForm.stars}
        onChange={handleChange}
      />
      <br />
      <button
        onClick={e => {
          e.preventDefault();
          return updateMovie();
        }}
      >
        Update Movie
      </button>
    </form>
  );
}
