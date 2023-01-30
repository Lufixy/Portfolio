import darkTheme from "../../lib/darkToggle";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import config from "../../../config";
import Link from "next/link";
export default function Header() {
  const router = useRouter();

  const [colorTheme, setTheme] = darkTheme();
  const [open, setOpen] = useState(false);

  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    if (width > 640) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  return (
    <nav className="p-4 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="text-2xl font-bold text-gray-800 dark:text-gray-100"
          >
            {config.title}
          </a>
          <button
            className="text-white bg-indigo dark:bg-indigo/75 w-10 p-1 rounded-md translation duration-300"
            onClick={() => setTheme(colorTheme)}
          >
            {colorTheme === "light" ? (
              <i className="fa-solid fa-sun-bright"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </div>
        <div className="space-x-7 hidden sm:flex">
          {config.titles.map((title, index) => (
            <Link href={title.url.toLowerCase()} key={index}>
              <a
                className={` text-lg font-light translation duration-300 ${
                  router.pathname === title.url
                    ? "text-indigo"
                    : "text-black/75 hover:text-indigo dark:text-white/50 dark:hover:text-white"
                } `}
              >
                {title.title}
              </a>
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <button className="bg-indigo dark:bg-indigo/75 font-medium p-2 w-32 translation duration-300 hover:bg-indigo/60 rounded-md text-white">
            <a
              href={`https://discord.com/users/` + config.discord.id}
              target="_blank"
            >
              Contact
            </a>
          </button>
        </div>

        {open ? (
          <div className="border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c]  bg-[#fafcfb] dark:bg-[#151516] w-full mx-auto h-16 px-10 py-2 flex justify-between text-gray-font left-0 fixed bottom-0 shadow-lg z-40 border-t border-gray-99">
            {config.titles.map((title, index) => (
              <Link href={title.url.toLowerCase()} key={index}>
                <a>
                  <span className="px-2 py-1 cursor-pointer hover:bg-back/25 dark:text-white text-black dark:hover:bg-indigo/25  text-sm rounded-md font-light  flex flex-col items-center text-center">
                    <i className={"w-8 p-1 fa-regular " + title.icon}></i>
                    <span className="mx-1 font-roboto">{title.title}</span>
                  </span>
                </a>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
