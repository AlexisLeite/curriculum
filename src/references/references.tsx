import React, { ReactElement } from 'react';
import Section from './../section';

interface Props {}

export default function References({}: Props): ReactElement {
  const References = [
    {
      name: 'Marcel Ríos',
      position: 'Docente de informática, robótica y telecomunicaciones en UTU.',
      phone: '093-528141',
    },
    {
      name: 'Cra. Silvia Leite',
      position: 'Gerente en BPS',
      phone: '098-444058',
    },
    {
      name: 'Tec. Eduardo Pérez',
      position: 'Taller de reparación de equipos informáticos',
      phone: '091-819875',
    },
    {
      name: 'Tec. Marcelo Caffaro',
      position: 'Técnico electricista',
      phone: '094-384864',
    },
    {
      name: 'Tec. Eduardo Villar',
      position: 'Técnico en electrónica en Automatismos Roma SA',
      phone: '095-529226',
    },
  ];
  return (
    <Section id="References" label="Referencias personales">
      <ul>
        {References.map((reference) => (
          <li key={reference.phone}>
            {reference.name}, {reference.position}. Tel: {reference.phone}.
          </li>
        ))}
      </ul>
    </Section>
  );
}
