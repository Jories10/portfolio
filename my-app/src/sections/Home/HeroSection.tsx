import DownloadResumButton from "../../components/Buttons/DownloadResumeButton";

function Herosection() {
    const techListSkills:string = "border border-gray-300 px-[9.6px] py-[4.8px]";

    return (
        <section id="home">
            <div className="px-8 pt-24 pb-0 lg:mx-14 xl:mx-50">
                <div>
                    <p id="available-opportunity" className="uppercase text-gray-400 text-xs tracking-widest  ">available for opportunities</p>
                    <p className="flex items-center gap-2 capitalize text-[0.8rem] mt-3 text-gray-500"><span className="w-1.5 h-1.5 rounded-full bg-black"></span> junior frontend developer</p>
                </div>
                <h1 className=" mt-8 font-medium text-[clamp(3.5rem,11vw,6.5rem)] leading-[0.95] tracking-[-0.04em]"><span className="block">Mr.</span>Discipline</h1>
                <p className="max-w-md mt-6 text-lg sm:text-xl leading-relaxed text-gray-600 ">I build responsive, modern, and user-friendly web applications with React. writing clean, maintainable code by discipline.</p>
                <div className="flex flex-wrap gap-3.5 mt-8">
                    <button className="flex items-center justify-center w-full min-[450px]:w-auto h-[49.6px] bg-black text-white px-5 gap-2">
                        <span>view projects </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </button>
                    <DownloadResumButton content="Download Resume"/>
                </div>
                <div className="mt-10">
                    <ul className="flex flex-wrap text-gray-600 text-xs gap-3 font-[JetBrains_Mono]">
                        <li className={techListSkills}>HTML5</li>
                        <li className={techListSkills}>CSS3</li>
                        <li className={techListSkills}>JavaScript</li>
                        <li className={techListSkills}>React</li>
                        <li className={techListSkills}>TypeScript</li>
                        <li className={techListSkills}>Tailwind <span>CSS</span></li>
                    </ul>
                </div>
                <p className="text-gray-500 uppercase text-center absolute right-8 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] lg:block font-[JetBrains Mono]">
                FRONTEND 
                <span className="bg-gray-500 rounded-full w-1 h-1 lg:inline-block "></span> 
                React 
                <span className="bg-gray-500 rounded-full w-1 h-1 lg:inline-block "></span> 
                TypeScript</p>
                <div>
                    <span>PORTFOLIO 2026</span>
                    <button>
                        SCROLL TO EXPLORE
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down h-3 w-3" aria-hidden="true"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Herosection;