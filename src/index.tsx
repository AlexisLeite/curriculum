import React from 'react';
import ReactDOM from 'react-dom';

import About from './about';
import Header from './header/header';
import ProfessionalExperience from './professionalExperience/professionalExperience';
import References from './references/references';
import Skills from './skills/skills';
import Studies from './studies/studies';

import './sheet.sass';
import './global.sass';
import Developed from './developed/developed';

function Sheet() {
  return (
    <>
      <div className="Sheet flexCenter">
        <Skills />
        <Header />
        <About />
        <ProfessionalExperience />
      </div>
      <div className="Sheet">
        <Developed />
        <Studies />
        <References />
      </div>
    </>
  );
}

ReactDOM.render(<Sheet />, document.getElementById('root'));
