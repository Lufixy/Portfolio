import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import config from "../config";
import swr from "../lib/swr";
import SpotifyCard from "../components/spoifyCard";
import VscCard from "../components/vscCard";
import Teach from "../components/skills";
import About from "../components/about";
import GithubCard from "../components/repositories";
import { InfinitySpin } from 'react-loader-spinner'


export default function Home() {

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
       
        <div className="mt-10 px-5">
          <About _me={_me} />
          <SpotifyCard data={_me?.data?.spotify} />
          <VscCard data={_me?.data?.activities.find(a => a.name === "Visual Studio Code")} />
  
            <div className="mt-10">
              <GithubCard data={_github.data} />
              <Teach data={_skills} />
            </div>  
        </div>
  

    ) : (
      <div className="w-full h-full flex justify-center items-center">
      <InfinitySpin width='200' />
      </div>
    )}
    
    </>
  );
}
