function calculateTime() {
  // Mostra il pop-up casuale
  //showRandomPopup();

  var currentTime = new Date(); // Ottieni l'orario attuale

  var inputTime = document.getElementById('inputTime').value;
  var additionalTime = document.getElementById('additionalTime').value;
  var tempopausapranzo = document.getElementById('minutipausa').value;
  
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
    document.getElementById('result').innerText = "INSERISCI UN VALORE CORRETTO NEGLI ORARI!!";
    document.getElementById('postButtonImage').style.display = 'none';
    document.getElementById('thirdImage').style.display = 'none';
    document.getElementById('cineseincu').style.display = 'inline';
  } else if (resultTime > currentTime.toLocaleTimeString()) {
    document.getElementById('result').innerText = "Troppo presto! Devi aspettare le " + resultTime;
    document.getElementById('postButtonImage').style.display = 'none';
    document.getElementById('thirdImage').style.display = 'inline';
    document.getElementById('cineseincu').style.display = 'none';
  } else {
    document.getElementById('result').innerText = "Fantastico potevi marcare alle " + resultTime;
    document.getElementById('thirdImage').style.display = 'none';
    document.getElementById('postButtonImage').style.display = 'inline';
    document.getElementById('cineseincu').style.display = 'none';

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
