import './App.css';
import CONFIG from './config/config_default';
import {useState, useRef} from "react";
import {mock1} from './constants/mock.js';
import Header from './Header';
import Buscador from './Buscador';
import Resultados from './Resultados';

var USE_SERVER = CONFIG.use_server;
const numitems = CONFIG.num_items;

function App() {

  const[latitud, setLatitud] = useState(CONFIG.default_lat);
  const[longitud, setLongitud] = useState(CONFIG.default_lon);
  const[timezone, setTimezone] = useState(null);
  const[resultado, setResultado] = useState(null);
  const[error, setError] = useState(null);

  const callServer = async(param) => {
    
    setTimezone(null);
    setResultado(null);
    setError(null);


    console.log("CLICK");
    if(USE_SERVER){
      try {
        let apiparams = "";
        apiparams = "?lat=" + latitud + "&lon=" + longitud + "&appid=" + CONFIG.api_key + "&units=metric";	
        const response = await fetch(`${CONFIG.server_url}${apiparams}`);
        if(response.status === 200){
          const data = await response.json();
          setTimezone(data.city.timezone);
          setResultado(data.list);
          console.log(resultado);
          setError(null);
        }
        else {
          //throw (
          //'Error: response status ' + response.status);
        }
       
      }
      catch(error){
        console.log("ERRRORRRRRRRR FATAL");
        setError(error);
        console.log(error);
      }
    } else {
      setTimezone(mock1.timezone_offset);
      setResultado(mock1.daily);
      console.log("DATOS NO DESCARGADOS")
      console.log(resultado)
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
          {error && <div id="error">
                      <h3>Error</h3>
                      <h2>Se ha producido un error. </h2>
                      <p>Descripción: {error}</p>
                    </div>}   
        </div>
      </div>
      {resultado && <Resultados numitems={numitems} items= {resultado}  />}
    </div>
  );
}

export default App;
