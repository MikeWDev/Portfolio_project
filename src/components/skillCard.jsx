import React from "react";

function SkillCard({ data }) {
  return (
    <>
      <div className="skill-card grid">
        <div className="skill-title">
          <h3>{data.title}</h3>
        </div>
        <div className="skill-points grid">
          <ul>
            <li>
              <p>{data.skill_1}</p>
            </li>
            <li>
              <p>{data.skill_2}</p>
            </li>
            <li>
              <p>{data.skill_3}</p>
            </li>
            <li>
              <p>{data.skill_4}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SkillCard;
