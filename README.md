# 🕒 Calcolatore Orario Uscita & Gestione Presenze

> Un'applicazione web simpatica, utile e indispensabile per calcolare esattamente l'orario in cui scatta la tua meritata libertà nei giorni di lavoro! 🚀🚀

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
  - Se è troppo presto, ti ricorda quanto manca all'orario fatidico.
  - Se l'orario è già passato, celebra la tua libertà con un'esplosione festosa! 🎈🎉

### 2. 📋 Regole Aziendali & Gestione Permessi
- **Ingresso oltre le 09:30**: il sistema calcola in automatico i blocchi di **30 minuti di permesso** necessari (es. timbratura alle 10:00 ➔ 30 min; alle 10:30 ➔ 1 ora di permesso).
- **Limite uscita alle 18:00**: per le normative aziendali l'uscita massima consentita è alle 18:00. Se la giornata lavorativa supera tale limite, l'orario di fine viene fissato alle 18:00 e viene calcolato il permesso da scalare per coprire la differenza.

### 3. 📅 Calcolo Presenza Mensile
- Selezione del mese e conteggio automatico delle settimane lavorative reali (dal lunedì al venerdì, standard ISO-8601).
- Detrazione delle settimane complete di ferie (con validazione anti-errore).
- Risultato chiaro dei giorni/settimane di presenza da garantire in sede.

---

## 🎭 Easter Eggs & Divertimento

- 🎆 **Confetti & Bolle Pazze**: al raggiungimento dell'orario di uscita si scatena una pioggia randomica di bolle al neon, emoji trionfali (`🎉`, `🥳`, `🚀`, `🍕`, `🦄`) e animazioni dinamiche.
- 🏃 **Tasto SaveTheChildren sfuggente**: un pulsante di beneficenza ninja che scappa a velocità supersonica per lo schermo non appena provi ad avvicinare il mouse!
- 👑 **Tasto "Dona a Dario"**: il vero tasto del supporto aziendale. Più ci clicchi, più diventa gigantesco, cambia colori fluo, vibra e fa piovere monete e banconote (`💸`, `💰`, `💎`), scalando i livelli fino alla devoluzione completa dello stipendio!

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
    ├── third-image.png
    ├── cineseincu.jpg
    └── dario.jpg     # La tua foto (con fallback automatico se assente)
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
- **CSS3 Moderno** (Flexbox, CSS Variables, Keyframe Animations)
- **Vanilla JavaScript** (Zero librerie esterne, super leggero e reattivo)

---

*Realizzato con ❤️ (e tanta voglia di staccare da lavoro)*
