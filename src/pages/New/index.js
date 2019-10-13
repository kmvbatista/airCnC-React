import React, {useState, useMemo} from 'react';
import camera from '../../assets/camera.svg'; 
import './styles.css';
import api from '../../services/api'

export default function New({history}) {
  const [company, setCompany] = useState('');
  const [techs, settechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState();

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const data = new FormData();
      const user_id = document.cookie;
      data.append('thumbnail', thumbnail);
      data.append('company', company);
      data.append('techs', techs);
      data.append('price', price);
      await api.post('/spots', data, {
        headers: {user_id}
      });
      history.push('Dashboard');
    }
    catch {
      alert('Erro');
    }
    
  }
  return(
    <form onSubmit={handleSubmit}>
      <label 
        id="thumbnail" 
        style={{backgroundImage: `url(${preview})`}}
        className={thumbnail ? 'has-thumbnail': ''}
      >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
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
        onChange={(evt) => {settechs(evt.target.value)}}
        value= {techs}
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