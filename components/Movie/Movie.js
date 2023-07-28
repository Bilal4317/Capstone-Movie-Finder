import styled from "styled-components";
import { useState } from "react";

const MovieWrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const MovieTitle = styled.h2`
  font-size: 24px;

  color: #333;
`;

const MovieDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const MovieReleaseYear = styled.p`
  font-size: 14px;
  color: #777;
`;

const Id = styled.p`
  font-size: 14px;
  color: #777;
`;

const HeartIcon = styled.span`
  cursor: pointer;
  margin-left: 15px;
  margin right: 10px;
  font-size: 20px;
  color: ${({ isFavorite }) => (isFavorite ? "red" : "gray")};
`;

const Movie = ({ title, description, releaseYear, id, onAddToFavorites }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
    onAddToFavorites(id);
  };

  const handleMovieClick = () => {
    setShowDetails(true);
  };

  const handleCloseModal = () => {
    setShowDetails(false);
  };

  return (
    <>
      <MovieWrapper onClick={handleMovieClick}>
        <MovieTitle>{title}</MovieTitle>
        <MovieDescription>{description}</MovieDescription>
        <MovieReleaseYear>Release Year: {releaseYear}</MovieReleaseYear>
        <Id>Movie ID: {id}</Id>
      </MovieWrapper>
      {showDetails && (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Release Year: {releaseYear}</p>
          <p>Movie ID : {id} </p>
          <HeartIcon isFavorite={isFavorite} onClick={handleAddToFavorites}>
            &#10084;
          </HeartIcon>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default Movie;
