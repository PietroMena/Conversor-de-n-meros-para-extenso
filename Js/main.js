import { numeroParaExtenso } from './conversao.js';

/**
 * Lê o valor do input de número, converte para extenso usando `numeroParaExtenso`
 * e exibe o resultado no container de resultado na página.
 * 
 * @author Pedro Henrique Mena
 * @version 1.0
 * @since 2025-10-06
 * @returns {void} Não retorna nada; apenas atualiza o conteúdo.
 * @example
 * // Supondo que o input tenha o valor 42
 * saida_Extenso(); // O container de resultado exibirá "quarenta e dois"
 */
function saida_Extenso() {
    const input = document.getElementById('numero_Entrada');
    const valor = parseInt(input.value);

    const resultado = numeroParaExtenso(valor);

    const container = document.getElementById('resultado');
    container.textContent = resultado;
}

// Torna a função acessível no HTML
window.saida_Extenso = saida_Extenso;
