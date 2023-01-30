import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import swr from "../lib/swr";
export default function Projects() {
  const { data: projects } = swr("/api/v1/project");
  const data = projects ? projects : [];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className=" mt-10 mb-10 p-4">
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
               
                      <Image
                        src={project?.link}
                        alt={project?.name}
                        width={400}
                        height={200}
                        className="rounded-md"
                      />
                    
                    
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

