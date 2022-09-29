import darkTheme from '../../lib/darkToggle';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Header() {
    const router = useRouter();
    

    const [colorTheme, setTheme] = darkTheme();
   


    return ( 
        <nav className="p-4">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" className="flex items-center text-black dark:text-white">
      <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white ">Kalashi</span>
    </a>
    

    <div className=" w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-black dark:text-white  md:bg-transparent  md:p-0 " aria-current="page">Home</a>
        </li>
        <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-black dark:text-white  md:bg-transparent  md:p-0 " aria-current="page">Projects</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-black dark:text-white  md:bg-transparent  md:p-0 " aria-current="page">Contact</a>
        </li>
        <div
          onClick={() => setTheme(colorTheme)}
          className="  dark:text-white text-black text-center items-center justify-center    transition-all duration-500   cursor-pointer"
        >
          <i
            className={
              colorTheme === "dark"
                ? "fa-solid fa-moon"
                : "fa-solid fa-sun-bright"
            }
          ></i>
          
           
        </div>
      </ul>
    </div>
  </div>
</nav>
  
    )
}