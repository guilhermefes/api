document.querySelector('#buttonCadastro').addEventListener('click', ()=>{

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value,
    }

    fetch('http://localhost:5500/produtos', {method: 'POST', 
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(dados)
})
.then(resposta => {
    if(resposta.ok) {
        alert('Produto cadastrado')
    }
})
});