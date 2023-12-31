/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

// eslint-disable-next-line require-jsdoc
import React, {useState} from 'react';
import EnderecoForm from '../formularioEndereco';
import '../../style/index.css';
import {validateForm} from '../../validaton';
import {create} from '../../services/medicoService';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MedicoForm() {
  const dadosMedico = {
    nome: '',
    telefone: '',
    email: '',
    crm: '',
    especialidade: '',
    logradouro: '',
    complemento: '',
    numero: 0,
    bairro: '',
    unidadeFederal: '',
    cidade: '',
    cep: '',


  };

  const [group, setGroup] = useState(dadosMedico);
  const [loading, setLoading] = useState(false);

  const enviarDados = async (event) => {
    const requiredFields = ['nome', 'telefone', 'email', 'crm', 'especialidade', 'logradouro', 'numero', 'bairro', 'unidadeFederal', 'cidade', 'cep'];
    const erros = validateForm(group, requiredFields);
    event.preventDefault();
    if (Object.keys(erros).length == 0) {
      setLoading(true);
      const medicoDto = {
        nome: group.nome,
        telefone: group.telefone,
        email: group.email,
        crm: group.crm,
        especialidade: group.especialidade,
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

      const medicoJson = JSON.stringify(medicoDto);

      await create(medicoJson).then(function(response) {
        console.log(response);
        toast.success('Médico inserido com sucesso');
      }).catch(function(error) {
        console.log(error);
        toast.error('Erro ao cadastrar o usuário');
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
            <label htmlFor='crm'>Crm:</label>
            <input
              type='text'
              id='crm'
              name='crm'
              onChange={handleChange}
            />
          </div>

          <div className='input_box'>
            <label htmlFor="combobox">Selecione uma especialidade:</label>
            <select id="combobox" onChange={handleChange} name='especialidade'>
              <option value="">Selecione</option>
              <option value="Dermatologia">Dermatologia</option>
              <option value="Ortopediam">Ortopedia</option>
              <option value="Cardiologia">Cardiologia</option>
              <option value="Ginecologia">Ginecologia</option>
            </select>
          </div>

          <EnderecoForm handleChange={handleChange}/>


        </div>

        <div className='button'>
          <button type="button" onClick={handleSubmit} className='botao'>{loading ? 'Enviando...' : 'Enviar'}</button>
        </div>
        <ToastContainer/>
      </form>
    </div>
  );
}

export default MedicoForm;
