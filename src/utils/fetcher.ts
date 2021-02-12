import { FetchRV } from "types";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./constant";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const fetcher = {
  async get<T = {}>(url: string): Promise<FetchRV<T>> {
    try {
      return (await axiosInstance.get(url)).data;
    } catch (error) {
      const { data, status } = error.response as AxiosResponse;
      return { ...data, errorStatus: status };
    }
  },
};

export default fetcher;
