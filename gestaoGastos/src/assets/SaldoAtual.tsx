import { Transacao } from "./types";

interface SaldoAtualProps {
  transacoes: Transacao[];
}

export const SaldoAtual = ({ transacoes }: SaldoAtualProps) => {
  const calcularSaldo = () => {
    return transacoes.reduce((saldo, transacao: Transacao) => {
      return transacao.tipo === "receita"
        ? saldo + transacao.valor
        : saldo - transacao.valor;
    }, 0);
  };

  return (
    <div className="p-8 bg-slate-300 w-full flex gap-4 flex-col rounded-tl-2xl rounded-bl-2xl">
      <h2 className="text-xl font-medium">Saldo atual</h2>
      <p className={'text 3xl ${calcularSaldo() < 0 ? "text-red-600" : "text-green-600"} '}>R$ {calcularSaldo().toFixed(2)}</p>
    </div>
  );
};
