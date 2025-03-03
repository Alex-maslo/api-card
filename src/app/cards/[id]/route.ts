import { NextRequest } from "next/server";
import { getTokenFromCookies } from "@/services/getTokenFromCookies";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Params = Promise<{ id: string }>;

export async function GET(
  request: NextRequest,
  { params }: { params: Params },
) {
  const token = await getTokenFromCookies();

  const { id } = await params;

  // Допустим, мы получаем данные карточки из базы данных
  // const cardData = { id, doctor: 'Dr. John Doe', description: 'Card details here' };

  await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  revalidatePath("/cards");
  redirect("/cards");
}
