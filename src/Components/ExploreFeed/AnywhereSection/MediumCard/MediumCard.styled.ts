import styled from "styled-components";
export const MediumCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
export const CardImage = styled.img`
  //potentially resuable  (create a card image container)
  object-fit: cover;
  border-radius: 0.3rem;
  display: flex;
  position: relative;
  height: 16rem;
  width: 17rem;
  border-radius: 0.3rem;
`;
