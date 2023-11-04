function comprar(){
    console.log('Inicio função comprar...')
    let tipo = document.getElementById('tipo-ingresso').value;
    console.log('tipo: ' + tipo);
    let qtd = parseInt(document.getElementById('qtd').value);
    console.log('qtd: ' + qtd);

    if(tipo == 'pista'){
        console.log('Comprando tipo pista.')
        comprarTipo(qtd,'pista');
    } else if (tipo == 'inferior'){
        console.log('Comprando tipo inferior.')
        comprarTipo(qtd,'inferior');
    } else {
        console.log('Comprando tipo superior.')
        comprarTipo(qtd,'superior');
    }
    console.log('...fim função comprar')
}

function comprarTipo(qtd, tipo){
    console.log('Inicio função comprarTipo...')
    let qtdTipo = parseInt(document.getElementById(`qtd-${tipo}`).textContent);
    console.log(`qtd${tipo} antes: ${qtdTipo}`)
    if (qtd > qtdTipo){
        alert(`Quantidade indisponível para tipo ${tipo}!`);
    } else {
        qtdTipo = qtdTipo - qtd;
        console.log(`qtd${tipo} agora: ${qtdTipo}`)
        document.getElementById(`qtd-${tipo}`).textContent = qtdTipo;
        alert('Compra realizada com sucesso!');
    }
    console.log('...fim função comprarTipo')
}