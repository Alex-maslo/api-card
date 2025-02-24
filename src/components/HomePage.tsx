import React from "react";
import { getUserTokens } from "@/services/getUserTokens";

const HomePage = () => {
  return (
    <div className="flex justify-around p-6">
      <button onClick={getUserTokens} className="btn btn-primary">
        Login and get tokens
      </button>
    </div>
  );
};

export default HomePage;
