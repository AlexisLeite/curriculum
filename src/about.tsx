import React, { ReactElement } from 'react';
import Section from './section';

interface Props {}

export default function About({}: Props): ReactElement {
  return (
    <Section id="About" label="">
      <p>
        Desarrollé el sitio web{' '}
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
      <p>
        Actualmente centro mi búsqueda en un cargo como desarrollador con la franca intención de
        desarrollar a cabalidad todo mi potencial y lograr convertirme en un profesional destacado
        del área. Para acompañar ese proceso el año próximo comienzo la carrera de Ingeniería en
        Computación, de la Universidad de la República.
      </p>
    </Section>
  );
}
