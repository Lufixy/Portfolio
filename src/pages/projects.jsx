import axios from "axios";
import config from "../../config";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Projects({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="px-10 mt-10 mb-10 p-4">
        <h1 className="text-3xl font-bold  text-black dark:text-white">
          Projects
        </h1>
        <p className=" text-black dark:text-white mt-3">
          Here are some of my projects.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {data.map?.((project, index) => (
              <Link href={project?.html_url || "#" } key={index}>
              <div
                key={index}
                className="border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c]   bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.02] rounded-md  cursor-pointer transition-all duration-200 shadow-2xl"
              >
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <div className=" items-center">
                    {project?.image ? (
                      <Image
                        src={project?.image}
                        alt={project?.name}
                        width={400}
                        height={200}
                        className="rounded-md"
                      />
                    ) : (
                      <div className="bg-[#e2e3e5] dark:bg-[#1a1a1c] rounded-md w-10 h-10 flex justify-center items-center">
                        <svg  
                          xmlns="http://www.w3.org/2000/svg"  
                          className="h-6 w-6 text-[#1a1a1c] dark:text-[#e2e3e5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    )}
                    
                      <div className="text-sm mt-2">
                        <p className="font-bold text-black dark:text-white">
                          {project?.name}
                        </p>
                        <p className="text-black dark:text-white">
                          {project?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

//server side props

export async function getServerSideProps(context) {
  const res = await axios.get(config.meta.url + "/api/v1/project");
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
}

