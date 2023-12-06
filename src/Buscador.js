import React, { useState, useRef } from 'react';
import CONFIG from './config/config';

export default function Buscador(props) {
  const [latitud, setLatitud] = useState(CONFIG.default_lat);
  const [longitud, setLongitud] = useState(CONFIG.default_lon);

  const latitudRef = useRef(null);
  const longitudRef = useRef(null);

  return (null);
}