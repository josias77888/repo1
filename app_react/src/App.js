
import './App.css';
import React, { useState } from 'react';

function App() {

  const [mensaje, setMensaje] = useState('');

  const mostrarMensaje = () => {
    setMensaje('🎉¡FELICIDADES!🎉 te ganaste un pito 🍆 de 30 CM disfrutalo');
  };

  return (
    <div className="App">
      <header className="App-header">
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>Toca el boton para obtener un regalo</p>
            <button className='btn-enviar' onClick={mostrarMensaje}>🎁</button>
            <p>{mensaje}</p>
          </div>
      
      </header>
    </div>
  );
}

export default App;
