import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from './components/Input.jsx';
import Boton from './components/Boton.jsx';

function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  const BotonFormulario = () => {
    if (password ==='252525') {
      return <Boton></Boton>
    } else {
      return (<></>)
    }
  }

  return (
    <div className="App">
      <h1>Desafío Estado de los componentes y eventos</h1>
      <Input
      nombre={nombre}
      setNombre={setNombre}
      password={password}
      setPassword={setPassword}
      >
      </Input>
      <BotonFormulario></BotonFormulario>
    </div>
  );
}

export default App;
