import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import swr from "../../lib/swr";
export default function VscCard() {
  const { data: me } = swr("api/v1/me");
  const data = me ? me.data.activities.find((x) => x.type === 0) : null;

  return (
    <>
      {data ?
      (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full  p-1 mt-3 rounded-md dark:bg-gradient-to-r from-blue-600 to-blue-900 bg-blue-600">
            <div className="relative">
             
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="relative ml-2">

                  <img
                    src={`https://cdn.discordapp.com/app-assets/${data?.application_id}/${data?.assets?.large_image}.png`}
                    alt=""
                    className="w-[85px] p-[8px] h-[85px] rounded-xl"
                  />
                  </div>
                  
                  <div className="ml-5">
                    <div className="shrink-0">
                      <span className="text-white font-bold">
                        {data?.details}
                      </span>
                    </div>

                    <span className="text-white font-medium">
                      {data?.state}
                    </span>
                  </div>
                </div>
                <div className="flex items-center mr-5">
                  <div className="flex items-center space-x-2"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
