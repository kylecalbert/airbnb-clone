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
  padding: 15px 10px;
  @media (max-width: 768px) {
    padding: 10px 5px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: GREEN;
`;

export const GlobeContainer = styled.div`
  display: flex;
  @media (max-width: 515px) {
    display: none;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  object-fit: contain;
  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 10px;
  background-color: BLUE;
`;

export const StyledInput = styled.input`
  padding: 10px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 30px;
  outline: none;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
    height: 0.5rem;
    width: rem;
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

export const TextContainer = styled.div`
  font-size: 1rem;
  @media (max-width: 515px) {
    display: none;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin-right: 10px;
  background-color: yellow;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const MenuIcon = styled.div`
  display: flex;
  width: 4rem;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4rem;
  margin-right: 3px;
  font-size: 1.5rem;
  color: gray;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
