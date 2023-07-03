/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Menu from '../../components';
import MedicoForm from '../../pages/formularioMedico';
import PacienteForm from '../../pages/formularioPaciente';
// import MedicoUpdateForm from '../../pages/formularioMedico/MedicoUpdateForm';
// import PacienteUpdateForm from '../../pages/formularioPaciente/PacienteUpdateForm';
import ListarMedicos from '../../pages/listarMedicos';
import ListarPacientes from '../../pages/listarPacientes';

function Rotas() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/cadastroMedico" element={<MedicoForm/>}/>
        <Route path="/cadastroPaciente" element={<PacienteForm/>}/>
        <Route path="/listarMedicos" element={<ListarMedicos/>}/>
        <Route path='/listarPacientes' element={<ListarPacientes/>}/>
      </Routes>
    </BrowserRouter>
  );
} export default Rotas;
