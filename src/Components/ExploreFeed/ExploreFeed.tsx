import { MainContainer } from "./ExploreFeed.styled";
import NearbySection from "./NearbySection/NearbySection";
import AnywhereSection from "./AnywhereSection/AnywhereSection";
const ExploreFeed = () => {
  return (
    <MainContainer>
      <NearbySection />
      <AnywhereSection />
    </MainContainer>
  );
};

export default ExploreFeed;
