import config from "../config";
import Tippy from "@tippyjs/react";
import { useEffect ,useState } from "react";
export default function About({ _me ,spotify}) {
    const colors = {
        dnd: "ring-[#F04747]",
        idle: "ring-[#FAA61A]",
        online: "ring-[#43B581]",
        offline: "ring-[#747F8D]",
      };
    
      const [time , setTime] = useState("00:00");

       useEffect (() => {
        const interval = setInterval(() => {
          setTime(new Date().toLocaleTimeString());

        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return(
 <div className="mt-20 mb-10">
        <div className="w-full h-full flex justify-center items-center">
          {_me.status ? (
            <div className="px-5 w-full h-full">
              <div className="w-full h-full mb-5   md:flex justify-center items-center">
                <div className="mr-8  flex md:shrink-0 justify-center">
                  <img
                    className={
                      "rounded-full ring-[3px]  w-44 h-44 " + colors[_me.data.discord_status]
                    }
                    src={`https://cdn.discordapp.com/avatars/${_me.data.discord_user.id}/${_me.data.discord_user.avatar}.gif` } 
                    alt=""
                  />
                  <div className="relative">
                    <span
                    className={`w-6 h-6  bg-[#181b24] rounded-full absolute top-32 right-2`}
                  >
                    <a
                      className={`w-7 h-7    absolute pulse-avatar-${_me.data.discord_status.toUpperCase()} `}
                    />
                  </span>
                  </div>
                    
                </div>

                <div className="mt-3 w-full">
                  <div className="flex">
                     <span className=" text-4xl pl-3 font-bold flex-none dark:text-white">
                    Hey, I'm{" "} <span className="text-indigo">{_me.data.discord_user.username}</span>
                   </span>
                  
                  </div>
                  <p className="pl-3 text-md w-96  dark:text-white/50 ">
                    {config.about.description}
                  </p>
                  <div className="ml-3  -mt-3">
                    <div className="text-left items-center justify-center">
                      <div className="mt-4">
                         <i className="fas fa-map-marker-alt text-indigo  text-lg  mr-2" />
                      <span className="text-md text-center font-light dark:text-white/50">
                        {" "} İstanbul, Turkey / {time}
                      </span>
                      </div>
                      <div className="mt-2">
                      <i className="fa-brands fa-spotify text-indigo text-lg mr-2" />
                      <span className="text-md font-light  dark:text-white/50">
                        {
                          spotify ? (
                            <span className="mr-1">Listening to {spotify?.song.substring(0, 25)} {spotify?.song.length >= 25 && '...'} by {spotify?.artist.substring(0, 25)} {spotify?.artist.length >= 25 && '...'}</span>
                           
                          ) : (
                            <span className="mr-1">Not Listening to Spotify</span>
                            
                          )
                        }

                      </span>
                      </div>
                    
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          ) : null}
        </div>
        </div>
    )
   
}
