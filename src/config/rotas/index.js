/* eslint-disable require-jsdoc */
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Menu from '../../components';
import MedicoForm from '../../pages/formularioMedico';
import PacienteForm from '../../pages/formularioPaciente';

function Rotas() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/cadastroMedico" element={<MedicoForm/>}/>
        <Route path="/cadastroPaciente" element={<PacienteForm/>}/>
      </Routes>
    </BrowserRouter>
  );
} export default Rotas;
