"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/auth",
  timeout: 5000,
  withCredentials: true,
});

export const getUserTokens = async () => {
  const { data } = await axiosInstance.post("/login", {
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
  });

  (await cookies()).set("user", JSON.stringify(data));
  redirect("/recipes");
};
