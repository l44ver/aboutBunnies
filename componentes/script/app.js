function pesquisar() {
    let section = document.getElementById("campo_resultado");

    let campoPesquisa = document.getElementById ("campo_pesquisa").value

    if (!campoPesquisa) { // se campoPesquisa for uma string sem nada
        section.innerHTML = "<p>Nada foi encontrado.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase() // coloca tudo minusculo pra nao dar problema

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class = "item_resultado">
            <h2>${dado.titulo}</h2>
            <p class="container_resultado_descricao">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais...</a>
            </div>
            `;
        }
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML = resultados // atribui os resultados gerados no HTML
}