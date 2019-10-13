import React, {useState} from 'react';
import api from '../../services/api'


export default function Login({history}) {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event)  => {
    event.preventDefault();
    try{
      const response = await api.post('/users', {email: email});
      const {_id} = response.data;
      document.cookie = `${_id}`;
      history.push('Dashboard')
    }
    catch{
      console.log('error') 
    }
  }

  return(
      <>
        <p>Ofereça <strong>spots</strong> para programadores</p>
        <p>e encontre <strong>talentos</strong> para a sua empresa!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input
          onChange={event => {setEmail(event.target.value)}}
            type="email"
            id="email"
            value={email}
            placeholder="Seu melhor e-mail"/>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </>
  )
}