import React from "react";
import Card from "../components/card";
import { designSvg } from "../components/icons";
import { frontEnd } from "../components/icons";
import { backEnd } from "../components/icons";
function WhatIDoPage() {
  const designTitle = "Web design";
  const designContent =
    "I will create wonderfull design of your website following all modern web design rules";
  const frontEndTitle = "Front-end Dev";
  const frontEndContent =
    "I will turn the created design into the code creating powerfull app!";
  const backEndTitle = "Back-end Dev";
  const backEndContent =
    "I will take care of server side logic making sure that your app is working perfectly";

  return (
    <>
      <section className=" wid-section container">
        <div className="wid-heading">
          <h2>What i do?</h2>
        </div>
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
