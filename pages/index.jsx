import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Tippy from "@tippyjs/react";
import { motion, AnimatePresence } from "framer-motion";
import swr from "../lib/swr";
import SpotifyCard from "../components/spoifyCard";
import VscCard from "../components/vscCard";
import Teach from "../components/skills";
import GithubCard from "../components/repositories";
import { InfinitySpin } from 'react-loader-spinner'
export default function Home() {
  const router = useRouter();

  const [Change, setChange] = useState(false);
  const { data: me } = swr("api/v1/me");
  const _me = me ? me : {};
  const { data: github } = swr("api/v1/repos");
  const _github = github ? github : {};
  const { data: skills} = swr("api/v1/teach");
  const _skills = skills ? skills : {};

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
                   Phasellus quis sollicitudin nisi. Nullam fermentum vel ante eu cursus. Curabitur vel sapien a nunc faucibus luctus. Duis iaculis magna ante. Maecenas eget rhoncus nisi. Quisque vitae tellus sit amet velit mollis tristique eu sed nulla. Duis iaculis pretium metus, tempor commodo risus facilisis et. Etiam viverra, libero ut consequat condimentum, diam mi semper risus, eu gravida tortor justo at massa. Praesent eget sollicitudin diam, bibendum maximus lacus.
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
              <Teach data={_skills} />
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
