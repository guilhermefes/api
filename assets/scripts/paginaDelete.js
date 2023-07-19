/*document.addEventListener('click', evente =>{

    if(evente.target.classList.contains('delete-button')){

    fetch(`http://localhost:5500/produtos/${evente.target.value}`, {
            method: 'DELETE', headers:{
                'Content.type': 'application/json'
            }
        }).then(resposta => {
            if(resposta.ok){
                alert('Produto apagado!');
                location.reload(); 
            }
        });
    }
})


fetch('http://localhost:5500/produtos', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resposta => resposta.json())
            .then(resposta => {

                for (let i = 0; i < resposta.length; i++) {

                    const ul = document.createElement('ul');
                    ul.classList.add('produto');

                    ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;
                    ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;
                    ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;

                    const liDelete = document.createElement('li');
                    const btDelete = document.createElement('button');
                    btDelete.innerHTML = '❌';
                    btDelete.value = resposta[i].id;
                    btDelete.classList.add('delete-button');

                    ul.appendChild(liDelete).appendChild(btDelete);

                    document.querySelector('#listaProdutos').appendChild(ul);
                }

            })*/
            