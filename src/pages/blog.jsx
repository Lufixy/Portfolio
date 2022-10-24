import { useRouter } from "next/router";
export default function Blog() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-black dark:text-white">
          Coming Soon
        </h1>
        <button
          className="bg-indigo mt-4 translation duration-300 text-white px-4 py-2 rounded-md hover:bg-indigo/80"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </main>
    </div>
  );
}
