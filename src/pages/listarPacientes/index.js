/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import {remove, getAll} from '../../services/pacienteService';
import {Link} from 'react-router-dom';

function ListarPacientes() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <tr key={group.cpf}>
        <td>{group.nome}</td>
        <td>{group.email}</td>
        <td>{group.cpf}</td>
        <td>
          <div>
            <Link to='/pacienteUpdateForm'>
              <button size="sm" color="primary">Edit</button>
            </Link>
            <button size="sm" color="danger" onClick={() => remove(group.crm)}>Delete</button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="float-end">
        <Link to='/cadastroPaciente'>
          <button color="success">Cadastrar Paciente</button>
        </Link>
      </div>
      <h3>Médcios</h3>
      <table className="mt-4">
        <thead>
          <tr>
            <th width="20%">Nome</th>
            <th width="20%">Email</th>
            <th width="20%">Cpf</th>
          </tr>
        </thead>
        <tbody>
          {pacienteList}
        </tbody>
      </table>
    </div>
  );
} export default ListarPacientes;
