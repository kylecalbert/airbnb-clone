import {
  MainContainer,
  SectionContainer,
  Heading,
  SmallCardGrid,
} from "./Explore.styled";
import SmallCard from "./SmallCard/SmallCard";
import ExploreData from "./ExoloreData";

const Explore = () => {
  const { isLoading, data, isError } = ExploreData();

  return (
    <MainContainer>
      <SectionContainer>
        <Heading>Explore Nearby</Heading>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching data</p>}
        {data && (
          <SmallCardGrid>
            {data.map((item: ExploreData) => (
              <SmallCard
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </SmallCardGrid>
        )}
      </SectionContainer>
    </MainContainer>
  );
};

export default Explore;
