import styled from "styled-components";

interface LargeCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

export const LargeCardSection = styled.section`
  margin-top: 3rem;
  position: relative;
  cursor: pointer;
  padding-bottom: 4rem;
`;

export const LargeCardImage = styled.img`
  object-fit: cover;
  height: 24rem;
  width: 100%;
  max-width: 71.5rem;
  min-width: 12rem;
  border-radius: 0.7rem;
`;

const Title = styled.h3`
  font-size: 2rem;
  width: 12rem;
  margin-bottom: 1.125rem;
  /* background-color: red; */
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1rem;
`;
export const Content = styled.div`
  flex-direction: column;
  position: absolute;
  top: 4rem;
  left: 2rem;
`;

const LargeCardButton = styled.button`
  font-size: 0.8rem;
  height: 2rem;
  color: #fff;
  background-color: black;
  padding: 0.2rem 1rem;
  border-radius: 0.4rem;
`;
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
