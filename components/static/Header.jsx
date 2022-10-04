import darkTheme from '../../lib/darkToggle';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import config from '../../config';
export default function Header() {
    const router = useRouter();
    

    const [colorTheme, setTheme] = darkTheme();
    const [hamburgermenu, sethamburgermenu] = useState(false);


    return ( 
        <nav className="p-4 ">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <div className={`container  md:flex w-full h-full flex	   justify-between items-center` } >
      <div className="flex items-center">
        <a href="/" className="text-gray-800 text-xl font-bold dark:text-white">Kalashi</a>

        </div>
        <div className="flex items-center space-x-5">
          {
           config.titles.map((title, index) => (
            <a key={index} href={title.url} className="text-gray-800 text-md dark:text-white  ">{title.title}</a>
          ))
          }
          <button className="hover:bg-black/20 duration-300 text-black dark:text-white px-3 py-2 rounded-md" onClick={() => setTheme(colorTheme)}>
            {colorTheme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
          </button>
        </div>
      </div>
    </div>
  </nav>
    
    
          

            

  
    )
}