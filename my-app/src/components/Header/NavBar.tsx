import {useState} from "react";
import BurgerMenuButton from "../Buttons/BurgerMenuButton";
import DownloadResumButton from "../Buttons/DownloadResumeButton";
import resume from "../../assets/resume/Jories_Condat_Junior_Frontend_React_Developer.pdf";
import useScrollSpy from "../../hooks/useScrollSpy";
import sectionIds from "../../sections/sectionIds";
import sectionIdFormatLabel from "../../utils/sectionIdFormatLabel";
export default function NavBar(){
  const [isOpenNav,setIsOpenNav] = useState(false);
  const navItemClass = "pointer hover:text-gray-950 transition-colors duration-300 ease";
  const sectionId = sectionIds();
  const activeSection = useScrollSpy(sectionId);

    return (
       <>
         <BurgerMenuButton isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
         <nav className={`
          overflow-hidden
          ${isOpenNav ? "max-h-96 block" : "max-h-0 hidden"}
          absolute top-full left-0 w-full px-5 py-3 border-t border-gray-300
          sm:static sm:max-h-none sm:block sm:w-auto sm:border-0 sm:px-0
          text-sm bg-white tracking-wide overflow-hidden z-10
        `}>
            <ul className={`${isOpenNav ? "flex flex-col justify-center sm:flex-row items-start gap-4 h-auto mt-3": "none  gap-4 h-auto"} sm:flex sm:items-center sm:mt-0 overflow-hidden`}>
                {
                    sectionId.map((id)=>{
                        return <li key={id} className={navItemClass}>
                                    <a href={`#${id}`} aria-current={ activeSection === id ? "location":undefined} className={activeSection === id ? "active" : ""}>{sectionIdFormatLabel(id)}</a>
                            </li>
                    })
                }
                <li>
                    <DownloadResumButton style="flex items-center justify-center gap-x-1 w-full min-[450px]:w-auto text-gray-950 border border-gray-950 py-3 px-5 pointer hover:bg-gray-950 hover:text-gray-50 transition-colors ease-linear duration-200 pointer" content={
                       <>
                        <span className="sm:hidden">Download Resume</span>
                        <span className="hidden sm:inline">Resume</span>
                       </>
                    } url={resume}/>
                </li>
            </ul>
        </nav>
       </>
    )
}