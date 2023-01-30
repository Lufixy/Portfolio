import config from "../../../config";
import Tippy from "@tippyjs/react";
import swr from "../../lib/swr";
import countryselect from "../../utils/country";
import { useEffect, useState } from "react";
export default function About() {
  const { data: me } = swr("api/v1/me");
  const _me = me ? me : null;
  const { data: weather } = swr("/api/v1/weather");
  const _weather = weather ? weather : null;
  const [time, setTime] = useState("00:00");

 
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
  



  return (
    <div className="mt-20 mb-10">
      <div className="w-full h-full flex justify-center items-center">
        {_me?.status ? (
          <div className="px-5 w-full h-full">
            <div className="w-full h-full mb-5   md:flex justify-center items-center">
              <div className="mr-8  flex md:shrink-0 justify-center">
                <img
                  className={
                    "rounded-full ring-[3px] ring-indigo  w-44 h-44 "
                  }
                  src={_me?.data.discord_user.avatar.startsWith('a_') ? `https://cdn.discordapp.com/avatars/${_me.data.discord_user.id}/${_me.data.discord_user.avatar}.gif` : `https://cdn.discordapp.com/avatars/${_me.data.discord_user.id}/${_me.data.discord_user.avatar}.png`
                  }
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
                    Hey, I'm{" "}
                    <span className="text-indigo">
                      {_me.data.discord_user.username}
                    </span>
                  </span>
                </div>
                <p className="pl-3 text-md mt-1 dark:text-white/50 ">
                  {config.about.description}
                </p>
                <div className="ml-3  -mt-3">
                  <div className="text-left items-center justify-center">
                    <div className="mt-4">
                    <div className="">
                      <i className="fas fa-clock text-indigo  text-lg  mr-2" />
                      <span className="text-md text-center font-light dark:text-white/50">
                      {_weather?.data?.name} {countryselect(_weather?.data?.sys.country)} / {time}
                      </span>

                    </div>
                    <div className="">
                      <i className="fas fa-cloud-sun-rain text-indigo  text-lg  mr-2" />
                      <span className="text-md text-center font-light dark:text-white/50">
                        {_weather?.data?.weather[0].main} /{" "}
                        {_weather?.data?.main.temp}°C /{" "}
                        {_weather?.data?.main.humidity}%
                      </span>

                    </div>
                  
                    
                  </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        ) : null }
      </div>
    </div>
  );
}              