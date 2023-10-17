import { useState } from "react";
import WelcomePage from "./pages/welcomePage";
import HeroPage from "./pages/heroPage";
import WhatIDoPage from "./pages/whatIDo";
function App() {
  return (
    <>
      <WelcomePage />
      <HeroPage />
      <WhatIDoPage />
    </>
  );
}

export default App;
