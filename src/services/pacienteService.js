import api from '../http-common';

export const getAll = () => {
  return api.get('/Pacientes');
};

export const create = (data) => {
  return api.post('/Pacientes', data);
};

export const update = (data, id) => {
  return api.put(`/Pacientes/${id}`, data);
};

export const remove = (id) => {
  return api.delete(`/Pacientes/${id}`);
};
