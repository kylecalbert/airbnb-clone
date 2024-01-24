import styled from "styled-components";
export const BannerContainer = styled.div`
  position: relative;
  height: 18.75rem;
  background-color: blue;
  width: 100%;
  @media (min-width: 640px) {
    height: 25rem;
  }
  @media (min-width: 1024px) {
    height: 31.25rem;
  }
  @media (min-width: 1280px) {
    height: 37.5rem;
  }
`;

export const BannerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 40%;
  width: 100%;
  align-items: center;
`;
export const BannerText = styled.p`
  font-size: 1rem;
  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;
