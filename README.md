# App Sintetizzatore Vocale

## 📝 Descrizione

**App Sintetizzatore Vocale** è un'applicazione web didattica che utilizza l'API Web Speech Synthesis del browser per convertire testo in sintesi vocale. Il progetto è stato sviluppato **a scopo didattico** per dimostrare l'utilizzo delle tecnologie web moderne, in particolare l'API Speech Synthesis di JavaScript.

## 🎯 Caratteristiche

- **Sintesi vocale**: Converte il testo inserito in sintesi vocale utilizzando l'API nativa del browser
- **Controllo della velocità**: Slider per regolare il pitch (velocità) della voce da 0.1x a 2x
- **Interfaccia semplice**: Design pulito e intuitivo con Bootstrap
- **Progressive Web App (PWA)**: Installabile come app tramite il file manifest

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Struttura dell'applicazione
- **CSS3**: Styling con gradienti e design moderno
- **JavaScript (Vanilla)**: Logica dell'applicazione e integrazione con Web Speech API
- **Bootstrap 5**: Framework CSS per il layout responsive
- **Font Awesome**: Icone per l'interfaccia utente

## 📋 Funzionalità Principali

1. **Input Testo**: L'utente può inserire del testo in un'area di testo (textarea)
2. **Riproduzione Vocale**: Cliccando sul pulsante play, il testo viene sintetizzato e riprodotto
3. **Regolazione Velocità**: Lo slider permette di modificare il pitch della voce in tempo reale

## 🚀 Come Utilizzare

1. Apri il file `index.html` in un browser moderno che supporta l'API Web Speech Synthesis
2. Inserisci il testo che desideri far pronunciare nell'area di testo
3. Regola la velocità della voce utilizzando lo slider
4. Clicca sul pulsante play per avviare la sintesi vocale

## ⚙️ Requisiti

- Browser moderno con supporto per l'API Web Speech Synthesis (Chrome, Edge, Safari, Firefox)
- Nessuna installazione di dipendenze necessaria (tutte le librerie sono caricate via CDN)

## 🎓 Scopo Didattico

Questo progetto è stato creato **esclusivamente a scopo didattico** per:

- Apprendere l'utilizzo dell'API Web Speech Synthesis
- Comprendere l'integrazione tra HTML, CSS e JavaScript vanilla
- Esplorare le funzionalità delle Progressive Web Apps (PWA)
- Praticare lo sviluppo front-end senza framework complessi

## 📚 API Utilizzate

- **SpeechSynthesisUtterance**: Crea un oggetto che rappresenta una richiesta di sintesi vocale
- **speechSynthesis.speak()**: Metodo per avviare la sintesi vocale

## 🔧 Personalizzazione

Il progetto può essere facilmente esteso con:

- Selezione della voce (lingua e tipo di voce)
- Controllo del volume
- Controllo del pitch (tono)
- Salvataggio delle impostazioni preferite
- Storia dei testi pronunciati

## ⚠️ Note

- La sintesi vocale dipende dalle voci installate sul sistema operativo
- Le voci disponibili possono variare in base al browser e al sistema operativo utilizzato
- Alcuni browser potrebbero richiedere un'interazione utente prima di permettere la sintesi vocale

## 📄 Licenza

Questo progetto è stato creato a scopo didattico ed è liberamente utilizzabile per scopi educativi.

---

