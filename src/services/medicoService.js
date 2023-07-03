import api from '../http-common';

export const getAll = (pagina) => {
  return api.get(`/Medicos?pagina=${pagina}`);
};

export const create = (data) => {
  return api.post('/Medicos', data);
};

export const update = (data, cpf) => {
  return api.put(`/Medicos/${cpf}`, data);
};

export const remove = (cpf) => {
  return api.delete(`/Medicos/${cpf}`);
};
