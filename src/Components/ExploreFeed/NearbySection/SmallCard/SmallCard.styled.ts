import styled from "styled-components";
export const SmallCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 4rem;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  position: relative;
  height: 5rem;
  width: 2rem;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardImage = styled.img`
  object-fit: fill;
  border-radius: 0.3rem;
`;

export const LocationText = styled.h3`
  font-weight: normal;
  margin: 0;
`;

export const DistanceText = styled.h3`
  font-weight: normal;
  margin: 0;
  margin-top: 0.5rem;
  color: #718096;
`;
