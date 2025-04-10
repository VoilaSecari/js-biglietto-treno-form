// COSTANTI
const prezzoKm = 0.21;
const sconto20 = 20;
const sconto40 = 40;

const btnEl = document.getElementById("btn-calcolo");
const nomeCognomeBigliettoEl = document.getElementById("nome-cognome-generati");
const anniBigliettoEl = document.getElementById("anni-generati");
const percorsoBigliettoEl = document.getElementById("percorso-generato");
const carrozzaBigliettoEl = document.getElementById("carrozza");
const postoBigliettoEl = document.getElementById("posto");
const prezzoBigliettoEl = document.getElementById("prezzo");

let isButtonClicked = false;
btnEl.addEventListener("click", function () {
  if (!isButtonClicked) {
    //BOOLEANO
    isButtonClicked = true;
    // COSTANTI INPUT
    const nomeUtente = document.querySelector("#nome-utente").value;
    const cognomeUtente = document.querySelector("#cognome-utente").value;
    const anniUtente = parseInt(document.querySelector("#anni-utente").value);
    const percorsoUtente = parseInt(
      document.querySelector("#percorso-utente").value
    );
    // CALCOLI
    let prezzoBigliettoNoSconto = percorsoUtente * prezzoKm;
    let x = prezzoBigliettoNoSconto;

    nomeCognomeBigliettoEl.innerText = nomeUtente + " " + cognomeUtente;
    anniBigliettoEl.innerText = anniUtente + " anni";
    percorsoBigliettoEl.innerText = percorsoUtente + "Km";

    // SCONTO 20
    if (anniUtente < 18) {
      const bigliettoOk = x - sconto20 * (x / 100);
      prezzoBigliettoEl.innerText = parseInt(bigliettoOk).toFixed(2) + "€";
    } else if (anniUtente > 65) {
      const bigliettoOk = x - sconto40 * (x / 100);
      prezzoBigliettoEl.innerText = parseInt(bigliettoOk).toFixed(2) + "€";
    } else {
      prezzoBigliettoEl.innerText =
        parseInt(prezzoBigliettoNoSconto).toFixed(2) + "€";
    }
  } else {
    isButtonClicked = false;
  }
});
