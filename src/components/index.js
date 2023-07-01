/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

// eslint-disable-next-line require-jsdoc
import {Link} from 'react-router-dom';
import React from 'react';
import './index.css';
function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cadastroMedico" className="active">Cadastro Médico</Link></li>
        <li><Link to="/cadastroPaciente" className="active">Cadastro Paciente</Link></li>
      </ul>
    </nav>
  );
}
export default Menu;
