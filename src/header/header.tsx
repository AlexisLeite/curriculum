import React, { ReactElement } from 'react';
import foto from '../../static/foto.jpg';
import { IoLink, IoLogoGithub, IoLogoLinkedin, IoAtCircle, IoPhonePortrait } from 'react-icons/io5';
import './header.sass';
import { translate } from './../translations/translate';

export function Photo() {
  return <div id="Foto" style={{ backgroundImage: `url("${foto}")` }}></div>;
}

export function ContactRow({
  Element,
  label,
  highlight,
  to,
  noBlank,
}: {
  noBlank?: Boolean;
  Element: ReactElement;
  label: string;
  highlight: string;
  to: string;
}) {
  const props: { href: string; className: string; target?: string } = {
    href: to,
    className: 'ContactRow',
  };
  if (!noBlank) props.target = '_blanks';

  return (
    <a {...props}>
      <span>{label}</span>
      <span>{highlight}</span> {Element}
    </a>
  );
}

export function ContactInfo() {
  return (
    <div id="ContactInfo">
      <ContactRow
        Element={<IoLink />}
        to="http://www.uyucode.net"
        label=""
        highlight="www.uyucode.net"
      />
      <ContactRow
        Element={<IoLogoGithub />}
        to="http://www.github.com/alexisleite"
        label="www.github.com"
        highlight="/alexisleite"
      />
      <ContactRow
        Element={<IoLogoLinkedin />}
        to="http://www.linkedin.com/in/alexisleite"
        label="www.linkedin.com/in"
        highlight="/alexisleite"
      />
      <ContactRow
        Element={<IoAtCircle />}
        to="mailto:alexisleite.uy@gmail.com"
        label=""
        highlight="alexisleite.uy@gmail.com"
        noBlank
      />
      <ContactRow
        Element={<IoPhonePortrait />}
        noBlank
        to="tel:+59899105304"
        label=""
        highlight="+59899105304"
      />
    </div>
  );
}

export default function Header() {
  return (
    <div className="Header">
      <Photo />
      <div id="NameAndTitle">
        <h1>Alexis Leite</h1>
        <h3>{translate('Desarrollador web fullstack')}</h3>
      </div>
      <ContactInfo />
    </div>
  );
}
