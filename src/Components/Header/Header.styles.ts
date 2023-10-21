import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  background: red;
  top: 0;
  z-index: 50;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 15px 0 15px 10px;
  @media (max-width: 768px) {
    padding: 10px 0 10px 5px;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const StyledImage = styled.img`
  display: flex;
  width: 50%;
  height: 50%;
  object-position: left;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 60%;
    height: 60%;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  position: relative;
  /* background-color: blue; */
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 10px;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 30px;
  outline: none;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledSearchIcon = styled.div`
  background-color: #ff5252;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 10px;
  width: 30px;
  height: 30px;
`;
