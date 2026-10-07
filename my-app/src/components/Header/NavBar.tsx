import {useState} from "react";
import BurgerMenuButton from "../Buttons/BurgerMenuButton";
import DownloadResumButton from "../Buttons/DownloadResumeButton";

export default function NavBar(){
  const [isOpenNav,setIsOpenNav] = useState(false);
  const navItemClass:string = "pointer hover:text-gray-950 transition-colors duration-300 ease";

    return (
       <>
         <BurgerMenuButton isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
         <nav className={`
          overflow-hidden
          ${isOpenNav ? "max-h-96 block" : "max-h-0 hidden"}
          absolute top-full left-0 w-full px-5 py-3 border-t border-gray-300
          sm:static sm:max-h-none sm:block sm:w-auto sm:border-0 sm:px-0
          text-sm bg-white tracking-wide overflow-hidden
        `}>
            <ul className={`${isOpenNav ? "flex flex-col justify-center sm:flex-row items-start gap-4 h-auto mt-3": "none  gap-4 h-auto"} sm:flex sm:items-center sm:mt-0 overflow-hidden`}>
                <li className={`${navItemClass}`}>
                    <a href="#home">Home</a>
                </li>
                <li className={navItemClass}>
                    <a href="#about">About</a>
                </li>
                <li className={navItemClass}>
                    <a href="#skills">Skills</a>
                </li>
                <li className={navItemClass}>
                    <a href="#projects">Projects</a>
                </li>
                <li className={navItemClass}>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <DownloadResumButton content={
                       <>
                        <span className="sm:hidden">Download Resume</span>
                        <span className="hidden sm:inline">Resume</span>
                       </>
                    }/>
                </li>
            </ul>
        </nav>
       </>
    )
}