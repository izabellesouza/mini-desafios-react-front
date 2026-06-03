function Desafio03() {
    function mostrarMensagem() {
        alert("Botão clicado com sucesso!")
    }

    return (
        <div>
            <h2>Desafio 03 - Evento de clique</h2>
            <button onClick={mostrarMensagem}>Clique aqui</button>
        </div>
    )
}

export default Desafio03