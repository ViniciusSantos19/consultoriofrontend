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
        <li className='dropDown'>
          <Link to="/cadastroMedico" className="active">Cadastro Médico</Link>
          <div className='dropDown-menu'>
            <Link to="/cadastroMedico" className="active">Cadastro Médico</Link>
            <Link to="/cadastroMedico" className="active">Cadastro Médico</Link>
            <Link to="/cadastroMedico" className="active">Cadastro Médico</Link>
          </div>
        </li>
        <li className='dropDown'>
          <Link to="/cadastroPaciente" className="active">Cadastro Paciente</Link>
          <div className='dropDown-menu'>
            <Link to="/cadastroPaciente" className="active">Cadastro Paciente</Link>
            <Link to="/cadastroPaciente" className="active">Cadastro Paciente</Link>
            <Link to="/cadastroPaciente" className="active">Cadastro Paciente</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
