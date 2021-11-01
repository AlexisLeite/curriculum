import React, { ReactElement } from 'react';
import Section from './../section';

interface Props {}

export default function Developed({}: Props): ReactElement {
  const Developed = [
    {
      name: 'Portal de Incipio Srl',
      counterPart: 'Cra. Silvia Leite',
      description: 'Portal de la empresa constructora Incipio Srl desarrollado en Gatsby.',
      link: 'http://www.incipiosrl.com.uy',
    },
    {
      name: 'Gestor de clientes',
      counterPart: 'Eduardo Pérez',
      description:
        'Gestor de clientes y órdenes de trabajo para un taller de informática desarrollado en React, Express y MongoDB.',
      link: 'http://www.uyucode.net/app/clienter/',
    },
    {
      name: 'Matemagica, enseñanza de matemáticas',
      description:
        'Portal de enseñanza de matemáticas desarrollado en javascript y PHP con posibilidad de implementar nuevas secciones temáticas.',
      link: 'http://www.uyucode.net/app/matemagica/',
    },
    {
      name: 'Portal de documentación',
      description:
        'Portal desarrollado en Gatsby con la documentación correspondiente a las aplicaciones desarrolladas.',
      link: 'http://www.uyucode.net/documentación/matemagica/',
    },
    {
      name: 'Ta, te, ti con IA',
      description:
        'Juego de ta, te. ti desarrollado en React con inteligencia artificial desarrollada en PHP, enteramente por mi.',
      link: 'http://www.uyucode.net/app/tic tac toe/',
    },
    {
      name: 'Aplicación de chat',
      description: 'Aplicación sencilla de chat desarrollada en React.',
      link: 'http://www.uyucode.net/app/chat/',
    },
    {
      name: 'Curriculum',
      description:
        'Este curriculum está desarrollado en React y Typescript, se puede ver su código fuente en GitHub.',
      link: 'http://www.github.com/alexisleite/curriculum/',
    },
  ];
  return (
    <Section label="Desarrollos realizados">
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
