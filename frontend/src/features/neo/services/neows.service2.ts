// src/services/neows.service.ts
import axios from "axios";
import type { NEOApiResponse } from "../types/neows.types";

export const fetchNEOData = async (
  startDate: string,
  endDate: string
): Promise<NEOApiResponse> => {
  const response = await axios.get<NEOApiResponse>(
    "http://localhost:5150/api/neo",
    {
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    }
  );
  return response.data;
};
