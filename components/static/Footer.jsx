import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";

import swr from "../../lib/swr";

export default function Footer() {
  const router = useRouter();


  const [colors , setColors] = useState("text-red-500");
  const randomcolor = () => {
    const color = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500", "text-orange-500"];
    const random = Math.floor(Math.random() * color.length);
    setColors(color[random]);
  }

  const logo = {
    discord: {
      icon: "discord",
      alt: "Discord",
      href: "https://discord.gg/QWQWQWQ",
      target: "_blank",
    },
    github: {
      icon: "github",
      alt: "Github",
      href: "https://github.com/kalashiexe",
      target: "_blank",
    },
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
      
          <div className="px-4  mt-10 ">
            <div className="w-full items-center  h-12">
              <div className="flex justify-between items-center">
                <div className="flex items-center md:font-medium">
                  <Tippy content="Merâ">
                    <span className="bg-black/20 dark:bg-white/20 dark:text-white  px-3 py-1 font-bold text-sm rounded-md">
                      v1.0
                    </span>
                  </Tippy>
                  </div>
                  <div>
                  <span  className="ml-3 dark:text-white items-center md:font-medium ">
                    Developed with{" "}
                    <Tippy
                      content="Merâ"
                      placement="top"
                      theme="light"
                      arrow={false}
                     >
                    <button onClick={() => randomcolor()} className={`px-1 fas fa-heart ${colors} text-lg`} />
                    </Tippy>
                    {" "}by Kalashi
                  </span>
                </div>

                <div className="flex mr-4 text-md ">
                  <a
                    className="mr-5"
                    href={logo.discord.href}
                    target={logo.discord.target}
                  >
                    <Tippy content={logo.discord.alt}>
                      <i className={`fab fa-${logo.discord.icon} dark:text-white`} />
                    </Tippy>
                  </a>
                  <a href={logo.github.href} target={logo.github.target}>
                    <Tippy content={logo.github.alt}>
                      <i className={`fab fa-${logo.github.icon} dark:text-white`} />
                    </Tippy>
                  </a>
                </div>
              </div>
            </div>
          </div>
  
      </motion.div>
    </>
  );
}
