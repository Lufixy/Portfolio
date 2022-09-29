import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Tippy from "@tippyjs/react";
import { motion, AnimatePresence } from "framer-motion";
import swr from "../lib/swr";
import SpotifyCard from "../components/spoifyCard";
import VscCard from "../components/vscCard";
import GithubCard from "../components/repositories";
import { InfinitySpin } from 'react-loader-spinner'
export default function Home() {
  const router = useRouter();

  const [Change, setChange] = useState(false);
  const { data: me } = swr("api/v1/me");
  const _me = me ? me : {};
  const { data: github } = swr("api/v1/repos");
  const _github = github ? github : {};

  const colors = {
    dnd: "ring-[#F04747]",
    idle: "ring-[#FAA61A]",
    online: "ring-[#43B581]",
    offline: "ring-[#747F8D]",
  };

  return (
    <>
    {me ? (
      <div className="px-5 mt-10">
        <div className="w-full h-full flex justify-center items-center">
          {_me.status ? (
            <div className="px-5 w-full h-full">
              <div className="w-full h-full flex justify-center items-center">
                <div className="shrink-0 flex">
                  <img
                    className={
                      "rounded-full ring-[3px] " + colors[_me.data.status]
                    }
                    src={_me.data.avatar_url.replace(".webp", ".gif")}
                    alt=""
                  />
                  <div className="relative w-full h-full">
                    <span
                    className={`w-5 h-5 bg-[#181b24] rounded-full absolute right-4 top-24 -mr-2`}
                  >
                    <a
                      className={`w-6 h-6   absolute pulse-avatar-${_me.data.status.toUpperCase()} `}
                    />
                  </span>
                  </div>
                    
                </div>

                <div className="">
                  <span className=" text-2xl pl-3 font-medium flex-none dark:text-white">
                    {_me.data.username}
                  </span>

                  <p className="pl-3 text-sm dark:text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Libero ipsa facilis necessitatibus delectus quia unde ullam
                    a officia culpa itaque accusamus nobis doloremque tempora
                    odit quaerat debitis, magni inventore placeat.
                  </p>

                
                </div>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="mt-10">
          {<SpotifyCard data={_me?.data?.activities.find(a => a.name === "Spotify")} />}
       {<VscCard data={_me?.data?.activities.find(a => a.name === "Visual Studio Code")} />}
        </div>
            
            <div className="mt-10">
              <GithubCard data={_github.data} />
              </div>
       </div>
    ) : (
      <div className="w-full h-full flex justify-center items-center">
      <InfinitySpin  
     
  width='200'
/>
      </div>
    )}
    </>
  );
}
