import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledInput, StyledSearchIcon } from "./SearchComponent.styled";

import { useSearchContext } from "../SearchContext/SearchContext";

const SearchComponent: React.FC = () => {
  const { searchInput, setSearchInput } = useSearchContext();

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
