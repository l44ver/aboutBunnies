function pesquisar() {
    let section = document.getElementById("container_pesquisa_resultado")
    console.log(section);
    
    section.classList.add("container_pesquisa_resultado")

    let resultados = ""
    for (let dado of dados) {
    resultados += `
    <div class = "item-resultado">
    <h2>${dado.titulo}</h2>
    <p class="container_resultado_descricao">${dado.descricao}</p>
    <a href="${dado.link}" target="_blank">Saiba mais...</a>
    </div>
`
}
section.innerHTML = resultados
}