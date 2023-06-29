/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

// eslint-disable-next-line require-jsdoc
import React from 'react';
import useForm from '../../hooks';
function MedicoForm() {
  const [{values, loading}, handleChange, handleSubmit] = useForm();
  // const [selectedOption] = useState('Dermatologia');

  const enviarDados = () => {
    console.log(values);
  };


  return (
    <div>
      <h1>Formulário médico</h1>
      <form onSubmit={handleSubmit(enviarDados)}>
        <label htmlFor='nome'>Nome:</label>
        <input
          type='text'
          id='nome'
          name='nome'
          onChange={handleChange}
        />

        <label htmlFor='telefone'>Telefone:</label>
        <input
          type='number'
          id='telefone'
          name='telefone'
          onChange={handleChange}
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleChange}
        />

        <label htmlFor='crm'>Crm:</label>
        <input
          type='text'
          id='crm'
          name='crm'
          onChange={handleChange}
        />

        <label htmlFor='nome'>Nome:</label>
        <input
          type='text'
          id='nome'
          name='nome'
          onChange={handleChange}
        />

        <label htmlFor="combobox">Selecione uma especialidade:</label>
        <select id="combobox" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Dermatologia">Dermatologia</option>
          <option value="Ortopedia">Ortopedia</option>
          <option value="Cardiologia">Cardiologia</option>
          <option value="Ginecologia">Ginecologia</option>
        </select>

        <button type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>

      </form>
    </div>
  );
}

export default MedicoForm;
