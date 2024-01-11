import React from "react";

import {
  SectionContainer,
  Heading,
  SmallCardGrid,
} from "./NearbySection.styled";
import NearbySectionData from "./NearybySectionData";
import SmallCard from "./SmallCard/SmallCard";
export default function NearbySection() {
  const { isLoading, data, isError } = NearbySectionData();

  return (
    <SectionContainer>
      <Heading>Explore Nearby</Heading>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {data && (
        <SmallCardGrid>
          {data.map((item: NearbySectionData) => (
            <SmallCard
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </SmallCardGrid>
      )}
    </SectionContainer>
  );
}
