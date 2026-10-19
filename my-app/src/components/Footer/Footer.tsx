import DownloadResumeButton from "../Buttons/DownloadResumeButton";
import resume from "../../assets/resume/Jories_Condat_Junior_Frontend_React_Developer.pdf";

export default function Footer(){
    return(
        <footer className="border-t border-gray-300 mx-auto w-full max-w-6xl">
            <div className="py-12 px-5 sm:px-8">
               <div className="flex justify-between flex-col sm:flex-row gap-10">
                     <div className="max-w-xs">
                        <h3 className="font-medium text-[1rem]">Mr.Discipline</h3>
                        <p className="mt-3 text-sm text-gray-600">Frontend React Developer</p>
                        <p className="mt-4 text-xs text-gray-500 leading-relaxed">Building responsive, modern web applications with React and TypeScript. Open to junior roles and freelance opportunities.</p>
                    </div>
                    <div className="flex gap-16">
                        <div>
                            <h4 className="text-[10px] uppercase text-gray-600 font-medium tracking-[3px]">nivigation</h4>
                            <nav>
                                <ul className="mt-4 text-sm capitalize text-gray-500">
                                    <li className="mb-2 cursor-pointer hover:text-black">home</li>
                                    <li className="mb-2 cursor-pointer hover:text-black">about</li>
                                    <li className="mb-2 cursor-pointer hover:text-black">skills</li>
                                    <li className="mb-2 cursor-pointer hover:text-black">projects</li>
                                    <li className="cursor-pointer hover:text-black">contact</li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <h4 className="text-[10px] uppercase text-gray-600 font-medium tracking-[3px]">social</h4>
                            <ul className="mt-4 text-sm capitalize text-gray-500">
                                <li className="mb-2 cursor-pointer hover:text-black">
                                    <a href="">GitHub</a>
                                </li>
                                <li className="cursor-pointer hover:text-black">
                                    <a href="">Linked</a>
                                </li>
                            </ul>
                        </div>
                    </div>
               </div>
                <div className="mt-12 pt-6 flex items-center justify-between">
                        <p className="text-gray-400 text-[11.2px] tracking-[0.1rem] font-medium">© 2026 Mr.Discipline. All rights reserved.</p>
                        <DownloadResumeButton style="flex items-center justify-center gap-1.5 text-[11.2px] text-gray-400 capitalize tracking-[0.1rem] cursor-pointer hover:text-black" content="download resume" url={resume}/>
                </div>
            </div>
        </footer>
    )
}