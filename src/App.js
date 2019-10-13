import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg'
import api from './services/api'

function App() {
  const [email, setEmail] = useState('a');

  const handleSubmit = async (event)  => {
    event.preventDefault();
    try{
      const response = await api.post('/users', {email: email});
      const {_id} = response.data;
      document.cookie = `user_id=${_id}`;
      console.log(document.cookie)
    }
    catch{
      console.log('error') 
    }
    
  }
  return (
    <div className="container">
      <img src={logo} alt="Aircnc"/>
      <div className="content">
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
      </div>
    </div>
  );
}

export default App;
