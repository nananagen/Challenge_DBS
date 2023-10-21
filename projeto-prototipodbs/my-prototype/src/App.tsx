import React from 'react';
import './App.css';
import Planilha from '../src/components/Planilha';
import 'handsontable/dist/handsontable.full.css'; // Importar os estilos do Handsontable

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Protótipo de Planilha</h1>
        <Planilha />
      </header>
    </div>
  );
}

export default App;
