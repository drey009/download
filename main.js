function clock(){
    const clockElement = document.querySelector('.clock');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hoursFormat = hours.toString().padStart(2, '0');
    const minutesFormat = minutes.toString().padStart(2, '0');
    const secondsFormat = seconds.toString().padStart(2, '0');
    clockElement.textContent = `${hoursFormat}:${minutesFormat}:${secondsFormat}`;

    // const frase = document.querySelector('.frase');
    // dia = new Array('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado');
    // mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')

    // hoje = new Date()
    // frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`
    

}   
setInterval(clock, 1000);
