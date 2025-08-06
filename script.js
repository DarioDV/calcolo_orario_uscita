function calculateTime() {
  // Mostra il pop-up casuale
  //showRandomPopup();

  var currentTime = new Date(); // Ottieni l'orario attuale

  var inputTime = document.getElementById('inputTime').value;
  var additionalTime = document.getElementById('additionalTime').value;
  var tempopausapranzo = document.getElementById('minutipausa').value;
  var labelInputTime = document.getElementById('inputTime');
  
  var time = new Date("2024-01-01T" + inputTime + ":00");

  var additionalHours = parseInt(additionalTime.substring(0, 2));
  var additionalMinutes = parseInt(additionalTime.substring(3));

  time.setHours(time.getHours() + additionalHours);
  time.setMinutes(time.getMinutes() + additionalMinutes + parseInt(tempopausapranzo));

  var hours = String(time.getHours()).padStart(2, '0');
  var minutes = String(time.getMinutes()).padStart(2, '0');
  var resultTime = hours + ":" + minutes;

  var resultDisplay = document.getElementById('result');

  document.getElementById('preButtonImage').style.display = 'none';

  if ((Number(inputTime) == 0) || (Number(additionalTime) == 0) ){ 
    document.getElementById('result').innerText = "❗ Inserisci un valore corretto negli orari !!";
    labelInputTime.style.border = "2px solid red";
    labelInputTime.style.backgroundColor = "#ffe6e6";
    document.getElementById('postButtonImage').style.display = 'none';
    document.getElementById('thirdImage').style.display = 'none';
    //document.getElementById('cineseincu').style.display = 'inline';
    const image = document.getElementById("cineseincu");
    image.style.display = "block";
    image.style.margin = "20px auto";
  } else if (resultTime > currentTime.toLocaleTimeString()) {
    document.getElementById('result').innerText = "Troppo presto! Devi aspettare le " + resultTime;
    document.getElementById('postButtonImage').style.display = 'none';
    document.getElementById('thirdImage').style.display = 'inline';
    document.getElementById('cineseincu').style.display = 'none';
    labelInputTime.style.border = "";
    labelInputTime.style.backgroundColor = "";
  } else {
    document.getElementById('result').innerText = "Fantastico potevi marcare alle " + resultTime;
    document.getElementById('thirdImage').style.display = 'none';
    document.getElementById('postButtonImage').style.display = 'inline';
    document.getElementById('cineseincu').style.display = 'none';
    labelInputTime.style.border = "";
    labelInputTime.style.backgroundColor = "";

    for (var i = 0; i < 20; i++) {
      setTimeout(function () {
        const confettiElement = document.createElement('div');
        confettiElement.classList.add('confetti');
        document.body.appendChild(confettiElement);

        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight + -500;
        confettiElement.style.left = randomX + 'px';
        confettiElement.style.top = randomY + 'px';

        setTimeout(function () {
          confettiElement.remove();
        }, 3000);
      }, i * 100);
    }
  }
}

//function calculateMonthlyPresence() {
  // Prendiamo i valori dai campi di input
//  let daysWorked = parseInt(document.getElementById('daysWorked').value);
//  let daysOff = parseInt(document.getElementById('daysOff').value);

  // Controlliamo che i valori siano numeri validi
//  if (isNaN(daysWorked) || isNaN(daysOff)) {
//      document.getElementById('presenceResult').innerHTML = "Inserisci valori validi.";
//      return;
//  }
//  if (daysOff > daysWorked) {
//    document.getElementById('presenceResult').innerHTML = "Inserisci valori validi.";
//    return;
// }
// if ( (daysOff < 0 || daysWorked < 1) || (daysOff > 30 || daysWorked > 30 ) ) {
//  document.getElementById('presenceResult').innerHTML = "Inserisci valori validi.";
//  return;
// }
  // Calcoliamo la differenza e il 20% di questa differenza
//  let difference = daysWorked - daysOff;
//  let result = difference * 0.2;
//  let giornisede = Math.ceil(difference * 0.2);

  // Mostriamo il risultato
//  document.getElementById('presenceResult').innerHTML = 
//      "Il 20% della differenza tra giorni lavorati e ferie è: " + result.toFixed(2) + "<br>Quindi devi andare in sede " + giornisede + " giorni";
//}

function calculateWorkedWeeks() {
  const selectedMonth = parseInt(document.getElementById("selectedMonth").value);
  const vacationInput = document.getElementById("vacationWeeks");
  const year = new Date().getFullYear();

  let vacationWeeks = parseInt(vacationInput.value);

  // Validazione input ferie
  if (isNaN(vacationWeeks) || vacationWeeks < 0 || vacationWeeks > 5) {
    vacationInput.style.border = "2px solid red";
    vacationInput.style.backgroundColor = "#ffe6e6";
    document.getElementById("weeksResult").innerHTML = "❗ Inserisci un numero valido di settimane di ferie.";
    return;
  } else {
    vacationInput.style.border = "";
    vacationInput.style.backgroundColor = "";
  }

  const startDate = new Date(year, selectedMonth, 1);
  const endDate = new Date(year, selectedMonth + 1, 0); // ultimo giorno del mese

  let weekSet = new Set();

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const day = d.getDay();
    if (day >= 1 && day <= 5) { // lun-ven
      const weekNumber = getWeekNumber(new Date(d));
      weekSet.add(weekNumber);
    }
  }

  const totalWeeks = weekSet.size;
  let weeksWorked = Math.max(totalWeeks - vacationWeeks, 0);

  // Gestione caso ferie = 0
  if (vacationWeeks === 0) {
    weeksWorked = 4; // valore personalizzabile
  }

  // Risultato visivo
  document.getElementById("weeksResult").innerHTML = "Settimane lavorative nel mese: " + totalWeeks + "<br>" +
    "Giorni di Presenza: " + weeksWorked ;
}

// Calcolo numero settimana (ISO-8601)
function getWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return weekNo;
}







