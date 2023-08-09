import { useState, useEffect } from "react";
import GlobalStyle from "../styles";
import styled from "styled-components";
import Head from "next/head";
import Movie from "../components/Movie/Movie";
import Heading from "../components/Heading";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import SearchInput from "../components/SearchInput/SearchInput";
import SortingOptions from "../components/SortingOptions/SortingOptions";
import UserProfile from "../components/UserProfile/UserProfile";
import LoginForm from "../components/LoginForm/LoginForm";
import Movies from "../components/MovieList/MovieList";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(to right, #6a82fb, #fc5c7d);
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;
const FavoritesWrapper = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const FavoritesHeading = styled.h2`
  margin-bottom: 10px;
`;

const FavoritesContainer = styled.div`
  margin-top: 20px;
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const initialUser = {
  username: "",
  password: "",
  favorites: [],
};

export default function App({ Component, pageProps }) {
  const [filteredMovies, setFilteredMovies] = useState(Movies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState("title");
  const [favorites, setFavorites] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (savedUsers.length > 0) {
      setUsers(savedUsers);
    }

    const savedCurrentUser = JSON.parse(
      localStorage.getItem("currentUser") || "{}"
    );
    if (savedCurrentUser.username) {
      setCurrentUser(savedCurrentUser);
    }

    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (savedFavorites.length > 0) {
      setFavorites(savedFavorites);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));

    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      localStorage.setItem("favorites", JSON.stringify(currentUser.favorites));
    }
  }, [users, currentUser]);

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
    if (!currentUser) {
      return;
    }
    const movieToAdd = Movies.find((movie) => movie.id === movieId);

    if (!currentUser.favorites.some((movie) => movie.id === movieToAdd.id)) {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        favorites: [...prevUser.favorites, movieToAdd],
      }));
    } else {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        favorites: prevUser.favorites.filter((movie) => movie.id !== movieId),
      }));
    }

    setFilteredMovies((prevFilteredMovies) =>
      prevFilteredMovies.map((movie) =>
        movie.id === movieId
          ? { ...movie, isFavorite: !movie.isFavorite }
          : movie
      )
    );

    localStorage.setItem("favorites", JSON.stringify(currentUser.favorites));
  };

  const handleRemoveFromFavorites = (movieId) => {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      favorites: prevUser.favorites.filter((movie) => movie.id !== movieId),
    }));

    setFilteredMovies((prevFilteredMovies) =>
      prevFilteredMovies.map((movie) =>
        movie.id === movieId ? { ...movie, isFavorite: false } : movie
      )
    );

    localStorage.setItem("favorites", JSON.stringify(currentUser.favorites));
  };

  const handleLogin = (username, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    const existingUser = savedUsers.find((user) => user.username === username);

    if (existingUser) {
      if (existingUser.password === password) {
        setCurrentUser(existingUser);

        const savedFavorites = JSON.parse(localStorage.getItem("favorites"));

        setCurrentUser((prevUser) => ({
          ...prevUser,
          favorites: savedFavorites,
        }));
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert("User not found");
    }
  };
  const handleRegister = (username, password) => {
    try {
      if (!username || !password) {
        throw new Error("Username and password are required.");
      }

      const isUsernameTaken = users.some((user) => user.username === username);
      if (isUsernameTaken) {
        throw new Error("Username is already taken.");
      }

      const newUser = {
        username,
        password,
        favorites: [],
      };

      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return updatedUsers;
      });

      setCurrentUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      localStorage.setItem("favorites", JSON.stringify(newUser.favorites));

      alert("Registration successful!");
    } catch (error) {
      alert("Registration failed: " + error.message);
      console.error("Registration error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.setItem("favorites", JSON.stringify(currentUser.favorites));
    setCurrentUser(null);
    setFavorites([]);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Movie Finder</title>
      </Head>
      <Heading />
      <AppContainer>
        <SearchInput onChange={handleSearch} />
        <AppWrapper>
          <div>
            <SortingOptions onChange={handleSortChange} />

            {currentMovies.length > 0 ? (
              currentMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  description={movie.description}
                  releaseYear={movie.releaseYear}
                  onClick={() => handleMovieClick(movie.id)}
                  onAddToFavorites={handleAddToFavorites}
                  isFavorite={
                    currentUser &&
                    currentUser.favorites.some(
                      (favMovie) => favMovie.id === movie.id
                    )
                  }
                  onRemoveFromFavorites={handleRemoveFromFavorites}
                />
              ))
            ) : (
              <p>No matching movies found.</p>
            )}

            {selectedMovie && (
              <MovieDetail movie={selectedMovie} onClose={handleCloseModal} />
            )}
            <PaginationWrapper>
              {Array(Math.ceil(filteredMovies.length / moviesPerPage))
                .fill()
                .map((_, i) => (
                  <PageButton key={i} onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </PageButton>
                ))}
            </PaginationWrapper>
          </div>

          <FavoritesWrapper>
            <FavoritesHeading>Favorites List</FavoritesHeading>

            {currentUser && currentUser.favorites.length > 0 ? (
              <FavoritesContainer>
                {currentUser.favorites.map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    description={movie.description}
                    releaseYear={movie.releaseYear}
                    onRemoveFromFavorites={handleRemoveFromFavorites}
                    isFavorite
                  />
                ))}
              </FavoritesContainer>
            ) : (
              <p>No movies added to favorites yet.</p>
            )}
          </FavoritesWrapper>
        </AppWrapper>
        <LoginWrapper>
          {!currentUser ? (
            <LoginForm onLogin={handleLogin} onRegister={handleRegister} />
          ) : (
            <>
              <UserProfile
                user={currentUser}
                favorites={currentUser.favorites}
                onRemoveFromFavorites={handleRemoveFromFavorites}
              />
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </LoginWrapper>
      </AppContainer>
    </>
  );
}
