import React, { ReactElement } from 'react';
import './professionalExperience.sass';
import getTranslations, { translate } from './../translations/translate';

interface Props {}

interface WorkDetails {
  company: string;
  position: string;
  since: string;
  to: string;
  responsibilities: string[];
  disengagementReason: string;
  referer: {
    name: string;
    position: string;
    phone: string;
  };
}

function Experience({ details }: { details: WorkDetails }) {
  return (
    <div className="Experience">
      <strong>{translate('Empresa')}: </strong>
      {details.company}.<strong>{translate('Cargo')}: </strong>
      {details.position}.
      <span>
        {details.since} - {details.to}.
      </span>
      <ul className="Responsibilities">
        {details.responsibilities.map((responsibility, i) => (
          <li key={i}>{responsibility}</li>
        ))}
      </ul>
      <div className="Referer">
        <strong>{translate('Contacto')}:</strong> {details.referer.name} ({details.referer.position}
        ). {translate('Tel')}: {details.referer.phone}.
      </div>
    </div>
  );
}

export default function ProfessionalExperience({}: Props): ReactElement {
  const Experiences: {
    company: string;
    position: string;
    since: string;
    to: string;
    responsibilities: string[];
    disengagementReason: string;
    referer: {
      name: string;
      position: string;
      phone: string;
    };
  }[] = getTranslations('professionalExperience');
  return (
    <div id="ProfessionalExperience">
      <h3>{translate('Experiencia profesional')}</h3>
      {Experiences.map((details) => (
        <Experience key={details.company} details={details} />
      ))}
    </div>
  );
}
