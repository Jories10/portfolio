import HeroSection from "./Home/HeroSection";
import AboutSection from "./About/AboutSection";
import SkillsSection from "./Skills/SkillsSection";
import ProjectSection from "./Projects/ProjectSection";
import "../styles/general.css";
import "../styles/HeroSection.css";

function Main(){
    return(
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
        </main>
    )
}
export default Main;