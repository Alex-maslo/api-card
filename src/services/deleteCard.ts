"use server";
import { getTokenFromCookies } from "@/services/getTokenFromCookies";
import { revalidatePath } from "next/cache";
import { axiosInstance } from "@/services/getUserTokens";

export const deleteCard = async (id: number) => {
  const token = await getTokenFromCookies();

  await axiosInstance.delete(`/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  revalidatePath("/cards");
};
