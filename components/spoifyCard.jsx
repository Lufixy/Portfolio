import { useEffect , useState  } from "react";
import { Canvas } from "canvas";
import { motion, AnimatePresence } from "framer-motion";
import { set } from "nprogress";

export default function SpotifyCard({ data }) {

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
                <div className="w-full  h-[85px] mt-10 rounded-md dark:bg-gradient-to-r from-green-700 to-green-800  bg-green-500">
          
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
                <button onClick={() => setLiked(!isLiked)} className="outline-none w-7" > <i className={"fas fa-heart text-lg mr-3 " + (isLiked ? "text-red-500" : "text-white") }  />   </button>
                <i className="fas fa-ellipsis-h text-white text-lg" />
            </div>
        </div>
       
    </div>

</div>
</div>
</motion.div>
            )
            :(
<></>
            )}
                
        
        </>
    )
}





