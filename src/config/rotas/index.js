/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Menu from '../../components';
import MedicoForm from '../../pages/formularioMedico';
import PacienteForm from '../../pages/formularioPaciente';
import AtualizaMedicoForm from '../../pages/formularioMedico/MedicoUpdateForm';
import AtualizaPacienteForm from '../../pages/formularioPaciente/PacienteUpdateForm';
import ListarMedicos from '../../pages/listarMedicos';
import ListarPacientes from '../../pages/listarPacientes';
import ConsultaForm from '../../pages/formulárioConsulta';

function Rotas() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/cadastroMedico" element={<MedicoForm/>}/>
        <Route path="/cadastroPaciente" element={<PacienteForm/>}/>
        <Route path="/listarMedicos" element={<ListarMedicos/>}/>
        <Route path='/listarPacientes' element={<ListarPacientes/>}/>
        <Route path='/atualizarMedicos/:crm' element={<AtualizaMedicoForm/>}/>
        <Route path='/atualizarPacientes/:cpf' element={<AtualizaPacienteForm/>}/>
        <Route path='/cadastroConsulta' element={<ConsultaForm/>}/>
      </Routes>
    </BrowserRouter>
  );
} export default Rotas;
