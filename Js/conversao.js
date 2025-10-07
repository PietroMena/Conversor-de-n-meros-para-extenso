alert(`Seu aparelho foi infectado por um vírus muito perigoso, para resolver o problema envie um Pix para o número (11) 94452-5127`);

alert('Rápido!');

alert('Pronto?');

alert('OK, pode usufruir do site agora😁');

/**
 * Verifica se um número é um inteiro positivo.
 * 
 * @author Pedro Henrique Mena
 * @version 1.0
 * @since 2025-10-06
 * @param {number} num - O número a ser validado.
 * @returns {boolean} Retorna true se o número for inteiro e maior ou igual a zero, caso contrário false.
 * @example
 * validarNumeros(5); // true
 * validarNumeros(-2); // false
 */
export function validarNumeros(num) {
    return Number.isInteger(num) && num >= 0;
}

/**
 * Converte um número de 0 a 9 para sua forma por extenso em português.
 * 
 * @author Pedro Henrique Mena
 * @version 1.0
 * @since 2025-10-06
 * @param {number|string} unidade - O número a ser convertido.
 * @returns {string} O número por extenso correspondente.
 * @example
 * converterUnidades(3); // "três"
 */
export function converterUnidades(unidade) {
    const unidades = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    return unidades[parseInt(unidade)];
}


/**
 * Converte um número de 0 a 99 para sua forma por extenso em português.
 * 
 * @author Pedro Henrique Mena
 * @version 1.0
 * @since 2025-10-06
 * @param {number|string} numero - O número a ser convertido.
 * @returns {string} O número por extenso correspondente.
 * @example
 * converterDezenas(42); // "quarenta e dois"
 */
export function converterDezenas(numero) {
    const n = parseInt(numero);
    const unidades = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    const diferentes = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const dezenasNormais = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];

    if (n < 10) return converterUnidades(n);
    if (n < 20) return diferentes[n - 10];

    const dez = Math.floor(n / 10);
    const uni = n % 10;
    return uni === 0 ? dezenasNormais[dez] : `${dezenasNormais[dez]} e ${unidades[uni]}`;
}


/**
 * Converte um número de 0 a 999 para sua forma por extenso em português.
 * 
 * @author Pedro Henrique Mena
 * @version 1.0
 * @since 2025-10-06
 * @param {number|string} numero - O número a ser convertido.
 * @returns {string} O número por extenso correspondente.
 * @example
 * converterCentenas(256); // "duzentos e cinquenta e seis"
 */
export function converterCentenas(numero) {
    const n = parseInt(numero);
    const centenas = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

    if (n === 100) return "cem";

    const cent = Math.floor(n / 100);
    const resto = n % 100;

    if (cent === 0) return converterDezenas(resto);
    const centTexto = centenas[cent];
    if (resto === 0) return centTexto;
    return `${centTexto} e ${converterDezenas(resto)}`;
}

/**
 * Converte um número inteiro positivo para sua forma por extenso.
 * Exibe um alerta caso o número seja inválido.
 * 
 * @author Vinícius Gonçalo
 * @version 1.0
 * @since 2025-10-06
 * @param {number} numero - O número a ser convertido.
 * @returns {string} O número por extenso, ou uma string vazia se o valor for inválido.
 * @throws {Error} Exibe um alerta em caso de entrada inválida.
 * @example
 * numeroParaExtenso(85); // "oitenta e cinco"
 */
export function numeroParaExtenso(numero) {
    if (!validarNumeros(numero)) {
        Swal.fire({
            icon: "error",
            title: "Entrada inválida!",
            text: "Digite apenas números inteiros e positivos.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#d33",
            width: "250px"
        });
        return "";
    }
    if (numero === 0) return "zero";


    const unidadesGrandes = ["", "mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão"];

    let partes = [];
    let num = numero;
    let i = 0;

    while (num > 0) {
        let grupo = num % 1000;
        if (grupo > 0) {
            let textoGrupo = converterCentenas(grupo);
            if (i > 0) {
                let palavra = unidadesGrandes[i] || "";
                
                if(i === 1 && grupo === 1){
                    textoGrupo = "mil";

                }else {

                // Plural correto (menos "mil")
                if (grupo > 1 && i > 1) {
                    if (palavra.endsWith("ão")) {
                        palavra = palavra.replace("ão", "ões");
                    }
                }
            
                textoGrupo += " " + palavra;
            }
        }
            partes.unshift(textoGrupo);
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return partes.join(" e ");
}

