import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 1rem;
  background: white;
  flex: 1;
  border-radius: 30px;
  outline: none;
  border: none;

  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
    height: 0.5rem;
    border: 2px solid #ccc;
  }
`;

export const StyledSearchIcon = styled.div`
  background-color: #ff5252;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 0.5rem;
  width: 2rem;
  height: 2rem;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    margin: 0 0.6rem;
  }
`;
