import React from "react";

import {
  SectionContainer,
  Heading,
  MediumCardGrid,
} from "./AnywhereSection.styled";

import MediumCard from "./MediumCard/MediumCard";

import AnywhereSectionData from "./AnywhereSectionData";
export default function AnywhereSection() {
  const { isLoading, data, isError } = AnywhereSectionData();

  return (
    <SectionContainer>
      <Heading>Live Anywhere</Heading>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {data && (
        <MediumCardGrid>
          {data.map((item: AnywhereSectionData) => (
            <MediumCard img={item.img} title={item.title} />
          ))}
        </MediumCardGrid>
      )}
    </SectionContainer>
  );
}
