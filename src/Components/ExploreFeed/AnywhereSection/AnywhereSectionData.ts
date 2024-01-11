import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface AnywhereSectionData {
  img: string;
  title: string;
}

const AnywhereSectionData = () => {
  const fetchData = async () => {
    console.log("here 1");
    const response = await axios.get(
      "https://api.npoint.io/cf42e9b600d5b1b9a72d"
    );

    return response.data;
  };

  const { isLoading, data, isError } = useQuery<AnywhereSectionData[]>({
    queryKey: ["data"],
    queryFn: fetchData,
  });
  return { isLoading, data, isError };
};

export default AnywhereSectionData;
