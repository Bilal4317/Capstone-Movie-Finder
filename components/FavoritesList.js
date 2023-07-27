import React, { useState } from "react";
import styled from "styled-components";
import MovieDetails from "./MovieDetails.js";

const ListContainer = styled.div`
  margin-top: 20px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const MovieTitle = styled.h3`
  margin: 0;
`;

const FavoritesList = ({ favorites }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <ListContainer>
      <h2>Favorites List</h2>
      {favorites.length > 0 ? (
        favorites.map((movie) => (
          <ListItem key={movie.id} onClick={() => handleMovieClick(movie)}>
            <MovieTitle>{movie.title}</MovieTitle>
          </ListItem>
        ))
      ) : (
        <p>No movies added to favorites yet.</p>
      )}

      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </ListContainer>
  );
};

export default FavoritesList;
