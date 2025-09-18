import { numeroParaExtenso } from './conversao.js';

function saida_Extenso() {
    const input = document.getElementById('numero_Entrada');
    const valor = parseInt(input.value);

    const resultado = numeroParaExtenso(valor);

    const container = document.getElementById('resultado');
    container.textContent = resultado;
}

// Torna a função acessível no HTML
window.saida_Extenso = saida_Extenso;
