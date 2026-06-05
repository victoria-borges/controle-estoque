let estoque = [];

function adicionarProduto() {
  let produto = document.getElementById("produto").value;

  let quantidade = document.getElementById("quantidade").value;

  estoque.push({
    produto,
    quantidade,
  });

  atualizarLista();

  salvarDados();
}

function atualizarLista() {
  let lista = document.getElementById("listaProdutos");

  lista.innerHTML = "";

  estoque.forEach((item) => {
    lista.innerHTML += `
        <li>
        ${item.produto}
        - Quantidade: ${item.quantidade}
        </li>
        `;
  });

  document.getElementById("totalProdutos").innerText = estoque.length;
}

function salvarDados() {
  localStorage.setItem("estoque", JSON.stringify(estoque));
}

function carregarDados() {
  let dados = localStorage.getItem("estoque");

  if (dados) {
    estoque = JSON.parse(dados);
    atualizarLista();
  }
}

carregarDados();

function pesquisarProduto() {
  let filtro = document.getElementById("pesquisa").value.toLowerCase();

  let itens = document.querySelectorAll("#listaProdutos li");

  itens.forEach((item) => {
    if (item.innerText.toLowerCase().includes(filtro)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

function excluirProduto(index) {
  estoque.splice(index, 1);

  salvarDados();

  atualizarLista();
}
