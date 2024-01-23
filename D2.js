/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 40;
let numero2 = 30;


if (numero1 > numero2) {
    console.log("Il numero più grande è: " + numero1);
} 
else if (numero2 > numero1) {
    console.log("Il numero più grande è: " + numero2);
} 
else {
    console.log("I due numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroFornito = 9;

if (numeroFornito !== 5) {
    console.log("not equal");
} 
else {
    console.log("Il numero è uguale a 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroDato = 14


if (numeroDato % 5 === 0) {
    console.log("Divisibile per 5");
} 
else {   
    console.log("Non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero3 = 5;
let numero4 = 3;


if (numero3 === 8 || numero4 === 8 || numero3 + numero4 === 8 || numero3 - numero4 === 8 || numero3 - numero4 === 8) {
    console.log("Condizione soddisfatta: Uno dei numeri è 8 o la loro addizione/sottrazione è uguale a 8");
} 
else {
    console.log("La condizione non è soddisfatta");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let totalShoppingCarrello = 45; 


const costoSpedizioneFix = 10;


let ammontareTotal;

if (totalShoppingCarrello > 50) {
    
    ammontareTotal = totalShoppingCarrello;
    console.log("Spedizione gratuita!");
} 
else {
    
    ammontareTotal = totalShoppingCarrello + costoSpedizioneFix;
    console.log("Spedizione con costo fisso di " + costoSpedizioneFix + " euro.");
}

console.log("Ammontare totale da addebitare: " + ammontareTotal + " euro");


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */





/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{     

  let numero1 = 25;
  let numero2 = 50;
  let numero3 = 40;
  
  if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
      console.log(numero1, numero2, numero3);
    } else {
      console.log(numero1, numero3, numero2);
    }
  } else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
      console.log(numero2, numero1, numero3);
    } else {
      console.log(numero2, numero3, numero1);
    }
  } else {
    if (numero1 >= numero2) {
      console.log(numero3, numero1, numero2);
    } else {
      console.log(numero3, numero2, numero1);
    }
  }
  
}

  /* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valoreDaVerificare = 42;


if (typeof valoreDaVerificare === 'number') {
    console.log("Il valore è un numero.");
} 
else {
    console.log("Il valore non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroDaVerificare = 7;


if (numeroDaVerificare % 2 === 0) {
    console.log("Il numero è pari.");
} 
else {
    console.log("Il numero è dispari.");
}

// ESERCIZIO 10
  //Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
  
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';

console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{

  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  };
  
  
  delete me.lastName;
  
  
  console.log(me);
}

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{ 
  
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  };
  
  me.skills.pop();
  
  console.log(me);
}

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let array = []

array.push(1,2,3,4,5,6,7,8,9,10)

console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let cont = [];

cont.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


cont[cont.length - 1] = 100;

console.log(cont);
