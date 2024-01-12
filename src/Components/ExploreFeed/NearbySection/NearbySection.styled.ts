import styled from "styled-components";
export const SectionContainer = styled.section``;

export const Heading = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
`;
export const SmallCardGrid = styled.div`
  display: grid;
  margin-top: -1rem;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
