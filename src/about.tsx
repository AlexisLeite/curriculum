import React, { ReactElement } from 'react';
import Section from './section';

interface Props {}

export default function About({}: Props): ReactElement {
  return (
    <Section id="About" label="">
      <p>
        Actualmente centro mi búsqueda en un cargo como desarrollador con la intención de
        desarrollar todo mi potencial y lograr convertirme en un profesional destacado del área, así
        como aportar el mayour valor a la empresa en la que me desempeñe.
      </p>
      <p>
        En la búsqueda por aprender y mejorar mis habilidades, desarrollé el sitio web{' '}
        <a href="http://www.incipiosrl.com.uy" target="_blank" className="Highlight">
          www.incipiosrl.com.uy
        </a>
        , mi portal personal{' '}
        <a className="Highlight" href="http://www.uyucode.net" target="_blank">
          www.uyucode.net
        </a>{' '}
        con su página de documentación{' '}
        <a
          className="Highlight"
          href="http://www.uyucode.net/documentación/matemagica"
          target="_blank"
        >
          www.uyucode.net/documentación/matemagica
        </a>{' '}
        así como varias aplicaciones, las cuales se pueden ver funcionando en el portal mencionado.{' '}
        Versión en línea:{' '}
        <a className="Highlight" href="http://www.uyucode.net/curriculum" target="_blank">
          www.uyucode.net/curriculum
        </a>
        .
      </p>
    </Section>
  );
}
