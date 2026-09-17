function Lixeira({ tarefas, onRecuperar, onDeletarPermanente }) {
  if (tarefas.length === 0) {
    return <p>Lixeira vazia.</p>;
  }

  return (
    <div className="lixeira">
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="card-tarefa">
            <strong>{tarefa.titulo}</strong>
            <p>{tarefa.descricao}</p>
            <div>
              <button onClick={() => onRecuperar(tarefa.id)}>Recuperar</button>
              <button onClick={() => onDeletarPermanente(tarefa.id)}>Deletar de vez</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lixeira;