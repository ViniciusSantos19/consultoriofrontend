/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import {remove, getAll} from '../../services/medicoService';
import {Link} from 'react-router-dom';
import '../../style/listar.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ListarMedicos() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (crm) => {
    await remove(crm).then((response)=>{
      setGroups(groups.filter((group) => group.crm !== crm));
      console.log(response.data);
      toast.success('Medico apagado com sucesso');
    }).catch((error)=>{
      console.log(error);
      toast.error('Erro ao apagar médico');
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

  const medicoList = groups.map((group) => {
    return (
      <tr key={group.crm} className='rows'>
        <td>{group.nome}</td>
        <td>{group.email}</td>
        <td>{group.crm}</td>
        <td>{group.especialidade}</td>
        <td>
          <div className='botoes'>
            <Link to={`/atualizarMedicos/${group.crm}`}>
              <button size="sm" className='atualizar'>Atualizar</button>
            </Link>
            <button size="sm" className='deletar' onClick={() => handleDelete(group.crm)}>Deletar</button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className='container'>
      <h3 className='titulo'>Médicos</h3>
      <table className="tabela">
        <thead>
          <tr>
            <th width="20%">Nome</th>
            <th width="20%">Email</th>
            <th width="20%">Crm</th>
            <th width="10%">Especialidade</th>
            <th width="20%">Ação</th>
          </tr>
        </thead>
        <tbody>
          {medicoList}
        </tbody>
      </table>
      <ToastContainer/>
    </div>
  );
} export default ListarMedicos;
