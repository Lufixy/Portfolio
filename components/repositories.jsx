import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function respo({ data }) {
    return (
        <div className="w-full h-full ">
            <div className="text-2xl font-bold flex items-center text-black dark:text-white  ">
             <div className="w-10 h-10 bg-black dark:bg-white rounded-full items-center flex justify-center mr-2"> 
                  <i className="ml-2 fab text-white dark:text-black z-index-2 fa-github text-2xl mr-2" />
             </div>
           
              Github Repositories
            </div>
            <div className="w-full h-full mt-5 ">
                {data?.slice(0,8)?.sort((a,b) => b.stargazers_count - a.stargazers_count)?.map((repo,index) => (
                    <Link href={repo?.html_url} key={index}>
                    <div
                    className="w-full bg-gray-400/50 hover:bg-gray-800/40 dark:bg-[#0c1016] dark:hover:bg-[#0c1016]/90 rounded-md  cursor-pointer transition-all duration-200 shadow-2xl  mt-5 md:w-1/2 lg:w-1/3 pr-2"
                    key={index}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <div className=" translation duration-300  rounded-lg p-5">
                        <div className=" justify-between items-center">
                          <div className="flex items-center">
                            <img
                              className="w-12 h-12 rounded-full mr-4 "
                              src={repo?.owner.avatar_url}
                              alt={repo?.owner.login}
                            />
                            <div className="text-sm">
                              <p className="font-bold text-black dark:text-white">
                                {repo?.owner.login}
                              </p>
                              <p className="text-black dark:text-white">{repo?.name}</p>
                            </div>
                            
                          </div>
                          <div className="flex justify-between mt-5  items-center">
                            <div> 
                              <p className="text-black dark:text-white">
                              <i class="text-black dark:text-white mr-2 fa-solid fa-code"></i>
                              {repo?.language || "Empty"}
                            </p>
                            </div>
                            <div className="flex space-x-3">

                           
                            <p className="text-black dark:text-white">
                              <i className="text-black dark:text-white mr-2 fa-solid fa-star"></i>
                              {repo?.stargazers_count}
                            </p>
                            <p className="text-black dark:text-white">
                              <i className="text-black dark:text-white mr-2 fa-solid fa-code-branch"></i>
                              {repo?.forks_count}
                            </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  </Link>
                ))}
            </div>
        </div>
    )
}
         