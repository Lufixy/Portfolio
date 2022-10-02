import { useEffect , useState  } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VscCard({ data }) {

    const [isLiked, setLiked] = useState(false);
    return (
        <>
            {data ?(
                
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
        <div className="w-full  h-[85px] mt-3 rounded-md dark:bg-gradient-to-r from-blue-600 to-[#021e4e]  bg-blue-500">
          
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={data?.url?.large_image} alt="" className="w-[85px] p-[8px] h-[85px] rounded-xl" />
                        <div className="ml-3">
                            <div className="shrink-0">
                            <span className="text-white font-bold">{data?.details}</span>
                            </div>
                            
                            <span className="text-white font-medium">{data?.state}</span>
                           
            </div>
        </div>
        <div className="flex items-center mr-5">
            <div className="flex items-center space-x-2">
               
            </div>
        </div>
    </div>
</div>
</div>
</motion.div>
            )
            :(
<>

</>
            )}
        </>
    )
}





