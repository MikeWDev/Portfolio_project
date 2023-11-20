import WhatIDoPage from "./pages/whatIDo";
import AboutMePage from "./pages/aboutMePage";
import RecentProjects from "./pages/mostRecProjects";
import Footer from "./pages/footer";
import Cta from "./pages/cta";
import "./component-style.css";
import "./page-styles.css";
import "./queries.css";
import HeroWelcomePage from "./pages/welcomeHeroPage";

function App() {
  return (
    <>
      <HeroWelcomePage />
      <WhatIDoPage />
      <AboutMePage id="about" />
      <RecentProjects id="rp" />
      <Cta id="ctaction" />
      <Footer />
    </>
  );
}

export default App;
