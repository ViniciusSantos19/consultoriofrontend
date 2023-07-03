/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import {remove, getAll} from '../../services/medicoService';
import {Link} from 'react-router-dom';
import '../../style/listar.css';

function ListarMedicos() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (crm) => {
    await remove(crm).then((response)=>{
      setGroups(groups.filter((group) => group.crm !== crm));
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
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
      <tr key={group.crm}>
        <td>{group.nome}</td>
        <td>{group.email}</td>
        <td>{group.crm}</td>
        <td>{group.especialidade}</td>
        <td>
          <div>
            <Link to='/medicoUpdateForm'>
              <button size="sm" className='atualizar'>Edit</button>
            </Link>
            <button size="sm" className='deletar' onClick={() => handleDelete(group.crm)}>Delete</button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className='container'>
      <h3 className='titulo'>Médcios</h3>
      <table className="mt-4">
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
    </div>
  );
} export default ListarMedicos;
