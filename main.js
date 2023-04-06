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
    if (hoursFormat >= 0 && hoursFormat < 5){

    }
    if (hoursFormat >= 5 && hoursFormat < 8){

    }
    if (hoursFormat >= 8 && hoursFormat < 10){

    }
    if (hoursFormat >= 10 && hoursFormat < 12){

    }
    if (hoursFormat >= 12 && hoursFormat < 15){

    }
    if (hoursFormat >= 15 && hoursFormat < 17){

    }
    if (hoursFormat >= 17 && hoursFormat < 19){

    }
    if (hoursFormat >= 19 && hoursFormat < 20){

    }
    else{

    }

}   
setInterval(clock, 1000);
