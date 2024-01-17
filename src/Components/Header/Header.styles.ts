import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
`;

export const LeftContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: auto 0;
`;
export const StyledImage = styled.img`
  width: 100%;
  max-width: 8rem;
  height: auto;
  object-fit: contain;
  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: 9999px;
  padding: 0.5rem 0;
  border: 2px solid transparent;

  /* background-color: BLUE; */
  @media (min-width: 768px) {
    border: 2px solid #ccc;
  }
`;

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

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-right: 0.5rem;
  /* background-color: yellow; */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const GlobeContainer = styled.div`
  display: flex;
  @media (max-width: 515px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  font-size: 1rem;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    font-size: 0.8rem;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  width: 4rem;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4rem;
  font-size: 1.5rem;
  color: gray;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
