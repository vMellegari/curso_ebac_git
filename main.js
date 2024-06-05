document.addEventListener('DOMContentLoaded', function() {
    const nomeElem = document.querySelector('#nome');
    const usuarioElem = document.querySelector('#usuario');
    const repositElem = document.querySelector('#reposit');
    const seguidoresElem = document.querySelector('#seguidores');
    const seguindoElem = document.querySelector('#seguindo');
    const linkElem = document.querySelector('#link');
    const avatarElem = document.querySelector('#avatar');

    const url = 'https://api.github.com/users/vMellegari';

    fetch(url)
    .then(function(resposta) {
        if (!resposta.ok) {
            throw new Error('Erro na requisição: ' + resposta.statusText);
        }
        return resposta.json();
    })
    .then(function(json) {
        nomeElem.innerText = json.name;
        usuarioElem.innerText = json.login;
        avatarElem.src = json.avatar_url;
        seguindoElem.innerText = json.following;
        seguidoresElem.innerText = json.followers;
        repositElem.innerText = json.public_repos;
        linkElem.href = json.html_url;
    })
    .catch(function(error) {
        console.error('Erro:', error);
    });
})