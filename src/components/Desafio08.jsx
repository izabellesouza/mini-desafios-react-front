import { useState } from "react"

function Desafio08() {
    const [texto, setTexto] = useState("")

    return (
        <div>
            <h2>Desafio 08 - Input controlado</h2>

            <input
                type="text"
                placeholder="Digite algo"
                value={texto}
                onChange={(event) => setTexto(event.target.value)}
            />

            <p>Texto digitado: {texto}</p>
        </div>
    )
}

export default Desafio08