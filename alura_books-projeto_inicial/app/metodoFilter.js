const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
    
}


function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
     `
}

//Aqui está um exemplo de como o código JavaScript pode ser modificado para incorporar essas etapas:
// function filtrarELimpar(livrosFiltrados) {
//     elementoParaInserirLivros.innerHTML = ''; // Limpa o conteúdo anterior
//     exibirOsLivrosNaTela(livrosFiltrados); // Exibe os novos livros filtrados
// }

// // Supondo que essa função seja chamada quando um botão de categoria é clicado
// function aoClicarNoBotao(categoria) {
//     const livrosFiltrados = livros.filter(livro => livro.categoria === categoria);
//     filtrarELimpar(livrosFiltrados);
// }