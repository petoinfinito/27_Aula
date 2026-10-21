// Lista inicial de estudantes armazenada em um Array
const listaDeEstudantes = [
    "Beatriz Oliveira",
    "Carlos Eduardo",
    "Daniela Santos",
    "Gabriel Ferreira",
    "Helena Rodrigues",
    "Lucas Vinicius"
];

// Obtendo as referencias dos elementos HTML pelo identificador
const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");

function exibirListaAutomaticamente() {
    // Limpa o conteudo atual da lista para evitar duplicaçãoes indesejadas
    elementoLista.innerHTML = "";

    //Percorre cada posição do array usando laço for
    for (let i = 0; i < listaDeEstudantes.length; i++) {
        // Cria um elemento <li> novo em memoria
        const itemLi = document.createElement("li"); //<li></li>
    itemLi.className = "item-nome"; //<li class="item-nome"></li>

    // Define o conteudo interno do item com o nome e sua respectiva ordem visual
itemLi.innerHTML = `
<span>${listaDeEstudantes[i]}</span>
<span class="posicao-tag">#${i + 1}</span>
`;

// Anexa o item criado dentro da tag <ul> da pagina
elementoLista.appendChild(itemLi);
   }

   // Atualiza a barra de status com total de registros lidos pelo laço
   elementoContador.innerText = `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados.`;

   elementoContador.style.color = "#16a34a";

   console.log(`Lista exibida com sucesso: ${listaDeEstudantes.length} itens processados`);
}

function limparLista() {
     elementoLista.innerHTML = "";
     elementoContador.innerText = `Lista limpa pelo usuario. Nenhum nome na tela.`;
     elementoContador.style.color = "#475569";
     console.log("tela limpa.");
}

function adicionarNovoNome() {
    const campoNovoNome = document.getElementById("campoNovoNome");
    const novoNome = campoNovoNome.value.trim();

   if (novoNome !== "") {
       
       listaDeEstudantes.push(novoNome);
       exibirListaAutomaticamente();
       campoNovoNome.value = ""; 
       campoNovoNome.focus();
    }

}

function exibirOrdemInvertida() {
    let contador = listaDeEstudantes.length - 1;

}


// Dispara a exibição automaticamente assim que o script for carregado
exibirListaAutomaticamente();
