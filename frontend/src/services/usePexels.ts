import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PexelsApiResponse } from "../types";

export const usePexels = (query: string) =>
  useQuery({
    queryKey: ["pexels", query],
    queryFn: async () => {
      const { data } = await axios.get<PexelsApiResponse>(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=80`,
        {
          headers: {
            Authorization: "",
          },
        },
      );
      return data;
    },
  });
