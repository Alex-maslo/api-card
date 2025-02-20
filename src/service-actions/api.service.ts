"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const apiService = async (formData: FormData) => {
  const res = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  });
  const token = await res.text();

  const cookieStore = await cookies();
  cookieStore.set("token", token);

  redirect("/auth/cards");
};

export const getCards = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};

export const createCard = async (formData: FormData) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      doctor: formData.get("doctor"),
    }),
  });

  const data = await res.json();
  console.log(data);
  redirect("/auth/cards");
};

export const deleteCard = async (id: number) => {
  console.log(`Card ID: ${id}`);

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
