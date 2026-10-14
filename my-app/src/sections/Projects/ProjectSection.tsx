import { projects } from "../../data/projects";
import burger from "../../assets/images/burger.png";
import coffee from "../../assets/images/coffee.png";
export default function ProjectSection(){
    return(
        <section id="projects">
            <div className="mx-auto w-full max-w-6xl px-8 py-32">
                <div className="flex justify-between items-end">
                    <p className="uppercase text-gray-400 text-[10px] tracking-[0.1rem]">projects</p>
                    <h2 className="mt-3 text-4xl font-medium tracking-tight  sm:text-5xl">Proof of work.</h2>
                    <p className="text-[11.2px] text-gray-400 tracking-[0.1rem] font-medium">{projects.length} projects</p>
                </div>
                <div className="mt-12 grid sm:grid-cols-2 border border-gray-300 border-t">
                    <article className="flex flex-col border-gray-300 border-b border-r">
                        <div className="relative grid aspect-16/8 place-items-center bg-gray-100 ">
                            <img src={burger} alt="Burger Image" className="absolute top-0 left-0 right-0 bottom-0 z-0 "/>
                            <span className="absolute right-4 top-2 uppercase tracking-[0.2rem] bg-gray-300 text-[10.4px] text-black py-[2.4px] px-[7.2px]">UI/UX</span>
                        </div>
                        <div className="p-6">
                               <h3 className="font-display text-lg font-medium">Burger — Landing Page</h3>
                               <p className="mt-3.5 text-sm text-gray-500 leading-relaxed">{projects[0].description}</p>
                               <ul className=" mt-4 flex flex-wrap items-center  gap-1.5 pb-1.5 border-b border-gray-300" aria-label="Technologies">
                                  {
                                    projects[0].technologies.map(techStack=>(<li className="text-[10.4px] bg-gray-950 text-gray-100 py-[2.4px] px-[7.2px] font-medium tracking-wider" key={crypto.randomUUID()}>{techStack}</li>))
                                  }
                               </ul>
                                <div className="flex pt-4 gap-3">
                                    <a href="https://jories10.github.io/burger-landing-page/" target="_blank" rel="noopener noreferer"  className="inline-flex items-center gap-1.5 capitalize text-xs font-medium hover:underline cursor-pointer tracking-wider">
                                        view project
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-3 w-3" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                    </a>
                                    <a href="https://github.com/Jories10/burger-landing-page.git" target="_blank" className="text-gray-400 hover:text-black text-xs capitalize">source code</a>
                                </div>
                        </div>
                    </article>
                    <article className="flex flex-col border-gray-300 border-b border-r">
                        <div className="relative grid aspect-16/8 place-items-center bg-gray-100 ">
                            <img src={coffee} alt="Burger Image" className="absolute top-0 left-0 right-0 bottom-0 z-0 "/>
                            <span className="absolute right-4 top-2 uppercase tracking-[0.2rem] bg-gray-300 text-[10.4px] text-black py-[2.4px] px-[7.2px]">UI/UX</span>
                        </div>
                        <div className="p-6">
                               <h3 className="font-display text-lg font-medium">Coffee — Landing Page</h3>
                               <p className="mt-3.5 text-sm text-gray-500 leading-relaxed">{projects[1].description}</p>
                               <ul className=" mt-4 flex flex-wrap items-center  gap-1.5 pb-1.5 border-b border-gray-300" aria-label="Technologies">
                                  {
                                    projects[1].technologies.map(techStack=>(<li className="text-[10.4px] bg-gray-950 text-gray-100 py-[2.4px] px-[7.2px] font-medium tracking-wider" key={crypto.randomUUID()}>{techStack}</li>))
                                  }
                               </ul>
                                <div className="flex pt-4 gap-3">
                                    <a href="https://jories10.github.io/coffee-landing-page/" target="_blank" rel="noopener noreferer"  className="inline-flex items-center gap-1.5 capitalize text-xs font-medium hover:underline cursor-pointer tracking-wider">
                                        view project
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-3 w-3" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                    </a>
                                    <a href="https://github.com/Jories10/coffee-landing-page" target="_blank" rel="noopener noreferer" className="text-gray-400 hover:text-black text-xs capitalize">source code</a>
                                </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}