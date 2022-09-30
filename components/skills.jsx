import { motion, AnimatePresence } from "framer-motion";
import { useEffect , useState  } from "react";

export default function Teach({ data }) {
  return( 
    <div className="mt-10  ">
       
        <div className="text-2xl font-bold flex items-center text-black dark:text-white  ">
             <div className="w-10 h-10 bg-black dark:bg-white rounded-full items-center flex justify-center mr-2"> 
                <i className="fas fa-book text-white dark:text-black text-lg" />
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
                      <div className="bg-gray-400/50 hover:bg-gray-800/40 dark:bg-[#0c1016] dark:hover:bg-[#0c1016]/90 shadow-lg rounded-lg p-2">
                      
                          <div className="flex justify-between items-center">
                            <img
                              className="w-8 h-8 rounded-md mr-4"
                              src={item.src}
                              alt={item.name}
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
                    <>
                    </>
                )}
            </div>
            </div>
  )
    

}