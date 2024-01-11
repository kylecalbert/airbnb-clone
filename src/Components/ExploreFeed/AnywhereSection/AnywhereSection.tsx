import React from "react";

import {
  SectionContainer,
  Heading,
  SmallCardGrid,
} from "./AnywhereSection.styled";
import AnywhereSectionData from "./AnywhereSectionData";
import MediumCard from "./MediumCard/MediumCard";
export default function NearbySection() {
  const { isLoading, data, isError } = AnywhereSectionData();

  return (
    <SectionContainer>
      <Heading>Explore Nearby</Heading>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {data && (
        <SmallCardGrid>
          {data.map((item: AnywhereSectionData) => (
            <MediumCard img={item.img} title={item.title} />
          ))}
        </SmallCardGrid>
      )}
    </SectionContainer>
  );
}
