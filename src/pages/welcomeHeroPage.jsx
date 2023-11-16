import HeroPage from "./heroPage";
import WelcomePage from "./welcomePage";

const HeroWelcomePage = () => {
    return ( <>
        <section className="obs-class">
            <WelcomePage/>
            <HeroPage id="hero"/>
        </section>
    </> );
}
 
export default HeroWelcomePage;