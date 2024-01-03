import React from "react";
import styled from "styled-components";
import BannerImage from "../Image/Image";
import { BannerContainer } from "./Banner.styled";
import { TextContainer } from "./Banner.styled";
import { BannerText } from "./Banner.styled";
const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerImage />
      <TextContainer>
        <BannerText>Not sure where to go? Perfect.</BannerText>
      </TextContainer>
    </BannerContainer>
  );
};

export default Banner;
