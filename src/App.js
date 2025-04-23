import React, { useState } from 'react';
import './App.css';
import { FaPlus, FaTrash } from 'react-icons/fa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa }]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="entrada">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <button onClick={adicionarTarefa}>
          <FaPlus />
        </button>
      </div>
      <ul className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="fade-in">
            <span>{tarefa.texto}</span>
            <button onClick={() => removerTarefa(tarefa.id)} className="btn-remover">
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;