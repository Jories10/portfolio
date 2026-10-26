import HeroSection from "./Home/HeroSection";
import AboutSection from "./About/AboutSection";
import SkillsSection from "./Skills/SkillsSection";
import ProjectSection from "./Projects/ProjectSection";
import ContactSection from "./Contact/ContactSection";
import "../styles/general.css";
import "../styles/HeroSection.css";

function Main(){
    return(
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
    )
}
export default Main;