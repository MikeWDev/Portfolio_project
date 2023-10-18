import React from "react";

function SkillCard() {
  return (
    <>
      <div className="skill-card grid">
        <div className="skill-title">
          <h3>FRONT-END</h3>
        </div>
        <div className="skill-points grid">
          <ul>
            <li>
              <p>{props.skill_1}</p>
            </li>
            <li>
              <p>{props.skill_2}</p>
            </li>
            <li>
              <p>{props.skill_3}</p>
            </li>
            <li>
              <p>{props.skill_4}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SkillCard;
