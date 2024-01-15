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

export const BannerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 40%;
  width: 100%;

  align-items: center;
  /* background-color: red; */
`;

export const BannerText = styled.p`
  font-size: 1rem;
  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;
