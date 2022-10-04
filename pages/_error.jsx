import { useState,useEffect } from "react"
import { useRouter } from "next/router";

export default function Error() {
    const router = useRouter();

    return (
        <div >
            <h1 className="text-3xl font-bold text-center text-black dark:text-white">Error !</h1>
            <p className="text-center text-black dark:text-white mt-3">The page you are looking for does not exist.</p>
            <div className="flex justify-center">
                <button className="bg-gray-800/50 mt-4 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={() => router.push('/')}>Go Back</button>
            </div>  
        </div>

    )
}
