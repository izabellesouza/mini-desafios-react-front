function Desafio05() {
    const curso = "Front-End"

    return (
        <div>
            <h2>Desafio 05 - Props</h2>
            <Mensagem curso={curso} />
        </div>
    )
}

function Mensagem({ curso }) {
    return <p>Estou estudando {curso} com React.</p>
}

export default Desafio05