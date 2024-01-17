import {
  LargeCardImage,
  LargeCardSection,
  Content,
  Title,
  Description,
  LargeCardButton,
} from "./LargeCard.styled";
interface LargeCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

export default function LargeCard({
  img,
  title,
  description,
  buttonText,
}: LargeCardProps) {
  return (
    <LargeCardSection>
      <LargeCardImage src={img} />

      <Content>
        <Title>{title}</Title>

        <Description>{description}</Description>
        <LargeCardButton>Get inspired</LargeCardButton>
      </Content>
    </LargeCardSection>
  );
}
