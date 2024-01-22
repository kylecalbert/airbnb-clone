import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

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
  DateRangeContainer,
} from "./Header.styles";
export const Header = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <StyledHeader>
      <LeftContainer>
        <StyledImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" />
      </LeftContainer>

      <MiddleContainer>
        <StyledInput
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
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

      {searchInput && (
        <DateRangeContainer>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
        </DateRangeContainer>
      )}
    </StyledHeader>
  );
};
