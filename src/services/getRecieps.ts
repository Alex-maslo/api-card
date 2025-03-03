import { axiosInstance } from "@/services/getUserTokens";
import { cookies } from "next/headers";

export const getRecipes = async () => {
  const value = (await cookies()).get("user")?.value;
  if (!value) return null;

  const accessToken = JSON.parse(value).accessToken;
  const { data } = await axiosInstance.get("/recipes", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return data.recipes;
};
