import { useState } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";
import Movie from "../components/Movie";
import Heading from "../components/Heading";
import MovieDetails from "../components/Moviedetails.js";

const Movies = [
  {
    id: 1,
    title: "Spiderman",
    description: "This is the description of spiderman .",
    releaseYear: 2005,
  },
  {
    id: 2,
    title: "Spiderman 2",
    description: "This is the description of spiderman 2.",
    releaseYear: 2008,
  },
  {
    id: 3,
    title: "Spiderman 3",
    description: "This is the description of spiderman 3 .",
    releaseYear: 2011,
  },
  {
    id: 4,
    title: "Spiderman 4",
    description: "This is the description of spiderman 4 .",
    releaseYear: 2013,
  },
  {
    id: 5,
    title: "Spiderman 5",
    description: "This is the description of spiderman 5.",
    releaseYear: 2017,
  },
  {
    id: 6,
    title: "Spiderman 6",
    description: "This is the description of spiderman 6 .",
    releaseYear: 2020,
  },
];

export default function App({ Component, pageProps }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (id) => {
    const movie = Movies.find((movie) => movie.id === id);
    setSelectedMovie(movie);
  };
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Movie Finder</title>
      </Head>
      <Heading />

      {Movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          description={movie.description}
          releaseYear={movie.releaseYear}
          onClick={() => handleMovieClick(movie.id)}
        />
      ))}
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </>
  );
}
