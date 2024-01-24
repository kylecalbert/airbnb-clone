import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledInput, StyledSearchIcon } from "./SearchComponent.styled";

interface SearchComponentProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  searchInput,
  setSearchInput,
}) => {
  return (
    <>
      <StyledInput
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <StyledSearchIcon>
        <AiOutlineSearch style={{ color: "white", width: 20, height: 20 }} />
      </StyledSearchIcon>
    </>
  );
};

export default SearchComponent;
