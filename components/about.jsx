import config from "../config";
import Tippy from "@tippyjs/react";
export default function About({ _me }) {
    const colors = {
        dnd: "ring-[#F04747]",
        idle: "ring-[#FAA61A]",
        online: "ring-[#43B581]",
        offline: "ring-[#747F8D]",
      };
    
    return(
 <div className="mt-10 mb-10">
        <div className="w-full h-full flex justify-center items-center">
          {_me.status ? (
            <div className="px-5 w-full h-full">
              <div className="w-full h-full   md:flex justify-center items-center">
                <div className="shrink-0 flex">
                  <img
                    className={
                      "rounded-full ring-[3px] " + colors[_me.data.discord_status]
                    }
                    src={`https://cdn.discordapp.com/avatars/${_me.data.discord_user.id}/${_me.data.discord_user.avatar}.gif` } 
                    alt=""
                  />
                  <div className="relative ">
                    <span
                    className={`w-5 h-5 bg-[#181b24] rounded-full absolute top-24 right-2`}
                  >
                    <a
                      className={`w-6 h-6   absolute pulse-avatar-${_me.data.discord_status.toUpperCase()} `}
                    />
                  </span>
                  </div>
                    
                </div>

                <div className="mt-5 w-full">
                  <div className="flex">
                     <span className=" text-2xl pl-3 font-medium flex-none dark:text-white">
                     {_me.data.discord_user.username}
                   </span>
                    {
                      config.social.instagram ? (
                        <div className="flex">
                          <a href={config.social.instagram} target="_blank">
                            <span className="ml-3 dark:text-white items-center md:font-medium ">
                              <Tippy
                                content="Instagram"
                                placement="top"
                                className="dark:bg-gray-800/50 "
                              >
                              <i className="fab  fa-instagram text-2xl"></i>
                              </Tippy>
                            </span>
                           </a>
                        </div>
                      ) : null
                    }
                  </div>
                  <p className="pl-3 text-sm  dark:text-white ">
                    {config.about.description}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        </div>
    )
   
}
