import React from "react";
interface MediumCardProps {
  img: string;
  title: string;
}

import styled from "styled-components";

export const MediumCardContainer = styled.div`
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
export const CardImage = styled.img`
  object-fit: fill;
  border-radius: 0.3rem;
`;

export default function MediumCard({ img, title }: MediumCardProps) {
  return <MediumCardContainer></MediumCardContainer>;
}
