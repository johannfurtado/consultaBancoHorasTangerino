// Parte 1: Somar Horas e Minutos dos Elementos Vermelhos
let horasNegativas = 0;
let minutosNegativos = 0;

document.querySelectorAll("[style*='color:red']").forEach((e) => {
    const conteudo = e.innerHTML;
    const partes = conteudo.split(':');
    const horas = parseInt(partes[0], 10);
    const minutos = parseInt(partes[1], 10);

    // Excluir caso especial (Seu ponto corrente do dia. Exemplo: -6:28)
    if (!(horas === -6 && minutos === 28)) {
        horasNegativas += Math.abs(horas); // Converter para positivo
        minutosNegativos += Math.abs(minutos); // Converter para positivo

    }
});

// Converter minutos excedentes em horas para a parte 1
const horasExcedentesParte1 = Math.floor(minutosNegativos / 60);
horasNegativas += horasExcedentesParte1;
minutosNegativos %= 60;

console.log(`Horas negativas: ${horasNegativas}:${minutosNegativos}`);

// Parte 2: Somar Horas e Minutos dos Elementos Verdes
let horasPositivas = 0;
let minutosPositivos = 0;

document.querySelectorAll("[style*='color:green']").forEach((e) => {
    const conteudo = e.innerHTML;
    const partes = conteudo.split(':');
    const horas = parseInt(partes[0], 10);
    const minutos = parseInt(partes[1], 10);

    horasPositivas += horas;
    minutosPositivos += minutos;
});

// Converter minutos excedentes em horas para a parte 2
const horasExcedentesParte2 = Math.floor(minutosPositivos / 60);
horasPositivas += horasExcedentesParte2;
minutosPositivos %= 60;

console.log(`Horas positivas: ${horasPositivas}:${minutosPositivos}`);

// Parte 3: Calcular a Diferença (Verde - Vermelho)
const minutosTotaisVerde = horasPositivas * 60 + minutosPositivos;
const minutosTotaisVermelho = horasNegativas * 60 + minutosNegativos;

let minutosTotais = minutosTotaisVerde - minutosTotaisVermelho;

console.log(`Horas totais: ${sinal}${Math.floor(Math.abs(minutosTotais) / 60)}:${Math.abs(minutosTotais) % 60}`);
