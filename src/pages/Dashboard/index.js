import React, {useEffect, useState} from 'react';
import api from '../../services/api'
import './styles.css';
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [spots , setSpots] = useState([]);

  useEffect(() => {
    debugger;
    async function loadSpots() {
      const user_id = document.cookie;
      const response = await api.get('/dashboard', {
        headers: {
          user_id
        }
      });
      debugger
      setSpots(response.data);
      debugger;
      console.log(response.data);
    }
    debugger;
    loadSpots();
  }, []);

  return(
    <>
      <ul className="spot-list">
        {spots.map( spot => (
          <li key={spot._id}>
            <header style={{backgroundImage: `url(${spot.thumbnail_url})`}}></header>
            <strong>{spot.company[0].toUpperCase() + spot.company.slice(1)}</strong>
            <span>{spot.price ? `R$${spot.price}/dia`: `Gratuito`}</span>
          </li>
        ))}
      </ul>
      <Link to="/new"> 
      <button className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  )
}