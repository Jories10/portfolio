import { projects } from "../../data/projects";

export default function ProjectSection(){
    return(
        <section id="projects">
            <div className="mx-auto w-full max-w-6xl px-8 py-32 xl:mx-508">
                <div className="flex justify-between items-end">
                    <p className="uppercase text-gray-400 text-[10px] tracking-[0.1rem]">projects</p>
                    <h2 className="mt-3 text-4xl font-medium tracking-tight  sm:text-5xl">Proof of work.</h2>
                    <p className="text-[11.2px] text-gray-400 tracking-[0.1rem] font-medium">{projects.length} projects</p>
                </div>
                <div className="mt-12 grid sm:grid-cols-2 border border-gray-300 border-t">
                    <article className="group flex flex-col border-gray-300 border-b border-r">
                        <div className="relative grid aspect-16/8 place-items-center bg-gray-100 ">
                            <span className="absolute right-4 top-4 uppercase tracking-wider bg-gray-950 text-[10.4px] text-white py-[2.4px] px-[7.2px]">UI/UX</span>
                            <div className="text-center transition-transform duration-300 group-hover:nth-[2]:-translate-y-1 " aria-hidden="true">
                                <p className="text-[10px] text-gray-400 tracking-[0.1rem]">UI/UX</p>
                                <p className="mt-1 text-2xl text-gray-400">01</p>
                            </div>
                        </div>
                        <div>
                               <h3 className="font-display text-lg font-medium">Burger — Landing Page</h3>
                               <p>{projects[0].description}</p>
                               <ul>
                                  {
                                    projects[0].technologies.map(techStack=>(<li key={crypto.randomUUID()}>{techStack}</li>))
                                  }
                               </ul>
                        </div>
                    </article>
                    <article>
                        <div>
                            <span>UI/UX</span>
                            <div>
                                <p>UI/UX</p>
                                <p>02</p>
                            </div>
                            <div>
                               <h3 className="font-display text-lg font-medium">Coffee — Landing Page</h3>
                               <p>{projects[1].description}</p>
                               <ul>
                                  {
                                    projects[1].technologies.map(techStack=>(<li key={crypto.randomUUID()}>{techStack}</li>))
                                  }
                               </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}