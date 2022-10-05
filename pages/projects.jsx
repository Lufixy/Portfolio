import axios from "axios"
import config from "../config"
import { motion, AnimatePresence } from "framer-motion";

export default function Projects({ data }) {
 
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >

        <div className="px-4 mt-10 mb-10">

            <h1 className="text-3xl font-bold  text-black dark:text-white">Projects</h1>
            <p className=" text-black dark:text-white mt-3">Here are some of my projects.</p>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {
                        data.map?.((project, index) => (
                            <div key={index} className="bg-gray-400/50  dark:bg-gray-800/50 hover:scale-[1.02] rounded-md  cursor-pointer transition-all duration-200 shadow-2xl">
                                <div className="p-5">
                                    <div className="flex justify-between items-center">
                                        <div className=" items-center">
                                            {project?.image ? <img className="w-full h-24 rounded-md  mr-4 " src={project?.image} alt={project?.name} /> : <div className="w-full h-24 rounded-md mr-4 bg-black dark:bg-white" />}
                                            <div className="text-sm mt-2">
                                                <p className="font-bold text-black dark:text-white">
                                                    {project?.name}
                                                </p>
                                                <p className="text-black dark:text-white">{project?.description}</p>
                                            </div>
                                        </div>
                                            </div>
                                            </div>
                                            </div>
                                           

                                                    
                          
                        ))
                    }
                </div>
            </div>
        </div>
        </motion.div>
    )
}


//server side props

export async function getServerSideProps(context) {
    const res = await axios.get(config.meta.url  +'/api/v1/project')
    const data = await res.data
    return {
        props: {
            data
        }
    }
}
