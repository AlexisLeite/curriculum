import React from 'react';
import './skills.sass';
import Section from './../section';

function Skill({ score, label }: { score: number; label: string }) {
  const skillPoints = [];
  for (let i = 0; i < 5; i++) {
    if (i < score) {
      skillPoints.push(<div className="SkillPointFull SkillPoint" key={i}></div>);
    } else {
      skillPoints.push(<div className="SkillPointEmpty SkillPoint" key={i}></div>);
    }
  }

  return (
    <div className="Skill">
      {skillPoints}
      <div className="SkillLabel">{label}</div>
    </div>
  );
}

export default function Skills() {
  const Skills = [
    { score: 5, label: 'React.js' },
    { score: 5, label: 'Html 5' },
    { score: 5, label: 'PHP' },
    { score: 5, label: 'Javascript' },
    { score: 4, label: 'Typescript' },
    { score: 4, label: 'Gatsby' },
    { score: 4, label: 'Next.js' },
    { score: 4, label: 'Regex' },
    { score: 3, label: 'MongoDB' },
    { score: 3, label: 'Keyston.js' },
    { score: 3, label: 'Firebase' },
    { score: 3, label: 'GraphQl' },
  ];
  return (
    <Section label="Habilidades" id="Skills">
      {Skills.map((skill) => (
        <Skill key={skill.label} score={skill.score} label={skill.label} />
      ))}
      {/* <div id="OtherSkills">
        <h5>Otras:</h5>
        <span>Keystone, Http, API</span>
      </div> */}
    </Section>
  );
}
