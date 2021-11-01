import React, { ReactElement } from 'react';
import './professionalExperience.sass';

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
      <strong>Empresa: </strong>
      {details.company}.<strong>Cargo: </strong>
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
        <strong>Contacto:</strong> {details.referer.name} ({details.referer.position}). Tel:{' '}
        {details.referer.phone}.
      </div>
    </div>
  );
}

export default function ProfessionalExperience({}: Props): ReactElement {
  const Experiences = [
    {
      company: 'Incipio SRL',
      position: 'Desarrollador web',
      since: '2018',
      to: '2021',
      responsibilities: ['Desarrollo y mantenimiento del sitio web de la empresa.'],
      disengagementReason: 'Tarea en curso',
      referer: {
        name: 'Cra. Silvia Leite',
        position: 'Directora financiera y Gerente en BPS',
        phone: '098-444058',
      },
    },
    {
      company: 'Automatismos Roma SA',
      position: 'Oficial electricista',
      since: '12/2020',
      to: '10/2021',
      responsibilities: [
        'Mantenimiento, reparación y diagnóstico de equipos de automatización.',
        'Instalación de sistemas de automatización y relevamiento de datos.',
        'Conducción de vehículo de la empresa con herramental específico del cargo.',
      ],
      disengagementReason: 'Reestructura',
      referer: {
        name: 'Andrés Iglesias',
        position: 'Jefe técnico',
        phone: '098-807847',
      },
    },
    {
      company: 'Incipio SRL',
      position: 'Oficial',
      since: '2017',
      to: '12/2020',
      responsibilities: [
        'Instalación de equipos informáticos y redes en oficinas de la empresa.',
        'Instalación de sistemas de alarmas y videovigilancia en obras.',
        'Coordinación de equipos de recursos humanos.',
      ],
      disengagementReason: 'Cambio de trabajo',
      referer: {
        name: 'Arq. Andrea Barboza',
        position: 'Directora de obras',
        phone: '092-178017',
      },
    },
    {
      company: 'Godilco SA',
      position: 'Oficial',
      since: '2015',
      to: '2017',
      responsibilities: [
        'Instalación y mantenimiento de sistemas de riego en planta de carga.',
        'Mantenimiento y expansión de oficinas y talleres en planta.',
      ],
      disengagementReason: 'Cambio de trabajo',
      referer: {
        name: 'Luis Correa',
        position: 'Capataz de planta',
        phone: '095-884665',
      },
    },
  ];
  return (
    <div id="ProfessionalExperience">
      <h3>Experiencia profesional</h3>
      {Experiences.map((details) => (
        <Experience key={details.company} details={details} />
      ))}
    </div>
  );
}
