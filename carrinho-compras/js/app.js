let totalGeral = 0;

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

limpar();

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    console.log(produto);
    let nomeProduto = produto.split('-')[0];
    console.log(nomeProduto)
    let valorUnitario = produto.split('R$')[1];
    console.log(valorUnitario)
    let quantidade = document.getElementById('quantidade').value;
    console.log(quantidade)
    
    //calcular o preço, nosso subtotal
    let preco = quantidade * valorUnitario;
    console.log("preco: " + preco);
    
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

    //atualizar valor total
    totalGeral = totalGeral + preco;
    console.log("totalGeral: " + totalGeral);
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

