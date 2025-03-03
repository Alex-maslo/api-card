import React from "react";
import { getUserTokens } from "@/services/getUserTokens";
import { getTokenFromCookies } from "@/services/getTokenFromCookies";

const HomePage = async () => {
  const token = await getTokenFromCookies();

  return (
    <div className="flex justify-around p-6">
      {token ? (
        <></>
      ) : (
        <>
          <button onClick={getUserTokens} className="btn btn-primary">
            Login and get token
          </button>
        </>
      )}
    </div>
  );
};

export default HomePage;
