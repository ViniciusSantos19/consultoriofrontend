/* eslint-disable require-jsdoc */

import React, {useState} from 'react';
import EnderecoForm from '../formularioEndereco';
import '../../style/index.css';


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
  // const navigate = useNavigate();
  // const {id} = useParams();

  const enviarDados = () => {
    console.log(group);
    setLoading(false);
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setGroup({...group, [name]: value});
    console.log(group);
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
    enviarDados();
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
              type='number'
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
