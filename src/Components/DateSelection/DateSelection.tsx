import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { HiUsers } from "react-icons/hi";
import { useSearchContext } from "../SearchContext/SearchContext";
import {
  DateRangeContainer,
  GuestIcon,
  GuestSectionContainer,
  StyledInput,
  StyledFlexContainer,
  StyledHeading,
  SearchCancelContainer,
  SearchButton,
  CancelButton,
} from "./DateSelection.styled";

const DateSelection: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [noOfGuests, setNoOfGuests] = useState<number>(1);
  const { setSearchInput } = useSearchContext();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <DateRangeContainer>
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#FD5B61"]}
        onChange={handleSelect}
      />
      <GuestSectionContainer>
        <StyledFlexContainer>
          <StyledHeading>Number of Guests</StyledHeading>
          <StyledInput
            value={noOfGuests}
            onChange={(e) => setNoOfGuests(Number(e.target.value) || 0)}
            placeholder="Enter guests"
            type="number"
            min={1}
          />
          <GuestIcon>
            <HiUsers />
          </GuestIcon>
        </StyledFlexContainer>
      </GuestSectionContainer>
      <SearchCancelContainer>
        <SearchButton>Search</SearchButton>
        <CancelButton onClick={resetInput}>Cancel</CancelButton>
      </SearchCancelContainer>
    </DateRangeContainer>
  );
};

export default DateSelection;
