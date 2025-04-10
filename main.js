// COSTANTI
const prezzoKm = 0.21;
const sconto20 = 20;
const sconto40 = 40;

const btnEl = document.getElementById("btn-calcolo");

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

    console.log(nomeUtente, cognomeUtente, anniUtente);
    // SCONTO 20
    if (anniUtente < 18) {
      const bigliettoOk = x - sconto20 * (x / 100) + "€";
      console.log(bigliettoOk);
    } else if (anniUtente > 65) {
      const bigliettoOk = x - sconto40 * (x / 100) + "€";
      console.log(bigliettoOk);
    } else {
      console.log(prezzoBigliettoNoSconto + "€");
    }
  } else {
    isButtonClicked = false;
    console.log("Cancella dato");
  }
});
