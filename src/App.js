import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './Componentes/header';
import Redes from './Componentes/Redes'
import Navbar from './Componentes/Navbar';
import Descripcion from './Componentes/Descripcion';
import Portafolio from './Componentes/Portafolio';

function App() {
  return (
    <div className="App">
   
   <Navbar/>
    <Header/>
    <Descripcion/>
    <Portafolio/>
    <Redes/>
 
    
       
 


    </div>
  );
}

export default App;
