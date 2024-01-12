import React from "react";
import styled from "styled-components";

interface MediumCardProps {
  img: string;
  title: string;
}

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
  object-fit: fill;
  border-radius: 0.3rem;
  display: flex;
  position: relative;
  height: 14rem;
  width: 13rem;
  border-radius: 0.3rem;
`;

// export const ImageContainer = styled.div`
//   display: flex;
//   position: relative;
//   height: 14rem;
//   width: 13rem;
//   border-radius: 0.3rem;
// `;

export default function MediumCard({ img, title }: MediumCardProps) {
  return (
    <MediumCardContainer>
      <CardImage src={img} />
      {title}
    </MediumCardContainer>
  );
}
