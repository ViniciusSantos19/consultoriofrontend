import api from '../http-common';

export const getAll = (pagina) => {
  return api.get(`/Consultas?pagina=${pagina}`);
};

export const create = (data) => {
  return api.post('/Consultas', data);
};


export const remove = (id) => {
  return api.delete(`/Consultas/${id}`);
};

