import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import MiComponente from'./components/MiComponente';
function HolaMundo(nombre){
var presentacion = (
<div>
  <h2>¡Hola, Bienvenidos! {nombre}</h2>
  <h3>Welcome, Nice to See You Here! {nombre} Greetings</h3>
</div>  
);
return presentacion;
}

function App() {
  var nombre = "Tradiciones y Costumbres Mexicanas"

return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hola bienvenido a tradiciones y costumbres mexicanas.
        </p>
        {HolaMundo(nombre)}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
