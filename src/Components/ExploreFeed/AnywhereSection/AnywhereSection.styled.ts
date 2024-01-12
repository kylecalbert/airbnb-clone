import styled from "styled-components";
export const SectionContainer = styled.section`
  background-color: green;
`;

export const Heading = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
`;
export const MediumCardGrid = styled.div`
  display: flex;
  gap: 1rem;
  overflow-y: scroll;
  padding: 1rem;
  margin-left: -1rem;
  margin-top: -1rem;

  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
