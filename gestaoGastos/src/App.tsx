import { useState } from 'react'
import { Transacao } from './assets/types'
import { SaldoAtual } from './assets/SaldoAtual'
import { ListaTransacoes } from './assets/ListaTransacoes'
import { FormularioTransacao } from "./assets/FormularioTransacao";

function App() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]) 

  const [transacaoEditando, setTransacaoEditando] = useState<Transacao | null>(null)
  
  const adicionarOuEditarTransacao = (transacao: Transacao) => {
    if (transacao.id===0){
      transacao.id = Math.random()
      setTransacoes(prevTransacoes => [...prevTransacoes, transacao])
    }
    else{
      const transacoesAtuais = transacoes.filter(t => t.id!== transacao.id)
      setTransacoes(prevTransacoes => prevTransacoes.map((t:Transacao) =>(it.id === transacao.id ? transacao : t)))
    }
  }
 const editarTransacao = (transacao: Transacao) => setTransacaoEditando(transacao)

 const deletarTransacao = (id: number) => 
  setTransacoes(prevTransacoes => prevTransacoes.filter((t:Transacao) => t.id !== id))

const cancelaEdicao = () => setTransacaoEditando(null)
return (
  <div className="bg-slate-50 p-6 flex gap-4 flex-col">
    <h1 >Gestão de Gastos</h1>
    <SaldoAtual transacoes={transacoes} />
    <FormularioTransacao
      transacaoAtual={transacaoEditando}
      salvarTransacao={adicionarOuEditarTransacao}
      cancelaEdicao={cancelaEdicao}
    />
    <ListaTransacoes
      transacoes={transacoes}
      editarTransacao={editarTransacao}
      deletarTransacao={deletarTransacao}
    />
  </div>
);
}
export default App
