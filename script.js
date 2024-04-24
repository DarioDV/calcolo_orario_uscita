function showRandomPopup() {
  // Genera un numero casuale tra 0 e 1
  var random = Math.random();
  // Mostra il pop-up solo se il numero casuale è inferiore a 0.5 (50% di probabilità)
  if (random < 0.5) {
    var response = confirm("Sei sicuro di voler uscire?? DAI RESTA ANCORA!!!");
    if (!response) {
      alert("Bravo! RESTA ANCORA QUI CON NOI");
      return false;
    }
  }
}

function calculateTime() {
  // Mostra il pop-up casuale
  //showRandomPopup();

  var currentTime = new Date(); // Ottieni l'orario attuale
  
  var inputTime = document.getElementById('inputTime').value;
  var time = new Date("2024-01-01T" + inputTime + ":00");
  time.setHours(time.getHours() + 8);
  time.setMinutes(time.getMinutes() + 30);

  var hours = String(time.getHours()).padStart(2, '0');
  var minutes = String(time.getMinutes()).padStart(2, '0');
  var resultTime = hours + ":" + minutes;

  
  // Nascondi l'immagine pre-bottone e mostra l'immagine post-bottone
  document.getElementById('preButtonImage').style.display = 'none';
  
  if (resultTime > currentTime.toLocaleTimeString()) {
    document.getElementById('result').innerText = "Troppo presto! Devi aspettare le " + resultTime;
	document.getElementById('postButtonImage').style.display = 'none';
	document.getElementById('thirdImage').style.display = 'inline';
	
    } else {
		document.getElementById('result').innerText = "Fantastico potevi marcare alle " + resultTime;
		document.getElementById('thirdImage').style.display = 'none';
		document.getElementById('postButtonImage').style.display = 'inline';
    }
}