import Head from "next/head";
import GlobalStyle from "../styles";

const MovieDetails = ({ movie, onClose }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <p>Release Year: {movie.releaseYear}</p>
        <p>Movie ID : {movie.id}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
};

export default MovieDetails;
