# 🕒 Calcolatore Orario Uscita & Gestione Presenze

> Un'applicazione web simpatica, utile e indispensabile per calcolare esattamente l'orario in cui scatta la tua meritata libertà nei giorni di lavoro in sede! 🚀

[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-brightgreen?logo=github)](https://dariodv.github.io/calcolo_orario_uscita/)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue)](#-tecnologie)
[![Fun Factor](https://img.shields.io/badge/Fun-100%25-orange)](#-easter-eggs)

---

## 🎯 Panoramica del Progetto

Nata per semplificare la gestione delle timbrature aziendali e delle presenze in ufficio, quest'app risolve il classico dilemma: *"A che ora posso staccare oggi?"*, rispettando tutte le policy aziendali su permessi, pause e orario massimo di uscita... il tutto condito da un tocco di ironia e divertimento!

---

## ✨ Funzionalità Principali

### 1. ⏰ Calcolo Orario di Uscita ("Calcola la tua libertà")
- **Orario di marcatura ingresso**: inserisci l'ora esatta in cui hai timbrato il cartellino.
- **Ore di lavoro previste**: personalizzabile (default: 8 ore).
- **Pausa pranzo**: selezione rapida tra 30, 45, 60, 75 o 90 minuti.
- **Feedback dinamico**:
  - Se è troppo presto, seleziona in modo randomico una tra le immagini disponibili (`third-image-0`, `third-image-1`, `third-image-2`) e ti ricorda quanto manca all'orario fatidico.
  - Se l'orario è già passato, celebra la tua libertà con un'esplosione festosa! 🎈🎉

### 2. 📋 Regole Aziendali & Gestione Permessi
- **Ingresso oltre le 09:30**: il sistema calcola in automatico i blocchi di **30 minuti di permesso** necessari (es. timbratura alle 10:00 ➔ 30 min; alle 10:30 ➔ 1 ora di permesso).
- **Limite uscita alle 18:00**: per le normative aziendali l'uscita massima consentita è alle 18:00. Se la giornata lavorativa supera tale limite, l'orario di fine viene fissato alle 18:00 e viene calcolato il permesso da scalare per coprire la differenza.

### 3. 📅 Calcolo Presenza Mensile (Policy Rientri & Ferie)
- **Conteggio Settimane Lavorative**: calcolo automatico e dinamico delle settimane lavorative reali (lunedì-venerdì) per il mese selezionato secondo lo standard ISO-8601 (mesi da 4 o 5 settimane). Pre-selezione automatica del mese in corso.
- **Regola Aziendale di Presenza**:
  - **Tetto massimo**: il numero massimo di presenze obbligatorie è **4 in un mese** (1 presenza a settimana lavorata).
  - **Mese da 5 settimane con 1 settimana di ferie**: le settimane lavorate residue sono $5 - 1 = 4$, quindi le presenze richieste **non passano a 3 ma restano 4**.
  - **Mese da 4 settimane con 1 settimana di ferie**: le settimane lavorate residue sono $4 - 1 = 3$, quindi le presenze richieste **passano a 3**.
  - **Formula aziendale**:  
    $$\text{Giorni di Presenza} = \min(4, \max(0, \text{settimane\_mese} - \text{settimane\_ferie}))$$
- **Validazione anti-errore**: controllo che le settimane di ferie inserite non eccedano il numero effettivo di settimane lavorative del mese.

---

## 🎭 Easter Eggs & Divertimento

- 🎆 **Confetti & Bolle Pazze**: al raggiungimento dell'orario di uscita si scatena una pioggia randomica di bolle al neon, emoji trionfali (`🎉`, `🥳`, `🚀`, `🍕`, `🦄`) e animazioni dinamiche.
- 🏃 **Tasto SaveTheChildren sfuggente**: un pulsante di beneficenza ninja che scappa a velocità supersonica per lo schermo non appena provi ad avvicinare il mouse o a toccarlo!
- 👑 **Tasto "Dona a Dario" (Ottimizzato Desktop & Mobile)**:
  - **Desktop**: più ci clicchi, più diventa gigantesco, cambia colori fluo a rotazione, vibra e fa piovere monete e banconote (`💸`, `💰`, `💎`), scalando i livelli fino a *"DONA LO STIPENDIO A DARIO! 🥳🎉"*; dopo 2-3 click sul livello massimo, il pulsante si resetta tornando automaticamente alla frase iniziale e alle dimensioni originali per ricominciare il ciclo!
  - **Mobile**: per evitare di essere invasivo sui piccoli schermi, si presenta in formato compatto con **esclusivamente la foto avatar circolare**, senza testi giganti che coprono i contenuti. Mantiene al tocco l'animazione di rimbalzo, il cambio sfondi e la fontana di monetine volanti!

---

## 📂 Struttura del Progetto

```text
calcolo_orario_uscita/
│
├── index.html        # Struttura della pagina e componenti interattivi
├── styles.css        # Stili, layout responsive e animazioni CSS
├── script.js         # Logica di calcolo orari, permessi, presenze ed effetti
├── README.md         # Documentazione del progetto
└── img/              # Risorse grafiche ed avatar
    ├── pre-button-image.png
    ├── post-button-image.png
    ├── third-image-0.png
    ├── third-image-1.png
    ├── third-image-2.png
    ├── cineseincu.jpg
    └── dario.jpeg     # Avatar di Dario (con fallback automatico se assente)
```

---

## 🚀 Come Utilizzarlo

### Online
Visita direttamente la versione live su GitHub Pages:  
👉 **[https://dariodv.github.io/calcolo_orario_uscita/](https://dariodv.github.io/calcolo_orario_uscita/)**

### In Locale
1. Clona il repository o scarica i file.
2. Apri `index.html` con qualsiasi browser web (Chrome, Firefox, Edge, Safari).
3. Non richiede alcun server o dipendenza: è puro HTML, CSS e JavaScript Vanilla!

---

## 🛠️ Tecnologie
- **HTML5** Semantico
- **CSS3 Moderno** (Flexbox, CSS Variables, Media Queries Responsive, Keyframe Animations)
- **Vanilla JavaScript** (Zero librerie esterne, super leggero e reattivo)

---

*Realizzato con ❤️ (e tanta voglia di uscire alle 18:00 precise)*
