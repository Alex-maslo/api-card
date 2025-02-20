import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";

const Navbar = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.has("token");
  // const token = false;

  return (
    <>
      {token ? (
        <>
          <div className="navbar bg-secondary text-secondary-content flex justify-around">
            <Link href={"/"} className="btn btn-ghost text-xl">
              Home
            </Link>

            <Link href={"/auth/cards"} className="btn btn-ghost text-xl">
              Cards
            </Link>

            <Link
              href={"/auth/cards/create-card"}
              className="btn btn-ghost text-xl"
            >
              Create card
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="navbar bg-primary text-primary-content flex justify-around">
            <Link href={"/"} className="btn btn-ghost text-xl">
              Home
            </Link>
            <Link href={"/auth"} className="btn btn-ghost text-xl">
              Login
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
