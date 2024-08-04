import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Transacao } from "./types";

interface FormularioTransacaoProps {
  transacaoAtual: Transacao;
  salvarTransacao: (transacao: Transacao) => void;
  cancelarEdicao: () => void;
}

export const FormularioTransacao = ({
  transacaoAtual,
  salvarTransacao,
  cancelarEdicao,
}: FormularioTransacaoProps) => {
  const [transacao, setTransacao] = useState<Transacao>({
    id: 0,
    tipo: "receita",
    descricao: "",
    valor: 0,
  });

  useEffect(() => {
    if (transacaoAtual) {
      setTransacao(transacaoAtual);
    }
  }, [transacaoAtual]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    salvarTransacao(transacao);
    setTransacao({
      id: 0,
      tipo: "receita",
      descricao: "",
      valor: 0,
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setTransacao((prevTransacao) => ({
        ...prevTransacao,
        [name]: name === "valor" ? parseFloat(value) : value,
      }));
    };

  return;
  <form onSubmit={handleSubmit}>
    <div>
      <label>Tipo:</label>
      <select name="tipo" value={transacao.tipo} onChange={handleChange}>
        <option value="receita">Receita</option>
        <option value="despesa">Despesa</option>
      </select>
    </div>
    <div>
      <label>Descrição:</label>
      <input
        type="text"
        name="descricao"
        value={transacao.descricao}
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Valor:</label>
      <input
        type="number"
        name="valor"
        value={transacao.valor}
        onChange={handleChange}
        step="0.01"
      />
    </div>
    <button type="submit">Salvar</button>
    {transacaoAtual && (
      <button type="button" onClick={cancelarEdicao}>
        Cancelar
      </button>
    )}
  </form>;
};
