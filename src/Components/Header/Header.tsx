import React, { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import DateSelection from "../DateSelection/DateSelection";
import SearchComponent from "../SearchComponent/SearchComponent";
import {
  StyledImage,
  LeftContainer,
  StyledHeader,
  MiddleContainer,
  RightContainer,
  TextContainer,
  MenuIcon,
} from "./Header.styles";

export const Header: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <StyledHeader>
      <LeftContainer>
        <StyledImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" />
      </LeftContainer>

      <MiddleContainer>
        <SearchComponent
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </MiddleContainer>

      <RightContainer>
        <TextContainer>Become a host</TextContainer>

        <BsGlobe />

        <MenuIcon>
          <RxHamburgerMenu />
          <FaUserCircle />
        </MenuIcon>
      </RightContainer>

      {searchInput && <DateSelection />}
    </StyledHeader>
  );
};
