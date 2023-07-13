fetch('http://localhost:5500/produtos', {
    method: 'GET', headers: {
        'content-type': 'application/json'
    }
    })
    .then(resposta => resposta.json())
    .then(resposta => {
        for(i=0; i < resposta.length; i++){

            const ul = document.createElement('ul');
            ul.classList.add('produto')

            ul.appendChild(document.createElement('li'))
            .innerHTML = resposta[i].id;

            ul.appendChild(document.createElement('li'))
            .innerHTML = resposta[i].descricao;

            ul.appendChild(document.createElement('li'))
            .innerHTML = resposta[i].preco;

            document.querySelector('#listaProdutos').appendChild(ul);
        };
    })