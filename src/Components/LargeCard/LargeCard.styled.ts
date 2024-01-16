import styled from "styled-components";
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

export const Title = styled.h3`
  font-size: 2rem;
  width: 12rem;
  margin-bottom: 1.125rem;
  /* background-color: red; */
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1rem;
`;
export const Content = styled.div`
  flex-direction: column;
  position: absolute;
  top: 4rem;
  left: 2rem;
`;

export const LargeCardButton = styled.button`
  font-size: 0.8rem;
  height: 2rem;
  color: #fff;
  background-color: black;
  padding: 0.2rem 1rem;
  border-radius: 0.4rem;
`;
