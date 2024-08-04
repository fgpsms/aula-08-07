import { Transacao } from "./types";

interface ListarTransacoesProps {
  transacoes: Transacao[];
  editarTransacao: (transacao: Transacao) => void;
  deletarTransacao: (id: number) => void;
}
export const ListaTransacoes = ({
  transacoes,
  editarTransacao,
  deletarTransacao,
}: ListarTransacoesProps) => {
  return (
    <div className="bg-slate-300 p-6 rounded-2xl flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">Lista de Transações</h2>
      <ul className="flex gap-2 flex-col w-full gap-3">
        {transacoes?.map((transacao: Transacao) => (
          <li
            key={transacao.id}
            className="p-4 bg-white rounded-xl flex flex-row justify-between items-center"
          >
            <div>
              <h3>{transacao.descricao}</h3>
              <p>Tipo: {transacao.tipo}</p>
              <p>Valor: R${transacao.valor.toFixed(2)}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="p-2 rounded bg-slate-400 text-slate-100 font-extrabold"
                onClick={() => editarTransacao(transacao)}
              >
                Editar
              </button>
              <button
                className="p-2 rounded bg-slate-400 text-slate-100 font-extrabold"
                onClick={() => deletarTransacao(transacao.id)}
              >
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
