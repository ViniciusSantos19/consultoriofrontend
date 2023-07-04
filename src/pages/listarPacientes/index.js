/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import {remove, getAll} from '../../services/pacienteService';
import {Link} from 'react-router-dom';
import '../../style/listar.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ListarPacientes() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleDelete = async (cpf) => {
    await remove(cpf).then((response)=>{
      setGroups(groups.filter((group) => group.cpf !== cpf));
      console.log(response.data);
      toast.success('Paciente apagado com sucesso');
    }).catch((error)=>{
      console.log(error);
      toast.error('Erro ao apagar paciente');
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

  const pacienteList = groups.map((group) => {
    return (
      <tr key={group.cpf} className='rows'>
        <td>{group.nome}</td>
        <td>{group.email}</td>
        <td>{group.cpf}</td>
        <td>
          <div className=' botoes'>
            <Link to={`/atualizarPacientes/${group.cpf}`}>
              <button size="sm" className='atualizar'>atualizar</button>
            </Link>
            <button size="sm" className='deletar' onClick={() => handleDelete(group.cpf)}>Deletar</button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className='container'>
      <h3 className='titulo'>Pacintes</h3>
      <table className="tabela">
        <thead>
          <tr>
            <th width="20%">Nome</th>
            <th width="20%">Email</th>
            <th width="20%">Cpf</th>
            <th width="10%">Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacienteList}
        </tbody>
      </table>
      <ToastContainer/>
    </div>
  );
} export default ListarPacientes;
