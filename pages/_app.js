import { useState } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";
import Movie from "../components/Movie";
import Heading from "../components/Heading";
import MovieDetails from "../components/MovieDetails.js";
import SearchInput from "../components/SearchInput.js";
import SortingOptions from "../components/SortingOptions.js";
import FavoritesList from "../components/FavoritesList.js";

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
  {
    id: 7,
    title: "Batman",
    description: "This is the description of Batman.",
    releaseYear: 2006,
  },
];

export default function App({ Component, pageProps }) {
  const [filteredMovies, setFilteredMovies] = useState(Movies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState("title");
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (query) => {
    const filtered = Movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleMovieClick = (movieId) => {
    const selected = Movies.find((movie) => movie.id === movieId);
    setSelectedMovie(selected);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    sortMovies(sortOption);
  };

  const sortMovies = (sortOption) => {
    const sorted = [...filteredMovies];
    sorted.sort((a, b) => {
      if (sortOption === "releaseYear") {
        return a.releaseYear - b.releaseYear;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
    setFilteredMovies(sorted);
  };

  const handleAddToFavorites = (movieId) => {
    const movieToAdd = Movies.find((movie) => movie.id === movieId);
    if (!favorites.some((movie) => movie.id === movieToAdd.id)) {
      setFavorites([...favorites, movieToAdd]);
    } else {
      const updatedFavorites = favorites.filter(
        (movie) => movie.id !== movieId
      );
      setFavorites(updatedFavorites);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Movie Finder</title>
      </Head>
      <Heading />
      <SearchInput onChange={handleSearch} />
      <SortingOptions onChange={handleSortChange} />

      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.description}
            releaseYear={movie.releaseYear}
            onClick={() => handleMovieClick(movie.id)}
            onAddToFavorites={() => handleAddToFavorites(movie.id)}
            isFavorite={favorites.some((favMovie) => favMovie.id === movie.id)}
          />
        ))
      ) : (
        <p>No matching movies found.</p>
      )}

      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={handleCloseModal} />
      )}

      <FavoritesList favorites={favorites} />
    </>
  );
}
