import api from '../http-common';

export const getAll = (pagina) => {
  return api.get(`/Pacientes?pagina=${pagina}`);
};

export const create = (data) => {
  return api.post('/Pacientes', data);
};

export const update = (data, cpf) => {
  return api.put(`/Pacientes/${cpf}`, data);
};

export const remove = (cpf) => {
  return api.delete(`/Pacientes/${cpf}`);
};
