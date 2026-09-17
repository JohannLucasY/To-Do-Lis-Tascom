function CardTarefa({ tarefa, onEditar, onMoverParaLixeira }) {
  return (
    <li className="card-tarefa">
      <strong>{tarefa.titulo}</strong>
      <p>{tarefa.descricao}</p>
      <small>Criada em: {tarefa.criadaEm.toLocaleTimeString()}</small>
      <div>
        <button onClick={() => onEditar(tarefa)}>Editar</button>
        <button onClick={() => onMoverParaLixeira(tarefa.id)}>Excluir</button>
      </div>
    </li>
  );
}

export default CardTarefa;