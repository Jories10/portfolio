import DownloadResumButton from "../../components/Buttons/DownloadResumeButton";

function Herosection() {
    return (
        <section id="home">
            <div className="px-8 pt-24 pb-0 lg:mx-14 xl:mx-50">
                <div>
                    <p id="available-opportunity" className="uppercase text-gray-400 text-xs tracking-widest  ">available for opportunities</p>
                    <p className="flex items-center gap-2 capitalize text-[0.8rem] mt-3 text-gray-500"><span className="w-1.5 h-1.5 rounded-full bg-black"></span> junior frontend developer</p>
                </div>
                <h1 className=" mt-8 font-medium text-[clamp(3.5rem,11vw,6.5rem)] leading-[0.95] tracking-[-0.04em]"><span className="block">Mr.</span>Discipline</h1>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 w-full max-w-xl">I build responsive, modern, and user-friendly web applications with React. writing clean, maintainable code by discipline.</p>
                <div>
                    <button>view projects →</button>
                    <DownloadResumButton content="Download Resume"/>
                </div>
                <div>
                    <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>javascript</li>
                        <li>react</li>
                        <li>typescript</li>
                        <li>tailwind <span>css</span></li>
                    </ul>
                </div>
                <span>Front React TypeScript</span>
            </div>
        </section>
    )
}

export default Herosection;