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
                                <div className="mt-10 grid md:grid-cols-3">
                                    <div className="p-6 h-93 border-gray-300 sm:border-r">
                                        <h3 className="border-b border-gray-300 text-base pb-5 font-semibold">{skill.skills.header}</h3>
                                        <ul className="mt-5 flex flex-wrap gap-2">
                                            {
                                                skill.skills.name.map(name=>{
                                                    return <li className="border border-gray-300 px-[9.6px] py-[4.8px] text-[11.2px] text-gray-600 tracking-wide" key={crypto.randomUUID()}>{name}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h3>{skill.reactDevelopment.header}</h3>
                                        <ul>
                                            {
                                                skill.reactDevelopment.react.map(development=>{
                                                    return<li key={crypto.randomUUID()}>{development}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h3>{skill.developmentPractices.header}</h3>
                                        <ul>
                                            {
                                                skill.developmentPractices.practices.map(practices=>{
                                                    return<li key={crypto.randomUUID()}>{practices}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            );
                        })
                       }
                      <p>Skills represent practical, applied knowledge built through projects — not self-rated percentages.</p>
                </div>
        </section>
    );
}