import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function respo({ data }) {
  return (
    <div className="w-full h-full p-4">
      <div className="text-2xl font-bold flex items-center text-black dark:text-white  ">
        <div className="w-10 h-10 items-center flex justify-center mr-2">
          <i className="ml-2 fab text-indigo z-index-2 fa-github text-4xl mr-2" />
        </div>
        Github Repositories
      </div>
      <div className="w-full  mt-5 flex gap-3 flex-wrap ">
        {data
          ?.slice(0, 8)
          ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
          ?.map?.((repo, index) => (
            <Link href={repo?.html_url} key={index}>
              <div
                className="w-full  h-28 border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c]  bg-[#fafcfb] dark:bg-[#151516] shadow-lg   rounded-md  cursor-pointer transition-all duration-200   mt-8 md:w-1/2 lg:w-1/3 pr-2"
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className=" translation duration-300   rounded-lg px-2 md:px-4 lg:px-5 p-2 ">
                    <h1 className="text-lg font-medium text-black dark:text-white">
                      {repo?.name}
                    </h1>
                    <p className="text-sm text-black dark:text-white">
                      {repo?.description}
                    </p>
                    <div className="flex justify-between items-center mt-9">
                      <div className="text-black m dark:text-white">
                        by{" "}
                        <span className="text-sm font-bold text-gray-800/95 dark:text-white ml-1">
                          {" "}
                          {repo?.owner?.login}
                        </span>
                      </div>
                      <div className="flex items-center ml-5">
                        <div>
                          <i className="fas fa-star text-yellow-400 mr-1" />
                          <span className="text-sm font-bold text-gray-800/95 dark:text-white">
                            {repo?.stargazers_count} Star
                          </span>
                        </div>
                        <div className="flex items-center ml-5">
                          <div>
                            <i className="fas fa-code-branch text-indigo mr-1" />
                            <span className="text-sm font-bold text-gray-800/95 dark:text-white">
                              {repo?.forks_count} Fork
                            </span>
                          </div>
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
  );
}
