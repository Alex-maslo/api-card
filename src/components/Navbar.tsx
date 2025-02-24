import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-around">
      <Link href={"/"} className="btn btn-ghost text-xl">
        Home
      </Link>
    </div>
  );
};

export default Navbar;
