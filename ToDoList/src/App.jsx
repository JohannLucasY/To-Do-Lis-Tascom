import { useState } from "react";
import "./App.css";
import FormularioTarefa from "./components/FormularioTarefa";
import ListaTarefas from "./components/ListaTarefas";
import Lixeira from "./components/Lixeira";
import Sobre from "./components/Sobre";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [idEmEdicao, setIdEmEdicao] = useState(null);
  const [mostrarLixeira, setMostrarLixeira] = useState(false);
  const [mostrarSobre, setMostrarSobre] = useState(false);

  function salvarTarefa() {
    if (titulo.trim() === "") return;

    if (idEmEdicao !== null) {
      setTarefas(
        tarefas.map((tarefa) =>
          tarefa.id === idEmEdicao ? { ...tarefa, titulo, descricao } : tarefa
        )
      );
      setIdEmEdicao(null);
    } else {
      const novaTarefa = {
        id: Date.now(),
        titulo,
        descricao,
        criadaEm: new Date(),
        naLixeira: false,
      };
      setTarefas([...tarefas, novaTarefa]);
    }

    setTitulo("");
    setDescricao("");
  }

  function iniciarEdicao(tarefa) {
    setIdEmEdicao(tarefa.id);
    setTitulo(tarefa.titulo);
    setDescricao(tarefa.descricao);
  }

  function moverParaLixeira(id) {
    setTarefas(
      tarefas.map((tarefa) => (tarefa.id === id ? { ...tarefa, naLixeira: true } : tarefa))
    );
  }

  function recuperarTarefa(id) {
    setTarefas(
      tarefas.map((tarefa) => (tarefa.id === id ? { ...tarefa, naLixeira: false } : tarefa))
    );
  }

  function deletarPermanente(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  const tarefasAtivas = tarefas.filter((t) => !t.naLixeira);
  const tarefasNaLixeira = tarefas.filter((t) => t.naLixeira);

  return (
    <div className="app-container">
      <h1>Minhas Tarefas</h1>

      <button
        className="btn-lixeira"
        onClick={() => {
          setMostrarSobre(false);
          setMostrarLixeira(!mostrarLixeira);
        }}
      >
        {mostrarLixeira ? "← Voltar para tarefas" : `Ver lixeira (${tarefasNaLixeira.length})`}
      </button>

      <button
        className="btn-lixeira"
        onClick={() => {
          setMostrarLixeira(false);
          setMostrarSobre(!mostrarSobre);
        }}
      >
        {mostrarSobre ? "← Voltar" : "Sobre"}
      </button>

      {mostrarSobre ? (
        <Sobre />
      ) : mostrarLixeira ? (
        <Lixeira
          tarefas={tarefasNaLixeira}
          onRecuperar={recuperarTarefa}
          onDeletarPermanente={deletarPermanente}
        />
      ) : (
        <>
          <FormularioTarefa
            titulo={titulo}
            descricao={descricao}
            setTitulo={setTitulo}
            setDescricao={setDescricao}
            onSalvar={salvarTarefa}
            emEdicao={idEmEdicao !== null}
          />
          <ListaTarefas
            tarefas={tarefasAtivas}
            onEditar={iniciarEdicao}
            onMoverParaLixeira={moverParaLixeira}
          />
        </>
      )}
    </div>
  );
}

export default App;