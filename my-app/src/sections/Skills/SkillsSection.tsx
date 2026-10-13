import { skillsDetails } from "../../data/skills";

export default function SkillsSection(){
    return(
        <section id="skills">
                <div className="mx-auto w-full max-w-6xl px-8 py-32 lg:mx-14 xl:mx-50">
                      <p className="uppercase text-[10px] tracking-[0.3rem] text-gray-400">Skills</p> 
                      <h2 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">What I work with.</h2>
                    
                      {
                        skillsDetails.map((skill)=>{
                            return(
                                <div className="mt-10 grid md:grid-cols-3" key={crypto.randomUUID()}>
                                    <div className="px-0 py-6 sm:p-6 h-auto sm-93 border-gray-300 border-b md:border-b-0 border-r-0 md:border-r">
                                        <h3 className="border-b border-gray-300 text-base pb-5 font-semibold">{skill.skills.header}</h3>
                                        <ul className="mt-5 flex flex-wrap gap-2">
                                            {
                                                skill.skills.name.map(name=>{
                                                    return <li className="border border-gray-300 px-[9.6px] py-[4.8px] text-[11.2px] text-gray-600 tracking-wide" key={crypto.randomUUID()}>{name}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="px-0 py-5 md:p-5 border-gray-300 border-b md:border-b-0 border-r-0 md:border-r">
                                        <h3 className="border-b border-gray-300 px-0 pb-5 sm:pb-5 text-base font-medium">{skill.reactDevelopment.header}</h3>
                                        <ul className="mt-5 flex flex-wrap gap-2">
                                            {
                                                skill.reactDevelopment.react.map(development=>{
                                                    return<li className=" text-[11.2px] text-gray-500 border border-gray-300 py-[4.8px] px-[9.6px]" key={crypto.randomUUID()}>{development}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="px-0 py-5 md:p-5">
                                        <h3 className="border-b border-gray-300 px-0 pb-5 sm:pb-5 text-base font-medium">{skill.developmentPractices.header}</h3>
                                        <ul className="mt-5 flex flex-wrap gap-2">
                                            {
                                                skill.developmentPractices.practices.map(practices=>{
                                                    return<li className="text-[11.2px] text-gray-500 border border-gray-300 py-[4.8px] px-[9.6px]" key={crypto.randomUUID()}>{practices}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            );
                        })
                       }
                      <p className="text-[11.2px] text-gray-500 mt-10 pt-6 border-t border-gray-300">Skills represent practical, applied knowledge built through projects — not self-rated percentages.</p>
                </div>
        </section>
    );
}