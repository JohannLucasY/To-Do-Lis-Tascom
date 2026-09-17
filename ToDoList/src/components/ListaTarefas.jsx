import CardTarefa from "./CardTarefa";

function agruparPorData(tarefas) {
  const grupos = {};

  tarefas.forEach((tarefa) => {
    const chave = tarefa.criadaEm.toLocaleDateString();

    if (!grupos[chave]) {
      grupos[chave] = [];
    }
    grupos[chave].push(tarefa);
  });

  return grupos;
}

function ListaTarefas({ tarefas, onEditar, onMoverParaLixeira }) {
  const grupos = agruparPorData(tarefas);
  const datas = Object.keys(grupos);

  if (datas.length === 0) {
    return <p style={{ color: "#888" }}>Nenhuma tarefa ainda.</p>;
  }

  return (
    <div>
      {datas.map((data) => (
        <div key={data} style={{ marginBottom: 16 }}>
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: 4 }}>{data}</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {grupos[data].map((tarefa) => (
              <CardTarefa
                key={tarefa.id}
                tarefa={tarefa}
                onEditar={onEditar}
                onMoverParaLixeira={onMoverParaLixeira}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ListaTarefas;