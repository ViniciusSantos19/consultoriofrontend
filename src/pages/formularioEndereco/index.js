/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';

function EnderecoForm({handleChange}) {
  return (
    <div>
      <label htmlFor='logradouro'>Logradouro:</label>
      <input
        type='text'
        id='logradouro'
        name='logradouro'
        onChange={handleChange}
      />

      <label htmlFor='complemento'>Complemento:</label>
      <input
        type='text'
        id='complemento'
        name='complemento'
        onChange={handleChange}
      />

      <label htmlFor='numero'>Numero:</label>
      <input
        type='number'
        id='numero'
        name='numero'
        onChange={handleChange}
      />

      <label htmlFor='bairro'>Bairro:</label>
      <input
        type='text'
        id='bairro'
        name='bairro'
        onChange={handleChange}
      />

      <label htmlFor='unidadeFederal'>Unidade Federal:</label>
      <input
        type='text'
        id='unidadeFederal'
        name='unidadeFederal'
        onChange={handleChange}
      />

      <label htmlFor='cidade'>Cidade:</label>
      <input
        type='text'
        id='cidade'
        name='cidade'
        onChange={handleChange}
      />

      <label htmlFor='cep'>Cep:</label>
      <input
        type='text'
        id='cep'
        name='cep'
        onChange={handleChange}
      />
    </div>
  );
}
export default EnderecoForm;
