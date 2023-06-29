/* eslint-disable require-jsdoc */
import React, {useState} from 'react';


function EnderecoForm() {
  const [endereco, setEndereco] = useState({
    logradouro: '',
    complemento: '',
    numero: 0,
    bairro: '',
    unidadeFederal: '',
    cidade: '',
    cep: '',
  });

  const handleEnderecoChange = (event) => {
    setEndereco({
      ...endereco,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <label htmlFor='logradouro'>Logradouro:</label>
      <input
        type='text'
        id='logradouro'
        name='logradouro'
        value={endereco.logradouro}
        onChange={handleEnderecoChange}
      />

      <label htmlFor='complemento'>Complemento:</label>
      <input
        type='text'
        id='complemento'
        name='complemento'
        value={endereco.complemento}
        onChange={handleEnderecoChange}
      />

      <label htmlFor='numero'>Numero:</label>
      <input
        type='number'
        id='numero'
        name='numero'
        value={endereco.numero}
        onChange={handleEnderecoChange}
      />

      <label htmlFor='bairro'>Bairro:</label>
      <input
        type='text'
        id='bairro'
        name='bairro'
        value={endereco.bairro}
        onChange={handleEnderecoChange}
      />

      <label htmlFor='unidadeFederal'>Unidade Federal:</label>
      <input
        type='text'
        id='unidadeFederal'
        name='unidadeFederal'
        value={endereco.unidadeFederal}
        onChange={handleEnderecoChange}
      />

      <label htmlFor='cidade'>Cidade:</label>
      <input
        type='text'
        id='cidade'
        name='cidade'
        value={endereco.cidade}
        onChange={handleEnderecoChange}
      />

      <label htmlFor='cep'>Cep:</label>
      <input
        type='text'
        id='cep'
        name='cep'
        value={endereco.cep}
        onChange={handleEnderecoChange}
      />

    </div>
  );
}
export default EnderecoForm;
