import React, { ReactElement } from 'react';
import './studies.sass';
import Section from './../section';
import getTranslations from '../translations/translate';

interface StudiesProps {}
const StudiesMap: Record<string, { label: string; details: string[] }> = getTranslations('studies');

export default function Studies({}: StudiesProps): ReactElement {
  console.log(StudiesMap);
  return (
    <Section id="Studies">
      {Object.keys(StudiesMap).map((key) => (
        <Section key={key} label={StudiesMap[key].label}>
          <ul>
            {StudiesMap[key].details.map((row, i) => (
              <li key={i}>{row}</li>
            ))}
          </ul>
        </Section>
      ))}
    </Section>
  );
}
