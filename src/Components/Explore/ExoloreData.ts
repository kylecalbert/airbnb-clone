import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface ExploreData {
  img: string;
  location: string;
  distance: string;
}

const ExploreData = () => {
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
  return { isLoading, data, isError };
};

export default ExploreData;
