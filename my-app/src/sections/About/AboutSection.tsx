type Background = {
    label:string,
    header:string,
    content:string
}
export default function AboutSection(){
    const myBackground:Background[] = [
        { 
            label:"background",
            header:"BIST Graduate",
            content:"Bachelor of Science in Information Technology — the foundation from which I transitioned into specialized frontend development, combining academic theory with hands-on project work."
        },
        {
            label:"focus",
            header:"React Developer",
            content:"I specialize in building user interfaces with React and TypeScript. My work prioritizes component architecture, clean code, and responsive layouts that perform well on every device."
        },
        {
            label:"philosophy",
            header:"Discipline Over Talent",
            content:"Consistency beats bursts of inspiration. I commit to daily practice, deliberate code review, and continuous learning — believing that disciplined effort compounds into skill over time."
        },
        {
            label:"goal",
            header:"Grow With a Team",
            content:"I am looking for a team that values clean architecture and code quality — where I can contribute immediately, learn from experienced engineers, and grow into a well-rounded frontend engineer."
        }

    ];
    return (
        <section id="about">
            <div className="py-32 px-8 lg:mx-14 xl:mx-50">
                <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-[0.2rem]">About Me</p>
                    <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">Whom I am.</h2>
                    <p className="mt-6 max-w-xs text-sm leading-relaxed">A junior frontend developer who approaches every line of code with intention, discipline, and a long-term growth mindset.</p>
                </div>
                <div className="grid sm:grid-cols-2" >
                    {
                        myBackground.map(backgroundData=>{
                            return(
                                <article className="p-6 first:border-b border-gray-300 nth-[2]:border-l nth-[2]:border-b last:border-l ">
                                    <p className="text-gray-400 uppercase text-[10px] tracking-[0.1rem]">{backgroundData.label}</p>
                                    <h3 className="text-lg mt-3">{backgroundData.header}</h3>
                                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">{backgroundData.content}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}