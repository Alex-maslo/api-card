import { axiosInstance } from "@/services/getUserTokens";
import { getTokenFromCookies } from "@/services/getTokenFromCookies";
import { ICard } from "@/models/ICard";

export const getAllCards = async (): Promise<ICard[]> => {
  const token = (await getTokenFromCookies()) as string;

  const { data } = await axiosInstance.get("", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
