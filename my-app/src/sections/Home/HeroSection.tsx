import DownloadResumButton from "../../components/Buttons/DownloadResumeButton";

function Herosection() {
    return (
        <section>
            <div>
                <div>
                    <span>available for opportunities</span>
                    <span>junior frontend developer</span>
                </div>
                <h1>Mr.<span>Discipline</span></h1>
                <p>I build responsive, modern, and user-friendly web applications with React. writing clean, maintainable code by discipline.</p>
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
            </div>
            <div>
                <span>Front React TypeScript</span>
            </div>
        </section>
    )
}

export default Herosection;