function calculateTime() {
  // Mostra il pop-up casuale
  //showRandomPopup();

  var currentTime = new Date(); // Ottieni l'orario attuale

  var inputTime = document.getElementById('inputTime').value;
  var additionalTime = document.getElementById('additionalTime').value;
  var tempopausapranzo = document.getElementById('minutipausa').value;
  var labelInputTime = document.getElementById('inputTime');
  var labelAdditionalTime = document.getElementById('additionalTime');
  var time = new Date("2024-01-01T" + inputTime + ":00");

  var additionalHours = parseInt(additionalTime.substring(0, 2));
  var additionalMinutes = parseInt(additionalTime.substring(3));

  time.setHours(time.getHours() + additionalHours);
  time.setMinutes(time.getMinutes() + additionalMinutes + parseInt(tempopausapranzo));

  var hours = String(time.getHours()).padStart(2, '0');
  var minutes = String(time.getMinutes()).padStart(2, '0');
  var resultTime = hours + ":" + minutes;

  // Limite uscita alle 18:00 — oltre si prende permesso
  var resultTotalMinutes = parseInt(hours) * 60 + parseInt(minutes);
  var limiteUscita = 18 * 60; // 18:00
  var permessoUscitaMsg = "";

  if (resultTotalMinutes > limiteUscita) {
    var eccedenzaMinuti = resultTotalMinutes - limiteUscita;
    var eccOre = Math.floor(eccedenzaMinuti / 60);
    var eccMin = eccedenzaMinuti % 60;
    resultTime = "18:00";
    hours = "18";
    minutes = "00";
    if (eccOre > 0 && eccMin > 0) {
      permessoUscitaMsg = "\n🕕 Uscita fissata alle 18:00, devi prendere " + eccOre + " ora/e e " + eccMin + " minuti di permesso.";
    } else if (eccOre > 0) {
      permessoUscitaMsg = "\n🕕 Uscita fissata alle 18:00, devi prendere " + eccOre + " ora/e di permesso.";
    } else {
      permessoUscitaMsg = "\n🕕 Uscita fissata alle 18:00, devi prendere " + eccMin + " minuti di permesso.";
    }
  }

  var resultDisplay = document.getElementById('result');

  document.getElementById('preButtonImage').style.display = 'none';

  // Calcolo permesso se si marca dopo le 9:30
  var permessoMsg = "";
  var inputHours = parseInt(inputTime.substring(0, 2));
  var inputMinutes = parseInt(inputTime.substring(3));
  var totalInputMinutes = inputHours * 60 + inputMinutes;
  var sogliaMinuti = 9 * 60 + 30; // 9:30

  if (totalInputMinutes > sogliaMinuti) {
    var ritardoMinuti = totalInputMinutes - sogliaMinuti;
    var permessoMinuti = Math.ceil(ritardoMinuti / 30) * 30;
    var permessoOre = Math.floor(permessoMinuti / 60);
    var permessoMin = permessoMinuti % 60;
    if (permessoOre > 0 && permessoMin > 0) {
      permessoMsg = "\n⚠️ Hai marcato dopo le 9:30! Devi prendere " + permessoOre + " ora/e e " + permessoMin + " minuti di permesso.";
    } else if (permessoOre > 0) {
      permessoMsg = "\n⚠️ Hai marcato dopo le 9:30! Devi prendere " + permessoOre + " ora/e di permesso.";
    } else {
      permessoMsg = "\n⚠️ Hai marcato dopo le 9:30! Devi prendere " + permessoMin + " minuti di permesso.";
    }
  }

  // Confronto numerico affidabile (indipendente dal locale)
  var resultDate = new Date();
  resultDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

  if (!inputTime || !additionalTime) { 
    document.getElementById('result').innerText = " Inserisci un valore corretto negli orari ❗❗❗";
    //rosso nelle label 
    labelInputTime.style.border = "2px solid red";
    labelInputTime.style.backgroundColor = "#ffe6e6";
    labelAdditionalTime.style.border = "2px solid red";
    labelAdditionalTime.style.backgroundColor = "#ffe6e6";
    //visualizzazioni immagini
    document.getElementById('postButtonImage').style.display = 'none';
    document.getElementById('thirdImage').style.display = 'none';
    //document.getElementById('cineseincu').style.display = 'inline';
    const image = document.getElementById("cineseincu");
    image.style.display = "block";
    image.style.margin = "20px auto";
  } else if (resultDate > currentTime) {
    document.getElementById('result').innerText = "Troppo presto! Devi aspettare le " + resultTime + permessoMsg + permessoUscitaMsg;
    document.getElementById('postButtonImage').style.display = 'none';
    document.getElementById('thirdImage').style.display = 'inline';
    document.getElementById('cineseincu').style.display = 'none';
    labelInputTime.style.border = "";
    labelInputTime.style.backgroundColor = "";
    labelAdditionalTime.style.border = "";
    labelAdditionalTime.style.backgroundColor = "";
  } else {
    document.getElementById('result').innerText = "Fantastico potevi marcare alle " + resultTime + permessoMsg + permessoUscitaMsg;
    document.getElementById('thirdImage').style.display = 'none';
    document.getElementById('postButtonImage').style.display = 'inline';
    document.getElementById('cineseincu').style.display = 'none';
    labelInputTime.style.border = "";
    labelInputTime.style.backgroundColor = "";
    labelAdditionalTime.style.border = "";
    labelAdditionalTime.style.backgroundColor = "";

    // Rimuovi confetti precedenti
    document.querySelectorAll('.confetti').forEach(function(el) { el.remove(); });

    // Quantità random tra 40 e 80 — PAZZIA
    var confettiCount = Math.floor(Math.random() * 41) + 40;
    var colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
                  '#DDA0DD', '#FF8C00', '#00CED1', '#FF69B4', '#7B68EE',
                  '#FFD700', '#32CD32', '#FF4500', '#1E90FF', '#FF1493',
                  '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];

    for (var i = 0; i < confettiCount; i++) {
      (function(index) {
        var delay = Math.random() * 1500; // spawn più rapido
        setTimeout(function () {
          var el = document.createElement('div');
          el.classList.add('confetti');

          // Tipo casuale: 45% bolle colorate, 25% immagini, 20% emoji, 10% quadratoni giganti
          var tipo = Math.random();
          var size;
          if (tipo < 0.45) {
            size = Math.floor(Math.random() * 50) + 10;
            el.style.width = size + 'px';
            el.style.height = size + 'px';
            el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            // Alcuni con bordo luminoso
            if (Math.random() > 0.5) {
              el.style.boxShadow = '0 0 ' + (Math.floor(Math.random() * 15) + 5) + 'px ' + colors[Math.floor(Math.random() * colors.length)];
            }
          } else if (tipo < 0.70) {
            size = Math.floor(Math.random() * 80) + 30;
            el.classList.add('is-image');
            el.style.width = size + 'px';
            el.style.height = size + 'px';
          } else if (tipo < 0.90) {
            var emojis = ['🎉', '🎊', '🥳', '🎈', '🍾', '🏃', '🔥', '💃', '🕺', '✨',
                          '🚀', '💰', '🍕', '🎸', '🦄', '👑', '🌈', '💎', '🎯', '🏆'];
            size = Math.floor(Math.random() * 40) + 20;
            el.style.width = size + 'px';
            el.style.height = size + 'px';
            el.style.fontSize = size + 'px';
            el.style.lineHeight = size + 'px';
            el.style.textAlign = 'center';
            el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
          } else {
            // Quadratoni giganti semi-trasparenti
            size = Math.floor(Math.random() * 100) + 60;
            el.style.width = size + 'px';
            el.style.height = size + 'px';
            el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            el.style.opacity = '0.4';
          }

          // Posizione X casuale
          el.style.left = (Math.random() * window.innerWidth) + 'px';

          // Velocità e rotazione random
          var fallDuration = (Math.random() * 2.5 + 1.5).toFixed(1); // 1.5-4 secondi (più veloce!)
          var rotation = Math.floor(Math.random() * 1440 - 720); // rotazione più folle
          var endScale = (Math.random() * 1.2 + 0.2).toFixed(1);
          var borderRadius = Math.random() > 0.4 ? '50%' : Math.floor(Math.random() * 20) + 'px';

          el.style.setProperty('--fall-duration', fallDuration + 's');
          el.style.setProperty('--rotation', rotation + 'deg');
          el.style.setProperty('--end-scale', endScale);
          el.style.setProperty('--border-radius', borderRadius);

          document.body.appendChild(el);

          setTimeout(function () {
            el.remove();
          }, (parseFloat(fallDuration) + 1) * 1000);
        }, delay);
      })(i);
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


// --- FUNZIONALITÀ TASTI DONAZIONI ---

// Tasto SaveTheChildren che scappa dal mouse
function scappaBottone(btn) {
  var padding = 20;
  var btnWidth = btn.offsetWidth || 180;
  var btnHeight = btn.offsetHeight || 45;
  var maxX = Math.max(window.innerWidth - btnWidth - padding, 20);
  var maxY = Math.max(window.innerHeight - btnHeight - padding, 20);

  var newX = Math.floor(Math.random() * (maxX - padding)) + padding;
  var newY = Math.floor(Math.random() * (maxY - padding)) + padding;

  btn.style.left = newX + 'px';
  btn.style.top = newY + 'px';
  btn.style.right = 'auto';
  btn.style.bottom = 'auto';

  // Messaggi random mentre scappa
  var messaggi = [
    'Non mi prendi! 😜',
    'Dona a Dario , Fai prima ! 😜',
    'E offrilo sto caffè! ☕',
    'Dai che ce la fai! 💪 , altrimenti paga un caffè a Dario ☕',
    'Troppo lento! 🏃‍♂️',
    'Prova ancora! 😂',
    'Quasi! 🤣',
    'Dai dai dai! 💨',
    'Nope! 🙃',
    'Mancato! 😎',
    'Sono un ninja! 🥷',
    'Errore 404: Tasto sparito 💀'
  ];
  btn.innerText = messaggi[Math.floor(Math.random() * messaggi.length)];
}

// Tasto Dona a Dario che cresce
var darioClickCount = 0;
function cresciDario(event) {
  darioClickCount++;
  var btn = document.getElementById('dario-button');
  var photo = document.getElementById('dario-photo');
  var textSpan = document.getElementById('dario-text');

  // Dimensioni che crescono gradualmente
  var newFontSize = Math.min(14 + darioClickCount * 2.5, 34);
  var newPaddingY = Math.min(10 + darioClickCount * 2, 25);
  var newPaddingX = Math.min(18 + darioClickCount * 3.5, 50);
  var newPhotoSize = Math.min(38 + darioClickCount * 9, 130);

  btn.style.fontSize = newFontSize + 'px';
  btn.style.padding = newPaddingY + 'px ' + newPaddingX + 'px';
  photo.style.width = newPhotoSize + 'px';
  photo.style.height = newPhotoSize + 'px';

  // Testo divertente che cambia
  var messaggi = [
    'Dona a Dario 💰',
    'DI PIÙ! 💸',
    'ANCORA! 🤑',
    'DARIO MERITA! 👑',
    'TUTTO A DARIO! 💎',
    'IL VERO BENEFATTORE! 🏆',
    'DARIO DIVENTERÀ RICCO! 🚀',
    'SHUT UP AND TAKE MY MONEY! 💵',
    'SEI IL MIGLIORE! 🥇',
    'STIPENDIO DEVOLUTO A DARIO! 🥳🎉'
  ];
  var msgIndex = Math.min(darioClickCount - 1, messaggi.length - 1);
  textSpan.innerText = messaggi[msgIndex];

  // Palette di sfondi accattivanti a rotazione
  var gradienti = [
    'linear-gradient(135deg, #FFD700, #FF8C00)',
    'linear-gradient(135deg, #00F260, #0575E6)',
    'linear-gradient(135deg, #FF416C, #FF4B2B)',
    'linear-gradient(135deg, #F7971E, #FFD200)',
    'linear-gradient(135deg, #8A2387, #E94057, #F27121)',
    'linear-gradient(135deg, #00c6ff, #0072ff)',
    'linear-gradient(135deg, #f857a6, #ff5858)'
  ];
  btn.style.background = gradienti[darioClickCount % gradienti.length];

  // Animazione shake/bounce
  btn.style.animation = 'none';
  void btn.offsetWidth; // forza reflow
  btn.style.animation = 'shake-dario 0.35s ease';

  // Effetto monetine / gemme volanti dal click
  creaSparkle(event);
}

function creaSparkle(event) {
  var x = event && event.clientX ? event.clientX : 50;
  var y = event && event.clientY ? event.clientY : window.innerHeight - 50;
  var simboli = ['💸', '💰', '👑', '🪙', '⭐', '🤑', '💎', '✨'];

  for (var i = 0; i < 4; i++) {
    (function(idx) {
      setTimeout(function() {
        var sp = document.createElement('div');
        sp.className = 'money-sparkle';
        sp.innerText = simboli[Math.floor(Math.random() * simboli.length)];
        var offsetX = (Math.random() * 80 - 40);
        var offsetY = (Math.random() * 40 - 20);
        sp.style.left = (x + offsetX) + 'px';
        sp.style.top = (y + offsetY) + 'px';
        document.body.appendChild(sp);

        setTimeout(function() {
          sp.remove();
        }, 1200);
      }, idx * 60);
    })(i);
  }
}
