let amigos = [];

function adicionarAmigo() {
    
    let input = document.getElementById('amigo');
    let nome = input.value.trim(); 

    
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

amigos.push(nome);

atualizarListaAmigos();

input.value = '';
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li'); 
        item.textContent = amigos[i]; 
        lista.appendChild(item);
    }
}

function sortearAmigo() {
        if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

let indiceSorteado = Math.floor(Math.random() * amigos.length);

let amigoSorteado = amigos[indiceSorteado];

let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}