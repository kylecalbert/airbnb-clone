import styled from "styled-components";
export const BannerContainer = styled.div`
  position: relative;
  height: 300px;
  @media (min-width: 640px) {
    height: 400px;
  }
  @media (min-width: 1024px) {
    height: 500px;
  }
  @media (min-width: 1280px) {
    height: 600px;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
`;

export const BannerText = styled.p`
  font-size: 1rem;
  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;
