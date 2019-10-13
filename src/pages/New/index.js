import React, {useState} from 'react';
import camera from '../../assets/camera.svg'; 

export default function New() {
  const [company, setCompany] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [price, setPrice] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
  }
  return(
    <form onSubmit={handleSubmit}>
      <label id="thumbnail">
        <input type="file" />
        <img src={camera} alt="select img"/>
      </label>
      <label htmlFor="company">Empresa *</label>
      <input 
        type="text"
        id="company"
        placeholder="Sua empresa aqui"
        onChange={(evt) => {setCompany(evt.target.value)}}
        value= {company}
      />
      <label htmlFor="company">Tecnologias * <span>(separadas por vírgula)</span></label>
      <input 
        type="text"
        id="techs"
        placeholder="Quais tecnologias usadas?"
        onChange={(evt) => {setTechnologies(evt.target.value)}}
        value= {technologies}
      />
      <label htmlFor="company">Valor da diária * <span>(em branco é gratuito)</span></label>
      <input 
        type="text"
        id="price"
        placeholder="Valor cobrado por dia"
        onChange={(evt) => {setPrice(evt.target.value)}}
        value= {price}
      />
      <button className="btn" type="submit">Cadastrar</button>
    </form>
  )
}