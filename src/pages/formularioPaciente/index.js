/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import React, {useState} from 'react';
import EnderecoForm from '../formularioEndereco';
import '../../style/index.css';
import {validateForm} from '../../validaton';
import {create} from '../../services/pacienteService';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PacienteForm() {
  const dadosPaciente = {
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    logradouro: '',
    complemento: '',
    numero: 0,
    bairro: '',
    unidadeFederal: '',
    cidade: '',
    cep: '',

  };

  const [group, setGroup] = useState(dadosPaciente);
  const [loading, setLoading] = useState(false);

  const enviarDados = async (event) => {
    const requiredFields = ['nome', 'telefone', 'email', 'cpf', 'logradouro', 'numero', 'bairro', 'unidadeFederal', 'cidade', 'cep'];
    const erros = validateForm(group, requiredFields);
    event.preventDefault();
    if (Object.keys(erros).length == 0) {
      setLoading(true);
      const pacienteDto = {
        nome: group.nome,
        telefone: group.telefone,
        email: group.email,
        cpf: group.cpf,
        endereco: {
          logradouro: group.logradouro,
          complemento: group.complemento,
          numero: group.numero,
          bairro: group.bairro,
          unidadeFederal: group.unidadeFederal,
          cidade: group.cidade,
          cep: group.cep,
        },
      };

      const pacienteJson = JSON.stringify(pacienteDto);
      await create(pacienteJson).then(function(response) {
        console.log(response);
        toast.success('Pacientes cadastrado com sucesso');
      }).catch(function(error) {
        console.log(error);
        toast.error('Erro ao cadastrar Paciente');
      }).finally(setLoading(false));
    } else {
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
      <div className='titulo'>Formulário Paciente</div>
      <form onSubmit={handleSubmit}>
        <div className='detalhes_usuario'>
          <div className='input_box'>
            <label htmlFor='nome'>Nome:</label>
            <input
              type='text'
              id='nome'
              name='nome'
              onChange={handleChange}
            />
          </div>

          <div className='input_box'>
            <label htmlFor='telefone'>Telefone:</label>
            <input
              type='tel'
              id='telefone'
              name='telefone'
              onChange={handleChange}
            />
          </div>
          <div className='input_box'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={handleChange}
            />
          </div>

          <div className='input_box'>
            <label htmlFor='cpf'>Cpf:</label>
            <input
              type='text'
              id='cpf'
              name='cpf'
              onChange={handleChange}
            />
          </div>


          <EnderecoForm handleChange={handleChange}/>


        </div>

        <div className='button'>
          <button type="button" onClick={handleSubmit}>{loading ? 'Enviando...' : 'Enviar'}</button>
        </div>
        <ToastContainer/>
      </form>
    </div>
  );
} export default PacienteForm;
