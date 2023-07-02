/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import React, {useState} from 'react';
import EnderecoForm from '../formularioEndereco';
import '../../style/index.css';
import {validateForm} from '../../validaton';
import {create} from '../../services/pacienteService';

function PacienteForm() {
  const dadosPaciente = {
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    endereco: {
      logradouro: '',
      complemento: '',
      numero: 0,
      bairro: '',
      unidadeFederal: '',
      cidade: '',
      cep: '',
    },

  };

  const [group, setGroup] = useState(dadosPaciente);
  const [loading, setLoading] = useState(false);

  const enviarDados = async (event) => {
    const requiredFields = ['nome', 'telefone', 'email', 'cpf', 'endereco.logradouro', 'endereco.numero', 'endereco.bairro', 'endereco.unidadeFederal', 'endereco.cidade', 'endereco.cep'];
    const erros = validateForm(group, requiredFields);
    if (Object.keys(erros).length == 0) {
      setLoading(true);
      try {
        const pacienteDto = {
          nome: group.nome,
          telefone: group.telefone,
          email: group.email,
          cpf: group.cpf,
          endereco: {
            logradouro: group.endereco.logradouro,
            complemento: group.endereco.complemento,
            numero: group.endereco.numero,
            bairro: group.endereco.bairro,
            unidadeFederal: group.endereco.unidadeFederal,
            cidade: group.endereco.cidade,
            cep: group.endereco.cep,
          },
        };

        const response = await create(pacienteDto);

        if (response.ok) {
        // O envio foi bem-sucedido
          console.log('Dados enviados com sucesso!');
        // Aqui você pode fazer algo, como redirecionar o usuário para outra página
        } else {
        // Houve algum erro no envio dos dados
          console.log('Ocorreu um erro ao enviar os dados.');
        }
      } catch (error) {
        console.log('Ocorreu um erro ao enviar os dados:', error);
        console.log('Erro:', error);
        console.log('Mensagem de erro:', error.message);
        console.log('Código de erro:', error.code);
        console.log('Configuração:', error.config);
        console.log('Requisição:', error.request);
        console.log(error.response);
      } finally {
        setLoading(false);
      }
    } else {
      event.preventDefault();
      console.log(erros);
      alert('Preencha todos os campos do formulário');
    }
  };


  const handleChange = (event) => {
    const {name, value} = event.target;

    switch (name) {
      case 'nome':
      case 'telefone':
      case 'email':
      case 'cpf':
        setGroup((prevGroup) => ({
          ...prevGroup,
          [name]: value,
        }));
        break;

      case 'logradouro':
      case 'complemento':
      case 'numero':
      case 'bairro':
      case 'unidadeFederal':
      case 'cidade':
      case 'cep':
        setGroup((prevGroup) => ({
          ...prevGroup,
          endereco: {
            ...prevGroup.endereco,
            [name]: value,
          },
        }));
        break;

      default:
        // ignore
    }
  };

  /* const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch('/api/group', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(group),
        });
        setGroup(initialFormState);
        navigate('/groups');
      }; */


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


          <div className='endereco'>
            <EnderecoForm handleChange={handleChange}/>
          </div>


        </div>

        <div className='button'>
          <button type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>
        </div>

      </form>
    </div>
  );
} export default PacienteForm;
