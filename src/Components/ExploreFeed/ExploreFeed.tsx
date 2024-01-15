import { MainContainer } from "./ExploreFeed.styled";
import NearbySection from "./NearbySection/NearbySection";
import AnywhereSection from "./AnywhereSection/AnywhereSection";
import LargeCard from "../LargeCard/LargeCard";
const ExploreFeed = () => {
  return (
    <MainContainer>
      <NearbySection />
      <AnywhereSection />
      <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Aribnb"
        buttonText="Get Inpsired"
      />
    </MainContainer>
  );
};

export default ExploreFeed;
