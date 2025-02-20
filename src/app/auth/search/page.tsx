import React from "react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const results = await searchParams;

  return <div>...</div>;
}
