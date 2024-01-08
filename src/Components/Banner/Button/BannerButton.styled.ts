import styled from "styled-components";

export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b46c1;
  background-color: #ffffff;
  padding: 12px 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  font-weight: bold;
  width: 5rem;
  height: 1.3rem;
  font-size: 0.7rem;
  transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;

  @media (min-width: 768px) {
    height: 2rem;
    width: 6rem;
    font-size: 1rem;
  }

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;
