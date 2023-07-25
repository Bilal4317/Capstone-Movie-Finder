import React from "react";
import styled from "styled-components";

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

const Movie = ({ title, description, releaseYear, id }) => {
  return (
    <MovieWrapper>
      <MovieTitle>{title}</MovieTitle>
      <MovieDescription>{description}</MovieDescription>
      <MovieReleaseYear>Release Year: {releaseYear}</MovieReleaseYear>
      <Id>Movie ID: {id}</Id>
    </MovieWrapper>
  );
};

export default Movie;
