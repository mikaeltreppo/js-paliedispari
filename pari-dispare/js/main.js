 // utente scrive se pari o dispari
 // inserisce un numero da 1  a 5
 // pc sceglie numero da 1 a 5
 // somma numeri
 // stabiliamo se somma è pari o dispari
 // dichiariamo il vincitore


let numUser =  parseInt(prompt("scegli un numero da 1 a 5"));
let numPc = Math.floor((Math.random() * 5 ) + 1);
let oddEven = prompt('scrivi pari o dispari');

oddEvenGame(numUser, numPc, oddEven)





function oddEvenGame (a,b,c){
 let sum = a + b;
 if (sum % 2 == 0 && c == "pari"){
    alert ("hai vinto è pari! il risultato è " + sum);
 }
 else if (sum % 2 !== 0 && c == "dispari"){
    alert ("hai vinto è dispari! il risultato è " + sum)
 }
else {
    alert("hai pers! il risultato è " + sum)  
}

}