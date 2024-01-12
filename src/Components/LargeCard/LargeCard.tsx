import React from "react";
import styled from "styled-components";

interface LargeCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

export const LargeCardSection = styled.section`
  margin-top: 3rem;
`;

export const LargeCardImage = styled.img`
  object-fit: cover;
  height: 24rem;
  width: 100%;
  max-width: 71.5rem;
  border-radius: 0.3rem;
`;

export const LargeCardImageContainer = styled.div``;

export default function LargeCard({
  img,
  title,
  description,
  buttonText,
}: LargeCardProps) {
  return (
    <LargeCardSection>
      <LargeCardImage src={img} />
    </LargeCardSection>
  );
}
