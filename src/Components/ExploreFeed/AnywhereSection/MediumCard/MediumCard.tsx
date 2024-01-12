import styled from "styled-components";
import { MediumCardContainer, CardImage } from "./MediumCard.styled";
interface MediumCardProps {
  img: string;
  title: string;
}

export default function MediumCard({ img, title }: MediumCardProps) {
  return (
    <MediumCardContainer>
      <CardImage src={img} />
      {title}
    </MediumCardContainer>
  );
}
