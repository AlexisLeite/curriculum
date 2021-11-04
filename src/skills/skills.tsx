import React from 'react';
import './skills.sass';
import Section from './../section';
import getTranslations, { translate } from './../translations/translate';

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
  const Skills: { score: number; label: string }[] = getTranslations('skills');
  return (
    <Section label={translate('Habilidades')} id="Skills">
      {Skills.map((skill) => (
        <Skill key={skill.label} score={skill.score} label={skill.label} />
      ))}
    </Section>
  );
}
