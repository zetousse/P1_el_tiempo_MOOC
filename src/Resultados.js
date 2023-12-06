import Tarjetas from "./Tarjetas";
import CONFIG from './config/config';


export default function Resultados(props) {
    
    return (
        <div id="bloquesresultados">
            <div id="resultados">
                <h3>Timezone: {props.items.timezone}</h3>  
                <h3>El tiempo en los más proximos días será: </h3>
            </div>       
            <div id="listaresultados">
                {props.items.daily.map((item, index) => {                  
                    if (index < props.numitems) {
                        return (
                            <div id="tarjeta" key={index}>
                                <Tarjetas info={item} />
                            </div>
                        );
                    }
                    
                })}
            </div> 
        </div>
    );        
}