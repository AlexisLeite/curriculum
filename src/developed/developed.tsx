import React, { ReactElement } from 'react';
import Section from './../section';
import getTranslations, { translate } from './../translations/translate';

interface Props {}

export default function Developed({}: Props): ReactElement {
  const Developed: { name: string; counterPart?: string; description: string; link: string }[] =
    getTranslations('developed');
  return (
    <Section label={translate('Desarrollos realizados')}>
      <ul>
        {Developed.map((developed) => (
          <li key={developed.name}>
            <a href={developed.link} target="_blank">
              {developed.name}
            </a>
            : {developed.description}
            {developed.counterPart && (
              <span>
                {' '}
                <strong>Contraparte: </strong>
                {developed.counterPart}.
              </span>
            )}{' '}
            <strong className="only-print">{developed.link}.</strong>
          </li>
        ))}
      </ul>
    </Section>
  );
}
