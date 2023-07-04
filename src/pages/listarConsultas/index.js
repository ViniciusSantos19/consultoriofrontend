/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import {remove, getAll} from '../../services/consultaService';
import '../../style/listar.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ListarConsultas() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const Cancelamento = {motivoCancelamento: 'outros'};
  const [selectedOption, setSelectedOption] = useState(Cancelamento);


  const handleDelete = async (id, selectedOption) => {
    const ConsultaDeleteDto = {
      motivoCancelamento: selectedOption.MotivoCancelamento,
    };
    console.log(ConsultaDeleteDto);
    const deleteConsultaDtoJson = JSON.stringify(ConsultaDeleteDto);
    await remove(id, deleteConsultaDtoJson).then((response)=>{
      setGroups(groups.filter((group) => group.id !== id));
      console.log(response.data);
      toast.success('Consulta apagada com sucesso');
    }).catch((error)=>{
      console.log(error);
      toast.error('Erro ao apagar consulta');
    });
  };

  useEffect(() =>{
    setLoading(true);
    getAll(1).then(function(response) {
      setGroups(response.data);
      setLoading(false);
    }).catch(function(error) {
      console.log(error);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setSelectedOption({...selectedOption, [name]: value});
  };

  const consultaList = groups.map((group) => {
    return (
      <tr key={group.id} className='rows'>
        <td>{group.id}</td>
        <td>{group.nomeMedico}</td>
        <td>{group.nomePaciente}</td>
        <td>{group.dataHora}</td>
        <td>
          <div className='botoes'>
            <select id="combobox" onChange={handleChange} name='motivoCancelamento'>
              <option value="">Selecione</option>
              <option value="pacienteDesistiu">Paciente desistiu</option>
              <option value="médicoCancelou">Medico cancelou</option>
              <option value="outros">Outros</option>
            </select>
            <button size="sm" className='deletar' onClick={() => handleDelete(group.id, selectedOption)}>Deletar</button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className='container'>
      <h3 className='titulo'>Consultas</h3>
      <table className="tabela">
        <thead>
          <tr>
            <th width="20%">Id consulta</th>
            <th width="20%">Nome médico</th>
            <th width="20%">Nome paciente</th>
            <th width="10%">Data e hora da consulta</th>
            <th width="20%">Cancelar</th>
          </tr>
        </thead>
        <tbody>
          {consultaList}
        </tbody>
      </table>
      <ToastContainer/>
    </div>
  );
} export default ListarConsultas;
