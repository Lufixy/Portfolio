import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import swr from "../../lib/swr";
export default function Teach() {
  const { data: tech } = swr("/api/v1/teach");
  const data = tech ? tech : [];

  return (
    <div className="mt-16">
      <div className="text-2xl font-bold flex items-center dark:text-white  ">
        <div className="w-10 h-10  rounded-full items-center flex justify-center mr-2">
          <i className="fas fa-book text-indigo text-3xl" />
        </div>
        Technologies I use
      </div>
      <div className="flex mt-5 flex-wrap">
        {data ? (
          data.map((item, index) => (
            <div
              className="w-full cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] md:w-1/2 lg:w-1/3 mt-2 pr-2"
              key={index}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={index}
                transition={{ duration: 0.5 }}
              >
                <div className="border-[1px] border-[#e2e3e5] dark:border-[#1a1a1c]  bg-[#fafcfb] dark:bg-[#151516] shadow-lg rounded-lg p-2">
                  <div className="flex justify-between items-center">
                    <Image
                      className="w-8 h-8 rounded-md mr-4"
                      src={item.src}
                      alt={item.name}
                      width={30}
                      height={30}
                    />
                    <div className="text-sm  justify-end">
                      <p className="font-bold text-black dark:text-white">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
