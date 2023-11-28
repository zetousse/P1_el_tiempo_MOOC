import './App.css';
import CONFIG from './config/config_default';
import {useState, useRef} from "react";
import {mock1} from './constants/mock.js';
import Header from './Header';
import Buscador from './Buscador';
import Resultados from './Resultados';

const USE_SERVER = CONFIG.use_server;
const numitems = CONFIG.num_items;

function App() {

  const[latitud, setLatitud] = useState(CONFIG.default_lat);
  const[longitud, setLongitud] = useState(CONFIG.default_lon);
  const[timezone, setTimezone] = useState(null);
  const[resultado, setResultado] = useState(null);
  const[error, setError] = useState(null);

  const obtenerLocalizacionZonaHoraria = (tiempooffset) => {
    const offsetSeconds = tiempooffset;
    const date = new Date();
    date.setUTCSeconds(date.getUTCSeconds() + offsetSeconds);
    const options = Intl.DateTimeFormat().resolvedOptions();
    const timeZone = options.timeZone;
    console.log(timeZone);
    return timeZone;
  }   

  const callServer = async(param) => {
    console.log("CLICK");
    if(USE_SERVER){
      try {
        let apiparams = "";
        apiparams = "?lat=" + latitud + "&lon=" + longitud + "&appid=" + CONFIG.api_key;
        const response = await fetch(`${CONFIG.server_url}${apiparams}`);
        const data = await response.json();
        console.log(data);
        setTimezone(data.city.timezone);
        setResultado(data.list);
        setError(null);
        <div>
          <h3 id="zona">Time zone: {obtenerLocalizacionZonaHoraria(timezone)}</h3>
          <h3 id="titulo">El tiempo en los próximos días será: </h3>
        </div>
      }
      catch(error){
        console.log(error);
        setError({description: error.message});
      }
    } else {
    setResultado(mock1);
    console.log("DATOS NO DESCARGADOS")
    setError(null);
  }

}
  return (
    <div className="App">
      <Header />
      <div id='buscador'>
        <h2 id='titulo'>El tiempo</h2>
        <div id='info'>
          Latitud: <input type='number' id='latitud' value={latitud} onClick={e=>setLatitud(e.target.value)} onChange={e=>setLatitud(e.target.value)} />
          Longitud: <input type='number' id='longitud' value={longitud} onClick={e=>setLongitud(e.target.value)} onChange={e=>setLongitud(e.target.value)} />
          <button id='buscar' onClick={()=>callServer()}>Buscar</button>
          {error && <h1>Ha habido un error: {error.description}</h1>}   
        </div>
      </div>
      {resultado && <Resultados numitems={numitems} resultado= {resultado} />}
    </div>
  );
}

export default App;
