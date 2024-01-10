import React from "react";
import { MainContainer, SectionContainer, Heading } from "./Explore.styled";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SmallCard from "../SmallCard/SmallCard";
interface ExploreData {
  img: string;
  location: string;
  distance: string;
}

export default function Explore() {
  const fetchData = async () => {
    console.log("here 1");
    const response = await axios.get(
      "https://api.npoint.io/cf42e9b600d5b1b9a72d"
    );
    console.log("here2 ");
    return response.data;
  };

  const { isLoading, data, isError } = useQuery<ExploreData[]>({
    queryKey: ["data"],
    queryFn: fetchData,
  });

  return (
    <MainContainer>
      <SectionContainer>
        <Heading>Explore Nearby</Heading>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching data</p>}
        {data && (
          <div>
            {data.map((item) => (
              <SmallCard
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        )}
      </SectionContainer>
    </MainContainer>
  );
}
