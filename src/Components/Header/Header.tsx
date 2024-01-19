import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

import {
  StyledImage,
  LeftContainer,
  StyledHeader,
  MiddleContainer,
  StyledInput,
  StyledSearchIcon,
  RightContainer,
  TextContainer,
  MenuIcon,
  GlobeContainer,
} from "./Header.styles";
export const Header = () => {
  return (
    <StyledHeader>
      <LeftContainer>
        <StyledImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" />
      </LeftContainer>

      <MiddleContainer>
        <StyledInput />
        <StyledSearchIcon>
          <AiOutlineSearch style={{ color: "white", width: 20, height: 20 }} />
        </StyledSearchIcon>
      </MiddleContainer>

      <RightContainer>
        <TextContainer>Become a host</TextContainer>

        <BsGlobe />

        <MenuIcon>
          <RxHamburgerMenu />
          <FaUserCircle />
        </MenuIcon>
      </RightContainer>
    </StyledHeader>
  );
};
