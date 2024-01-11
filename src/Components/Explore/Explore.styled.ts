import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 16px;
  }
`;

export const SectionContainer = styled.section`
  padding-top: 0.2rem;
`;

export const Heading = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  padding-bottom: 1.25rem;
`;
export const SmallCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;