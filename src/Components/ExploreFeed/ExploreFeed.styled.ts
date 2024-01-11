import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 2rem;
  background-color: blue;

  @media (max-width: 768px) {
    padding-left: 16px;
  }
`;

export const SectionContainer = styled.section`
  padding-top: 0.2rem;
`;
