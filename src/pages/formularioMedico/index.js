/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

// eslint-disable-next-line require-jsdoc
import React, {useState} from 'react';
import EnderecoForm from '../formularioEndereco';
import '../../style/index.css';
import {validateForm} from '../../validaton';

function MedicoForm() {
  const dadosMedico = {
    nome: '',
    telefone: '',
    email: '',
    crm: '',
    especialidade: '',
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

  const [group, setGroup] = useState(dadosMedico);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  // const {id} = useParams();

  const enviarDados = async (event) => {
    const requiredFields = ['nome', 'telefone', 'email', 'crm', 'especialidade', 'endereco.logradouro', 'endereco.numero', 'endereco.bairro', 'endereco.unidadeFederal', 'endereco.cidade', 'endereco.cep'];
    const erros = validateForm(group, requiredFields);
    if (Object.keys(erros).length == 0) {
      setLoading(true);
      try {
        console.log(group);
        console.log(group.endereco);
        const response = await fetch('/Medicos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(group),
        });

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
      case 'crm':
      case 'especialidade':
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
              <option value="Ortopedia">Ortopedia</option>
              <option value="Cardiologia">Cardiologia</option>
              <option value="Ginecologia">Ginecologia</option>
            </select>
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
}

export default MedicoForm;
