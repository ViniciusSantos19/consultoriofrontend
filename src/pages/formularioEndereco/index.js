/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import './index.css';
function EnderecoForm({handleChange}) {
  return (
    <div>
      <div className='titulo'>formulário Endereço</div>
      <div className='containerEndereco'>
        <div className='input_box'>
          <label htmlFor='logradouro'>Logradouro:</label>
          <input
            type='text'
            id='logradouro'
            name='logradouro'
            onChange={handleChange}
          />
        </div>


        <div className='input_box'>
          <label htmlFor='complemento'>Complemento:</label>
          <input
            type='text'
            id='complemento'
            name='complemento'
            onChange={handleChange}
          />
        </div>

        <div className='input_box'>
          <label htmlFor='numero'>Numero:</label>
          <input
            type='number'
            id='numero'
            name='numero'
            onChange={handleChange}
          />
        </div>

        <div className='input_box'>
          <label htmlFor='bairro'>Bairro:</label>
          <input
            type='text'
            id='bairro'
            name='bairro'
            onChange={handleChange}
          />
        </div>

        <div className='input_box'>
          <label htmlFor='unidadeFederal'>Unidade Federal:</label>
          <input
            type='text'
            id='unidadeFederal'
            name='unidadeFederal'
            onChange={handleChange}
          />
        </div>

        <div className='input_box'>
          <label htmlFor='cidade'>Cidade:</label>
          <input
            type='text'
            id='cidade'
            name='cidade'
            onChange={handleChange}
          />
        </div>

        <div className='input_box'>
          <label htmlFor='cep'>Cep:</label>
          <input
            type='text'
            id='cep'
            name='cep'
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
export default EnderecoForm;
