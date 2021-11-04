import React, { ReactElement } from 'react';
import Section from './section';

interface Props {}

export default function About({}: Props): ReactElement {
  return (
    <Section id="About" label="">
      <p>{/**TRANSLATE about_paragraph1 */}</p>
      <p>{/**TRANSLATE about_paragraph2 */}</p>
    </Section>
  );
}
