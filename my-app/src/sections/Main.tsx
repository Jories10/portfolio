import HeroSection from "./Home/HeroSection";
import AboutSection from "./About/AboutSection";
import "../styles/general.css";
import "../styles/HeroSection.css";

function Main(){
    return(
        <main>
            <HeroSection/>
            <AboutSection/>
        </main>
    )
}
export default Main;