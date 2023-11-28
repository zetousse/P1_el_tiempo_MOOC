//import moment from 'moment-timezone';
import Tarjetas from './Tarjetas';


export default function Resultados(props) {
	return (          
        <div>
           <ul id="resultados">
                {props.resultado.map(item => (
                    <li key={item.id}>          
                        <p>Fecha: <b>{item.dt}</b> </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
