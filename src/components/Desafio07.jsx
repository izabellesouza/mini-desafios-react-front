import { useState } from "react"

function Desafio07() {
    const [logado, setLogado] = useState(false)

    return (
        <div>
            <h2>Desafio 07 - Renderização condicional</h2>

            {logado ? <p>Usuário logado.</p> : <p>Usuário não está logado.</p>}

            <button onClick={() => setLogado(!logado)}>
                Alterar status
            </button>
        </div>
    )
}

export default Desafio07