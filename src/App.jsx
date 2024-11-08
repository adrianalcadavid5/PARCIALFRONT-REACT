import { useState } from 'react';
import Card from './Components/Card'
import "./styles/App.css"

function App() {

  const [letras, setLetras] = useState ({
    letrasNombre: "",
    nombreCompleto: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [err, setErr] = useState(false);

  const handleSumit = (event)=>{
    event.preventDefault();  
    if(
      letras.letrasNombre.trim().length === 3 &&
      letras.nombreCompleto.includes(" ") &&
      letras.nombreCompleto.trim().length >= 6
    ){
      setMostrar(true);
      setErr(false);
    }else{
      setErr(true);
      setMostrar(false);
    }
    
  };
  

  return (
    <>
      <div className='App'>
        <h1>Carga de estudiantes</h1>
        {mostrar ? (
          <Card nombre={letras.nombreCompleto} iniciales={letras.letrasNombre}/> 
        )  : (<form onSubmit={handleSumit}>
          <label>Ingrese las primeras 3 letras de tu nombre: </label>
          <input 
          type="text"
          value={letras.letrasNombre} 
          onChange={(event) =>setLetras({...letras, letrasNombre: event.target.value})}/>
          <br />
          <label>Ingrese su nombre completo: </label>
          <input type="text" 
          value={letras.nombreCompleto}
          onChange={(event) => setLetras({...letras, nombreCompleto: event.target.value})}/>
          <br />
          <button type="submit">Enviar</button>
          {err ? <h4 style={{ color: "red" }}>Por favor chequea que la información sea correcta</h4> : null}
        </form>) }
        
      </div>
    </>
  )
}

export default App
