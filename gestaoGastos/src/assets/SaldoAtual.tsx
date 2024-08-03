import { Transacao } from "./types"

interface SaldoAtualProps {
    transacoes: Transacao{}
}

const SaldoAtual = ({transacoes}: SaldoAtualProps) => {
    const calcularSaldo = () => {
        return transacoes.reduce((saldo, transacao:Transacao) => {
            return transacao.tipo === "receita" ? saldo + transacao.valor : saldo - transacao.valor
        }, 0)
    }
    
    return (
        <div>
            <h2>Saldo atual </>
            <p>R$ {calcularSaldo().toFixed(2)}</p>
        </div>
    )
}