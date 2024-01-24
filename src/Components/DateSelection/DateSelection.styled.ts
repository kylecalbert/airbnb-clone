import styled from "styled-components";

export const DateRangeContainer = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: span 3;
  margin-top: 1rem;
  /* width: 20%; */

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    padding: 1rem;
  }
`;

export const GuestSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
  width: 100%;
`;

export const GuestIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  & > svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  outline: none;
  border: none;
  color: red;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    margin-top: 0.2rem;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeading = styled.h2`
  font-size: 1.5rem;
  flex-grow: 1;
  font-weight: bold;
  margin-right: 0.5rem;
`;
