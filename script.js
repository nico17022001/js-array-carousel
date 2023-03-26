/* ho crato un noto tra il contenitore dell'immagine */
const imgBox = document.querySelector('#imgBox');

/* ho crato la lista di immagini da inserire dinamicamente*/
const imgCompilation = [
  "01.webp",
  "02.webp",
  "03.webp",
  "04.webp",
  "05.webp"
]

/* ho crato un contatore che incrementa fino alla fine della lista */
for (contatore = 0; contatore < imgCompilation.length; contatore++){

  /*Stampo le immagini nel box*/
  imgBox.innerHTML += `<img class="slide hide" src="img/${imgCompilation[contatore]}" alt=""></img>`  
}

/*Creato un nodo con le img*/
const tutteLeImmagini = document.querySelectorAll("img")

/*Crato variablie di valore 0*/
let contatoreImmagini = 0;

/*Creato un nodo per i bottoni*/
const next = document.querySelector(".next");
const back = document.querySelector(".back");

/*Ho specificato che la prima immagine della lista sia visibile*/
tutteLeImmagini[0].classList.remove("hide");

/*Ho specificato che il bottone per tornare indietro sia di base nascosto*/
back.classList.add("hide");

/*Ho creato la funzione che al click di next faccia apparire l'immagine successiva e faccia sparire quella precedente */
next.addEventListener("click",function(){
  tutteLeImmagini[contatoreImmagini].classList.add("hide");
  contatoreImmagini++;
  tutteLeImmagini[contatoreImmagini].classList.remove("hide")
  back.classList.remove("hide");

  /*se il contatore arriva all'ultima immagine allora il next sparisce  */
  if (contatoreImmagini == tutteLeImmagini.length -1){
    next.classList.add("hide");
  }
})

/*Ho creato la funzione che al click di back faccia apparire l'immagine successiva e faccia sparire quella precedente */
back.addEventListener("click",function(){
  tutteLeImmagini[contatoreImmagini].classList.add("hide");
  contatoreImmagini--;
  tutteLeImmagini[contatoreImmagini].classList.remove("hide");
  
  /*se il contatore torna indietro e non siamo all'ultimo elemnto allora riappare */
  next.classList.remove("hide")

  /*se il contatore arriva nuovamente a 0 qui sparisce nuovamente il back button */
  if (contatoreImmagini == 0){
    back.classList.add("hide")
  }
})













