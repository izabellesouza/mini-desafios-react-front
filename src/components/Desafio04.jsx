import { useState } from "react"

function Desafio04() {
    const [contador, setContador] = useState(0)

    return (
        <div>
            <h2>Desafio 04 - Contador com useState</h2>
            <p>Valor atual: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        </div>
    )
}

export default Desafio04