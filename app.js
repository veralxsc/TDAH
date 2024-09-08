function pesquisar() {
    // Seção HTML - Resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Não foi possível encontrar. Você precisa digitar o nome e a forma como era percebido pela sociedade mudou ao longo do tempo as crianças com TDAH.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Aqui são amarzendo as string vazias

    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Aqui são alteração dos dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            // criação de um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Não foi possível encontrar a pesquisa.</p>"
    }

    // Resultados gerados à seção HTML
    section.innerHTML = resultados;
}





