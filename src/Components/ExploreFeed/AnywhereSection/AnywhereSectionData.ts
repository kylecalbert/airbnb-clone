import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface AnywhereSectionData {
  img: string;
  title: string;
}

const AnywhereSectionData = () => {
  const fetchData = async () => {
    const response = await axios.get(
      "https://api.npoint.io/c0e0092ff729463d0176"
    );

    return response.data;
  };

  const { isLoading, data, isError } = useQuery<AnywhereSectionData[]>({
    queryKey: ["data2"],
    queryFn: fetchData,
  });
  return { isLoading, data, isError };
};

export default AnywhereSectionData;
