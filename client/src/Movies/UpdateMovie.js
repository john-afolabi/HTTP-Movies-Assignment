import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

export default function UpdateMovie() {
  const titleRef = useRef();
  const directorRef = useRef();
  const metascoreRef = useRef();
  const starsRef = useRef();

  const [movieData, setMoviedata] = useState({});

  const getMovieData = () => {};

  //   const updatePayload = {
  //     id: movie.id,
  //     title: titleRef.current.value,
  //     director: directorRef.current.value,
  //     metascore: metascoreRef.current.value,
  //     stars: starsRef.current.value.split("|")
  //   };

  return (
    <form>
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" ref={titleRef} />
      <br />
      <label htmlFor="title">Director: </label>
      <input type="text" id="director" ref={directorRef} />
      <br />
      <label htmlFor="title">Metascore: </label>
      <input type="number" id="metascore" ref={metascoreRef} />
      <br />
      <label htmlFor="title">Stars: </label>
      <input type="stars" id="stars" ref={starsRef} />
      <br />
      <button>Update Movie</button>
    </form>
  );
}