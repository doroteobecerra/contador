import { useState } from 'react';
import './App.css';
import Btn from './componentes/button';
import Contador from './componentes/contador';

function App() {

  const [numClics, setNumClics ] = useState(0);


  const clic = () => {
    setNumClics(numClics + 1)

  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <p>Alejandro Doroteo Becerra</p>
      <Contador 
      numero={numClics}/>
      <div className="btn-contenedor">
        <Btn 
        texto= "Imcrementar"
        btnType={true}
        click ={clic} />
          
        <Btn
          texto= "Reiniciar"
          btnType={false}
          click ={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
