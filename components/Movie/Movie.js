import styled from "styled-components";
import { useState } from "react";

const MovieWrapper = styled.div`
  background-color: #a8dadc;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const MovieTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const HeartIcon = styled.span`
  cursor: pointer;
  margin-left: 15px;
  margin-right: 10px;
  font-size: 20px;
  color: ${({ isFavorite }) => (isFavorite ? "red" : "gray")};
`;
const Movie = ({
  title,
  description,
  releaseYear,
  id,
  onAddToFavorites,
  isFavorite,
  onRemoveFromFavorites,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToFavorites = () => {
    onAddToFavorites(id);
  };

  const handleRemoveFromFavorites = () => {
    onRemoveFromFavorites(id);
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
        <HeartIcon
          isFavorite={isFavorite}
          onClick={
            isFavorite ? handleRemoveFromFavorites : handleAddToFavorites
          }
        >
          &#10084;
        </HeartIcon>
      </MovieWrapper>
      {showDetails && (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Release Year: {releaseYear}</p>
          <p>Movie ID : {id} </p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default Movie;
