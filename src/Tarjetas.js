export default function Tarjetas(props) {
	return (
    <>          
      <p><b>{new Date((props.info.dt)*1000).toLocaleDateString()}</b> </p>
      <p><img src={`http://openweathermap.org/img/wn/${props.info.weather[0].icon}.png`} alt="icono"></img></p>   
      <p>Temp: {props.info.temp.day}ºC</p>       
      <p>Humedad: {props.info.humidity}%</p>   
      <p>Viento: {props.info.wind_speed}m/s</p>      
    </>
  );
}