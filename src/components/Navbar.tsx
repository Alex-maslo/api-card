import React from "react";
import Link from "next/link";
import { getTokenFromCookies } from "@/services/getTokenFromCookies";

const Navbar = async () => {
  const token = await getTokenFromCookies();

  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-around">
      {token ? (
        <>
          <Link href={"/"} className="btn btn-ghost text-xl">
            Home
          </Link>{" "}
          <Link href={"/cards"} className="btn btn-ghost text-xl">
            Cards
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
