import React, { ReactElement } from 'react';
import './studies.sass';
import Section from './../section';

interface StudiesProps {}

export default function Studies({}: StudiesProps): ReactElement {
  const Studies: Record<string, { label: string; details: string[] }> = {
    formal: {
      label: 'Estudios formales',
      details: [
        'Primaria completa, Colegio San José.',
        'Secundaria completa, orientación derecho con promedio 11.',
        '6to de liceo orientación ingeniería en curso.',
        'Bachillerato de informática en UTU 2do año no finalizado.',
      ],
    },
    languages: {
      label: 'Idiomas',
      details: [
        'Inglés: First certificate of competency. ECCE Cambridge English Language Assessment.',
      ],
    },
    nonFormalCertified: {
      label: 'Cursos certificados',
      details: [
        'Javascript avanzado, certificación en curso',
        'Google Learn, introducción al desarrollo web I.',
        'Google Learn, introducción al desarrollo web II.',
        'Cognitive class, Python for data science.',
        'Taller de informática, técnico en redes.',
        'CoCap, mantenimiento eléctrico industrial.',
      ],
    },
    nonFormal: {
      label: 'Estudios no certificados',
      details: [
        'React.js en el portal oficial.',
        'Gatsby en el portal oficial.',
        'Next.js en el portal oficial.',
        'Keystone.js en el portal oficial.',
        'Typescript en el portal oficial.',
        'Ecmascript 6 en el portal oficial.',
        'SASS en el portal oficial.',
        'MongoDB y Mongoose en el portal oficial.',
        'Express en el portal oficial.',
        'Javascript, HTML y CSS en MDN y w3schools.',
        'Jquery en el portal oficial.',
        'Bootstrap en el portal oficial.',
      ],
    },
  };

  return (
    <Section id="Studies">
      {Object.keys(Studies).map((key) => (
        <Section key={key} label={Studies[key].label}>
          <ul>
            {Studies[key].details.map((row, i) => (
              <li key={i}>{row}</li>
            ))}
          </ul>
        </Section>
      ))}
    </Section>
  );
}
