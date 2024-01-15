import {
  RightContainer,
  LeftContainer,
  LocationText,
  DistanceText,
  SmallCardContainer,
  CardImage,
} from "./SmallCard.styled";
interface SmallCardProps {
  img: string;
  location: string;
  distance: string;
}

export default function SmallCard({ img, location, distance }: SmallCardProps) {
  return (
    <SmallCardContainer>
      <LeftContainer>
        <CardImage src={img} />
      </LeftContainer>
      <RightContainer>
        <LocationText>{location}</LocationText>
        <DistanceText>{distance}</DistanceText>
      </RightContainer>
    </SmallCardContainer>
  );
}
