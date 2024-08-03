import { Transacao } from "./types";

interface ListarTransacoesProps {
    transacao: Transacao[];
    editarTransacao: (transacao: Transacao) => void;
    deletarTransacao: (id: number) => void;
}
export const ListaTransacoes = ({transacoes, editarTransacao, deletarTransacao,}: ListarTransacoesProps) => {
return (<div>
    <h2>Lista de Transacoes</h2>
    <ul>
        {transacoes?.map((transacao: Transacao) => (
            <li key={transacao.id}>
                <h3>{transacao.descricao}</h3>
                <p>Tipo: {transacao.tipo}</p>
                <p>Valor: R${transacao.valor.toFixed(2)}</p>
                <button onClick={() => editarTransacao(transacao)}>Editar</button>
                <button onClick={() => deletarTransacao(transacao.id)}>Deletar</button>
            </li>
        ) )}
    </ul>
</div>)

};