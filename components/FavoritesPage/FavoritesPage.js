import React from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import UserProfile from "../../components/UserProfile/UserProfile";

const FavoritesPage = ({ user, favorites, onRemoveFromFavorites }) => {
  return (
    <>
      <UserProfile
        user={user}
        favorites={favorites}
        onRemoveFromFavorites={onRemoveFromFavorites}
      />
      <FavoritesList
        favorites={favorites}
        onRemoveFromFavorites={onRemoveFromFavorites}
      />
    </>
  );
};

export default FavoritesPage;
