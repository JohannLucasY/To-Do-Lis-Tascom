function FormularioTarefa({
  titulo,
  descricao,
  setTitulo,
  setDescricao,
  onSalvar,
  emEdicao,
}) {
  return (
    <div className="formulario">
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título da tarefa"
      />
      <input
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição (opcional)"
      />
      <button onClick={onSalvar}>{emEdicao ? "Salvar edição" : "Adicionar"}</button>
    </div>
  );
}

export default FormularioTarefa;