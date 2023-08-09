import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  margin-top: 20px;
`;

const ProfileTitle = styled.h3`
  margin: 0;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const UserProfile = ({ user, onRemoveFromFavorites }) => {
  const handleRemoveFromFavorites = (movieId) => {
    onRemoveFromFavorites(movieId);
  };

  return (
    <ProfileContainer>
      <ProfileTitle>Welcome Dear - {user.username}</ProfileTitle>
    </ProfileContainer>
  );
};

export default UserProfile;
