import { AxiosError } from "axios";

import { apiClient } from "./client";

export async function customFetcher(url: string) {
  try {
    const res = await apiClient.get(url);
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      const data = err?.response?.data as { message: string };
      throw new Error(data.message);
    }
  }
}
