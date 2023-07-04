/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

// eslint-disable-next-line require-jsdoc
import React, {useState} from 'react';
import '../../style/index.css';
import {validateForm} from '../../validaton';
import {create} from '../../services/medicoService';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ConsultaForm() {
  const dadosMedico = {
    crm: '',
    cpf: '',
    dataHora: '',
  };

  const [group, setGroup] = useState(dadosMedico);
  const [loading, setLoading] = useState(false);

  const enviarDados = async (event) => {
    const requiredFields = ['crm', 'cpf', 'dataHora'];
    const erros = validateForm(group, requiredFields);
    event.preventDefault();
    if (Object.keys(erros).length == 0) {
      setLoading(true);
      const ConsultaInsertDto = {
        crm: group.crm,
        cpf: group.cpf,
        dataHora: group.dataHora,
      };

      const consultaJson = JSON.stringify(ConsultaInsertDto);

      await create(consultaJson).then(function(response) {
        console.log(response);
        toast.success('Consulta inserida com sucesso');
      }).catch(function(error) {
        console.log(error);
        toast.error('Erro ao cadastrar a consulta');
      }).finally(setLoading(false));
    } else {
      event.preventDefault();
      console.log(erros);
      toast.error('Preencha todos os campos do formulário');
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setGroup({...group, [name]: value});
  };


  const handleSubmit = (event) => {
    enviarDados(event);
  };

  return (
    <div className='container'>
      <div className='titulo'>Formulário médico</div>
      <form onSubmit={handleSubmit}>

        <div className='detalhes_usuario'>
          <div className='input_box'>
            <label htmlFor='cpf'>Cpf do paciente:</label>
            <input
              type='text'
              id='cpf'
              name='cpf'
              onChange={handleChange}
            />
          </div>

          <div className='input_box'>
            <label htmlFor='cmr'>Crm do médcio:</label>
            <input
              type='text'
              id='crm'
              name='crm'
              onChange={handleChange}
            />
          </div>

          <div className='input_box'>
            <label htmlFor='dataHora'>Data e hora da consulta:</label>
            <input
              type='datetime-local'
              id='dataHora'
              name='dataHora'
              onChange={handleChange}
            />
          </div>

        </div>

        <div className='button'>
          <button type="button" onClick={handleSubmit} className='botao'>{loading ? 'Enviando...' : 'Enviar'}</button>
        </div>
        <ToastContainer/>
      </form>
    </div>
  );
}

export default ConsultaForm;
