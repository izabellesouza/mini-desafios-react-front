function Desafio10() {
    const aluno = {
        nome: "Izabelle",
        curso: "Front-End",
        periodo: "4º período"
    }

    return (
        <div>
            <h2>Desafio 10 - Objeto no JSX</h2>
            <p>Nome: {aluno.nome}</p>
            <p>Curso: {aluno.curso}</p>
            <p>Período: {aluno.periodo}</p>
        </div>
    )
}

export default Desafio10