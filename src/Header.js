export default function Header(props){
    return (<div id="cabecera">
<img className="logo" src={process.env.PUBLIC_URL + "/sun.webp"} alt="el logo de la página"/>
<h3 className="mensaje">Bienvenido a la web de Eduardo Barea Escobar</h3>
    </div>)
}