import HeroSection from "./Home/HeroSection";
import AboutSection from "./About/AboutSection";
import SkillsSection from "./Skills/SkillsSection";
import "../styles/general.css";
import "../styles/HeroSection.css";

function Main(){
    return(
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
        </main>
    )
}
export default Main;