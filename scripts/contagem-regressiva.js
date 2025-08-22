window.addEventListener("load", () => {
    // Data do evento
    const dtEvent = new Date(2025, 9 - 1, 18, 0, 0, 0); // Altere a data do evento seguindo esse padrão: (Ano, mês - 1, dia, hora, minuto, segundo)
    const contReg = document.getElementById("verDtEvent"); // Tag HTML da contagem
    const intervalo = setInterval(AtualizarContagem, 1000); // Intervalo de atualização por segundo
    contReg.title = `${dtEvent.toLocaleDateString(
        "pt-BR"
    )} às ${dtEvent.toLocaleTimeString("pt-BR")}`; // Mostra a data e horas do evento

    function AtualizarContagem() {
        const dtAtual = new Date(); // Data atual
        const tempFalta = dtEvent - dtAtual; // Tempo que falta (milissegundos)

        // A contagem para ao chegar no horário do dia do evento
        if (tempFalta <= 0) {
            contReg.textContent = "00 dias, 00 horas, 00 minutos, 00 segundos.";
            clearInterval(intervalo);
            return;
        }

        // Abaixo são as fórmulas de conversão de tempo.
        // 1000 milissegundos é igual a 1 segundo.
        const segundos = Math.floor((tempFalta / 1000) % 60);
        const minutos = Math.floor((tempFalta / (1000 * 60)) % 60);
        const horas = Math.floor((tempFalta / (1000 * 60 * 60)) % 24);
        const dias = Math.floor(tempFalta / (1000 * 60 * 60 * 24));

        // Mostra a contagem na tela
        contReg.textContent = `${dias.toString().padStart(2, "0")} dias, ${horas
            .toString()
            .padStart(2, "0")} horas, ${minutos
            .toString()
            .padStart(2, "0")} minutos, ${segundos
            .toString()
            .padStart(2, "0")} segundos.`;
    }
});
