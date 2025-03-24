import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PexelsApiResponse } from "../types";
import { ENV } from "../env";

export const usePexels = (query: string) =>
  useQuery({
    queryKey: ["pexels", query],
    queryFn: async () => {
      const { data } = await axios.get<PexelsApiResponse>(
        `https://api.pexels.com/v1/search`,
        {
          headers: {
            Authorization: ENV.VITE_PEXELS_API_KEY,
          },
          params: {
            query: encodeURIComponent(query),
            per_page: 80,
          },
        },
      );
      return data;
    },
  });
