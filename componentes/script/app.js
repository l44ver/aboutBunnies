function pesquisar() {
    let section = document.getElementById("container_pesquisa_resultado")
    console.log(section);

    let resultados = ""
    for (let dado of dados) {
    resultados += `
    <h2>${dado.titulo}</h2>
    <p class="container_resultado_descricao">${dado.descricao}</p>
    <a href="${dado.link}" target="_blank">Saiba mais...</a>
`
}
section.innerHTML = resultados
}