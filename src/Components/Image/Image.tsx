import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerImage: React.FC = () => {
  return <Image src="https://links.papareact.com/0fm" alt="Banner Image" />;
};

export default BannerImage;
