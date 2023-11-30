import CONFIG from './config/config_default';

const numitems = CONFIG.num_items;
const USE_SERVER = CONFIG.use_server;
const lista = [];

const obtenerLocalizacionZonaHoraria = (tiempooffset) => {
    const offsetSeconds = tiempooffset;
    const date = new Date();
    date.setUTCSeconds(date.getUTCSeconds() + offsetSeconds);
    const options = Intl.DateTimeFormat('es-ES').resolvedOptions();
    const timeZone = options.timeZone;
    console.log(timeZone);
    return timeZone;
  }  

export default function Resultados(props) {
    var lista = props.items.slice(0, numitems);
    
    if (USE_SERVER){
        return (
            <div id="tituloresultados">
            
            <h3>Timezone: {obtenerLocalizacionZonaHoraria()}</h3>  
            <h3>El tiempo en los más proximos días será: </h3>
           
            <ul id="resultados">
                <div>       
                    {lista.map(item => (                   
                        <li key={item.id}>          
                            <p><b>{new Date((item.dt)*1000).toLocaleDateString()}</b> </p>
                            <p><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="icono"></img></p>   
                            <p>Temp: {item.main.temp}ºF</p>       
                            <p>Humedad: {item.main.humidity}%</p>   
                            <p>Viento: {item.wind.speed}m/s</p>      
                        </li>
                    ))}
                </div>
            </ul>
        </div>
        )
    }else{
        return (
<div id="tituloresultados">
            
            <h3>Timezone: {obtenerLocalizacionZonaHoraria()}</h3>  
            <h3>El tiempo en los más proximos días será: </h3>
           
            <ul id="resultados">
                <div>       
                    {lista.map(item => (                   
                        <li key={item.id}>          
                            <p><b>{new Date((item.dt)*1000).toLocaleDateString()}</b> </p>
                            <p><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="icono"></img></p>   
                            <p>Temp: {item.temp.day}ºC</p>       
                            <p>Humedad: {item.humidity}%</p>   
                            <p>Viento: {item.wind_speed}m/s</p>       
                        </li>
                    ))}
                </div>
            </ul>
        </div>
        )
    }
}