import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { HiUsers } from "react-icons/hi";

import {
  DateRangeContainer,
  GuestIcon,
  GuestSectionContainer,
  StyledInput,
  StyledFlexContainer,
  StyledHeading,
} from "./DateSelection.styled";

const DateSelection: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

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
          <StyledInput type="number" placeholder="Enter guests" />
          <GuestIcon>
            <HiUsers />
          </GuestIcon>
        </StyledFlexContainer>
      </GuestSectionContainer>
    </DateRangeContainer>
  );
};

export default DateSelection;
