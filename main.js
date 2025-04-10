// console.log(nomeUtente);

const btnEl = document.getElementById("btn-calcolo");

// let isButtonClicked = false;
// btnEl.addEventListener("click", function () {
//   if (!isButtonClicked) {
//     isButtonClicked = true;
//     console.log("Funziona");
//   } else {
//     isButtonClicked = false;
//     console.log("Funziona 2");
//   }
// });

let isButtonClicked = false;
btnEl.addEventListener("click", function () {
  if (!isButtonClicked) {
    isButtonClicked = true;
    const nomeUtente = document.querySelector("#nome-utente").value;
    const cognomeUtente = document.querySelector("#cognome-utente").value;
    const anniUtente = parseInt(document.querySelector("#anni-utente").value);
    console.log(
      "Nome utente: " +
        nomeUtente +
        "\nCognome utente: " +
        cognomeUtente +
        "\nEtà utente: " +
        anniUtente
    );
  } else {
    isButtonClicked = false;
    console.log("Cancella dato");
  }
});
