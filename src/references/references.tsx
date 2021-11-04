import React, { ReactElement } from 'react';
import Section from './../section';
import getTranslations, { translate } from './../translations/translate';

interface Props {}

export default function References({}: Props): ReactElement {
  const References: { name: string; position: string; phone: string }[] =
    getTranslations('references');
  return (
    <Section id="References" label={translate('Referencias personales')}>
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
