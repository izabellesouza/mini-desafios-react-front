import { useState } from "react"

function Desafio12() {
    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState([])

    function adicionarTarefa(event) {
        event.preventDefault()

        if (tarefa.trim() === "") {
            return
        }

        setTarefas([...tarefas, tarefa])
        setTarefa("")
    }

    return (
        <div>
            <h2>Desafio 12 - Lista de tarefas</h2>

            <form onSubmit={adicionarTarefa}>
                <input
                    type="text"
                    placeholder="Digite uma tarefa"
                    value={tarefa}
                    onChange={(event) => setTarefa(event.target.value)}
                />

                <button type="submit">Adicionar</button>
            </form>

            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Desafio12