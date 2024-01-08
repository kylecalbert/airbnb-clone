import React from "react";
import styled from "styled-components";
import BannerImage from "../Image/Image";
import { BannerContainer, BannerInfo } from "./Banner.styled";
// import { TextContainer } from "./Banner.styled";
import { BannerText } from "./Banner.styled";
import { BannerButton } from "./Button/BannerButton";
const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerImage />
      <BannerInfo>
        <BannerText>Not sure where to go? Perfect.</BannerText>
        <BannerButton />
      </BannerInfo>
    </BannerContainer>
  );
};

export default Banner;
