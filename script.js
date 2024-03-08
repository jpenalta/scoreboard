let timer;
let minutes = 10;
let seconds = 0;
let isTimerRunning = false;

// Obtiene la URL actual
const urlParams = new URLSearchParams(window.location.search);

// Obtén los valores de los parámetros de la URL
const localLogoUrl = urlParams.get('localLogoUrl');
const visitanteLogoUrl = urlParams.get('visitanteLogoUrl');

if (isNaN(localLogoUrl) && isNaN(visitanteLogoUrl)) {
    // Asigna las URLs de los logos a las imágenes
    document.getElementById("localLogo").src = localLogoUrl;
    document.getElementById("visitanteLogo").src = visitanteLogoUrl;
}


function toggleTimer() {
    const button = document.getElementById("timerButton");

    if (isTimerRunning) {
        clearInterval(timer);
        button.innerText = "Iniciar Cronómetro";
    } else {
        timer = setInterval(updateTimer, 1000);
        button.innerText = "Parar Cronómetro";
    }

    isTimerRunning = !isTimerRunning;
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        playBuzzer();
        alert("Fin del juego");
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        updateTimerDisplay()
    }
}

function updateScore(team, points) {
    const localScoreElement = document.getElementById("localScore");
    const visitanteScoreElement = document.getElementById("visitanteScore");
    let localScore = parseInt(localScoreElement.innerText);
    let visitanteScore = parseInt(visitanteScoreElement.innerText);
    
    if (team === "local" ) {
        localScore += points;
        if(localScore <0){
            localScore = 0;
        }
    } else if (team === "visitante" && visitanteScore >=0) {
        visitanteScore += points;
         if(visitanteScore <0){
            visitanteScore = 0;
        }
    }

    // Añadir ceros a la izquierda si el marcador es de un solo dígito
    const displayLocalScore = localScore.toString().padStart(2, '0');
    const displayVisitanteScore = visitanteScore.toString().padStart(2, '0');

    localScoreElement.innerText = displayLocalScore;
    visitanteScoreElement.innerText = displayVisitanteScore;
}


function showResetInput() {
    const resetInputContainer = document.getElementById("resetInputContainer");
    resetInputContainer.style.display = "block";
}

function resetTimer() {
    const resetInput = document.getElementById("resetInput");
    const newTime = resetInput.value.split(":");
    const newMinutes = parseInt(newTime[0]);
    const newSeconds = parseInt(newTime[1]);

    if (!isNaN(newMinutes) && !isNaN(newSeconds)) {
        clearInterval(timer);
        isTimerRunning = false;
        minutes = newMinutes;
        seconds = newSeconds;
        updateTimerDisplay();
        document.getElementById("timerButton").innerText = "Iniciar Cronómetro";
        hideResetInput();
    } else {
        alert("Por favor, introduce un tiempo válido (por ejemplo, 10:00).");
    }
}


function playBuzzer() {
    const buzzer = document.getElementById("buzzer");
    buzzer.play();
}

function hideResetInput() {
    const resetInputContainer = document.getElementById("resetInputContainer");
    resetInputContainer.style.display = "none";
}

function updateTimerDisplay() {
    const displayMinutes = minutes.toString().padStart(2, '0');
    const displaySeconds = seconds.toString().padStart(2, '0');
    document.getElementById("timerText").innerText = `${displayMinutes}:${displaySeconds}`;;
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault();
        toggleTimer();
    }else{
        const key = event.key.toLowerCase(); // Obtén la tecla presionada en minúsculas
        if (key === "a") {
            updateScore('local', 1);
        }else if(key === "s") {
           updateScore('local', -1);
        } else if (key === "k") {
            updateScore('visitante', 1);
        }else if(key === "l") {
            updateScore('visitante', -1)
        }
     }
});

document.addEventListener("DOMContentLoaded", function() {
    const buttonContainer = document.getElementById("buttonContainer");

    // Muestra la barra de botones cuando el ratón se acerca al final de la página
    document.addEventListener("mousemove", function(event) {
        const distanceFromBottom = window.innerHeight - event.clientY;
        if (distanceFromBottom <= 100) {
            buttonContainer.style.bottom = "0";
        } else {
            buttonContainer.style.bottom = `-${buttonContainer.clientHeight}px`;
        }
    });
});

