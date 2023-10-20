import { useState } from "react";
import WelcomePage from "./pages/welcomePage";
import HeroPage from "./pages/heroPage";
import WhatIDoPage from "./pages/whatIDo";
import AboutMePage from "./pages/aboutMePage";
import RecentProjects from "./pages/mostRecProjects";
import Footer from "./pages/footer";
import Cta from "./pages/cta";
function App() {
  return (
    <>
      <WelcomePage />
      <HeroPage />
      <WhatIDoPage />
      <AboutMePage />
      <RecentProjects />
      <Cta />
      <Footer></Footer>
    </>
  );
}

export default App;
