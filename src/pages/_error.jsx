import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();
  
  return (
    <div className="h-screen flex justify-center items-center text-center">
      <div>
        <h1 className="text-3xl  font-bold text-center text-black dark:text-white">
          Error !
        </h1>
        <p className="text-center text-black dark:text-white mt-3">
          The page you are looking for does not exist.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-indigo mt-4 translation duration-300 text-white px-4 py-2 rounded-md hover:bg-indigo/80"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

