import styled from "styled-components";
export const DateRangeContainer = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: span 3;
  margin-top: 1rem;
  @media (max-width: 768px) {
    width: 40%;
  }
`;
