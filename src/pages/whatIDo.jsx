import React from "react";
import Card from "../components/card";
import { designSvg } from "../components/icons";
import { frontEnd } from "../components/icons";
import { backEnd } from "../components/icons";
function WhatIDoPage() {
  const designTitle = "Web design";
  const designContent =
    "I will create wonderfull design of your website following all, web design rules so something";
  const frontEndTitle = "Front-end Dev";
  const frontEndContent =
    "Implement entire design to the code to create powerfull app";
  const backEndTitle = "Back-end Dev";
  const backEndContent =
    "Create fully working server side code so your website can run all day and all night without stopping";

  return (
    <>
      <section className=" wid-section container">
        <div className="grid grid--3-col container wid">
          <Card svg={designSvg} title={designTitle} content={designContent} />
          <Card
            svg={frontEnd}
            title={frontEndTitle}
            content={frontEndContent}
          />
          <Card svg={backEnd} title={backEndTitle} content={backEndContent} />
        </div>
      </section>
    </>
  );
}

export default WhatIDoPage;
