import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  function adicionarTarefa() {
    if (titulo.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      titulo: titulo,
      descricao: descricao,
      criadaEm: new Date(),     
      naLixeira: false,
    };

    setTarefas([...tarefas, novaTarefa]);

    setTitulo("");
    setDescricao("");
  }

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif", maxWidth: 500 }}>
      <h1>Minhas Tarefas</h1>

      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título da tarefa"
        style={{ display: "block", marginBottom: 8, padding: 8, width: "100%" }}
      />
      <input
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição (opcional)"
        style={{ display: "block", marginBottom: 8, padding: 8, width: "100%" }}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            style={{ border: "1px solid #ccc", borderRadius: 8, padding: 12, marginBottom: 8 }}
          >
            <strong>{tarefa.titulo}</strong>
            <p style={{ margin: "4px 0" }}>{tarefa.descricao}</p>
            <small style={{ color: "#666" }}>
              Criada em: {tarefa.criadaEm.toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;