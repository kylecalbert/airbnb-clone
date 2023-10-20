import React from "react";

import { StyledImage, LeftContainer, StyledHeader } from "./Header.styles";
export const Header = () => {
  return (
    <StyledHeader>
      <LeftContainer>
        <StyledImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" />
      </LeftContainer>
    </StyledHeader>
  );
};
