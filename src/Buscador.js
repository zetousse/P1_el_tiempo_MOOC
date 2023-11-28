import React, { useState, useRef } from 'react';
import CONFIG from './config/config_default';

export default function Buscador(props) {
  const [latitud, setLatitud] = useState(CONFIG.default_lat);
  const [longitud, setLongitud] = useState(CONFIG.default_lon);

  const latitudRef = useRef(null);
  const longitudRef = useRef(null);

  return (null);
    /*<div id='buscador'>
      <h2 id='titulo'>El tiempo</h2>
      <div id='info'>
        Latitud: <input type='number' id='latitud' ref={latitudRef} placeholder={latitud} />
        Longitud: <input type='number' id='longitud' ref={longitudRef} placeholder={longitud} />
        <button id='botonsearch'>Buscar</button>
      </div>
    </div>
  );*/
}