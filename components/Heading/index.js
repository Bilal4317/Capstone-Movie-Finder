import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const TitleText = styled.h1`
  font-size: 32px;
  color: #333;
`;

const Heading = () => {
  return (
    <TitleWrapper>
      <TitleText>Welcome to Movie App</TitleText>
    </TitleWrapper>
  );
};

export default Heading;
