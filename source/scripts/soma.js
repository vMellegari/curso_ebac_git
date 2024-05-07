document.getElementById('calcular').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);
    const resultado = num1 + num2;
    document.getElementById('resultado').innerText = `O resultado da soma é: ${resultado}`;
});