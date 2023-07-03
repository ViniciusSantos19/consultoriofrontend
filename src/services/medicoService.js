import api from '../http-common';

export const getAll = (pagina) => {
  return api.get(`/Medicos?pagina=${pagina}`);
};

export const create = (data) => {
  return api.post('/Medicos', data);
};

export const update = (data, crm) => {
  return api.put(`/Medicos/${crm}`, data);
};

export const remove = (crm) => {
  return api.delete(`/Medicos/${crm}`);
};
