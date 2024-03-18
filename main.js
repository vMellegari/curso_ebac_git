const form = document.getElementById ('form-numero');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var inputA = document.getElementById ('campo-a').value;
    var numeroA = parseFloat(inputA);
    var inputB = document.getElementById ('campo-b').value;
    var numeroB = parseFloat(inputB);
    console.log(typeof numeroA);
    console.log(typeof numeroB);

    const menssagemPositiva = `<b> O número é valido </b>`;
    const menssagemNegativa = `<b> O número não é valido </b>`;

    if (numeroA < numeroB) {
        const containerMenssagemP = document.querySelector ('.message');
        containerMenssagemP.innerHTML = menssagemPositiva;
        containerMenssagemP.style.display = 'block';
        containerMenssagemP.style.color = 'green';
        console.log('B maior que A');
    } else {
        const containerMenssagemN = document.querySelector ('.message');
        containerMenssagemN.innerHTML = menssagemNegativa;
        containerMenssagemN.style.display = 'block';
        containerMenssagemN.style.color = 'red';
        console.log('A maior que B');
    }
})