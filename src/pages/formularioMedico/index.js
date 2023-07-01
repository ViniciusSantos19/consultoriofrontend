/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

// eslint-disable-next-line require-jsdoc
import React, {useState} from 'react';
import EnderecoForm from '../formularioEndereco';
import '../../style/index.css';
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
