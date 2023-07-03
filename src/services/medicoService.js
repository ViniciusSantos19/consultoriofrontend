import api from '../http-common';

export const getAll = (pagina) => {
  return api.get(`/Medicos?pagina=${pagina}`);
};

export const create = (data) => {
  return api.post('/Medicos', data);
};

export const update = (data, id) => {
  return api.put(`/Medicos/${id}`, data);
};

export const remove = (id) => {
  return api.delete(`/Medicos/${id}`);
};
