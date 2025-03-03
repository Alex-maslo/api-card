"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const axiosInstance = axios.create({
  baseURL: "https://ajax.test-danit.com/api/v2/cards",
});

export const getUserTokens = async () => {
  const { data } = await axiosInstance.post("/login", {
    email: "testuser@gmail.com",
    password: "12345678",
  });

  const cookieStore = await cookies();
  cookieStore.set("token", data);

  redirect("/cards");
};
