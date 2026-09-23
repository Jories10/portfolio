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
          ${isOpenNav ? "max-h-96" : "max-h-0"}
          absolute top-full left-0 w-full px-3.5 border-t border-gray-300
          sm:static sm:max-h-none sm:block sm:w-auto sm:border-0 sm:px-0
          text-sm bg-white tracking-wide
        `}>
            <ul className={`${isOpenNav ? "flex flex-col justify-center sm:flex-row items-start gap-4 h-auto": "flex items-center gap-4 h-auto"}`}>
                <li className={navItemClass}>
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
                <li className="text-gray-950 border border-gray-950 py-3 px-5 pointer hover:bg-gray-950 hover:text-gray-50 transition-colors ease-linear duration-200 pointer">
                    <DownloadResumButton content="Resume"/>
                </li>
            </ul>
        </nav>
       </>
    )
}