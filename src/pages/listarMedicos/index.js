/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import {remove, getAll} from '../../services/medicoService';
import {Link} from 'react-router-dom';

function ListarMedicos() {
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
        <Link to='/cadastroMedico'>
          <button color="success">Cadastrar médico</button>
        </Link>
      </div>
      <h3>Médcios</h3>
      <table className="mt-4">
        <thead>
          <tr>
            <th width="20%">Nome</th>
            <th width="20%">Email</th>
            <th width="20%">Crm</th>
            <th width="10%">Especialidade</th>
          </tr>
        </thead>
        <tbody>
          {medicoList}
        </tbody>
      </table>
    </div>
  );
} export default ListarMedicos;
