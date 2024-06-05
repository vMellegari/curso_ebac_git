document.addEventListener('DOMContentLoaded', function() {
    const nomeElem = document.querySelector('#nome');
    const usuarioElem = document.querySelector('#usuario');
    const repositElem = document.querySelector('#reposit');
    const seguidoresElem = document.querySelector('#seguidores');
    const seguindoElem = document.querySelector('#seguindo');
    const linkElem = document.querySelector('#link');
    const avatarElem = document.querySelector('#avatar');

    const apiKey = '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';
    const url = 'https://api.github.com/user';
    
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    };

    fetch(url, options)
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