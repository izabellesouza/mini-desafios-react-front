function Desafio06() {
    const tecnologias = ["HTML", "CSS", "JavaScript", "React"]

    return (
        <div>
            <h2>Desafio 06 - Lista com map</h2>

            <ul>
                {tecnologias.map((tecnologia, index) => (
                    <li key={index}>{tecnologia}</li>
                ))}
            </ul>
        </div>
    )
}

export default Desafio06