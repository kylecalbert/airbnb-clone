import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  grid-template-columns: 3;
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
  width: 10%;
  height: 10%;
  @media (max-width: 768px) {
    width: 20%;
    height: 20%;
  }
`;
