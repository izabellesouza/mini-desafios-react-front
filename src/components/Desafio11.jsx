import { useState } from "react"

function Desafio11() {
    const [cor, setCor] = useState("")

    return (
        <div>
            <h2>Desafio 11 - Alterando texto com state</h2>

            <button onClick={() => setCor("azul")}>Azul</button>
            <button onClick={() => setCor("verde")}>Verde</button>
            <button onClick={() => setCor("vermelho")}>Vermelho</button>

            <p>Cor escolhida: {cor}</p>
        </div>
    )
}

export default Desafio11