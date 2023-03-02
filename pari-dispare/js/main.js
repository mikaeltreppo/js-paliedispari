 // utente scrive se pari o dispari
 // inserisce un numero da 1  a 5
 // pc sceglie numero da 1 a 5
 // somma numeri
 // stabiliamo se somma è pari o dispari
 // dichiariamo il vincitore


 
let numberDom = document.getElementById('number');
let chooseDom = document.getElementById('choose');
let checkDom = document.getElementById('check');

checkDom.addEventListener('click',
function(){
let oddEven = chooseDom.value;
let numUser = parseInt(numberDom.value);
let numPc = parseInt( Math.floor((Math.random() * 5 ) + 1));
oddEvenGame(numUser, numPc, oddEven);
}
)








function oddEvenGame (a,b,c){
 let sum = a + b;
 if (sum % 2 == 0 && c == "pari"){
    alert ("hai vinto è pari! il risultato è " + sum);
 }
 else if (sum % 2 == 1 && c == "dispari"){
    alert ("hai vinto è dispari! il risultato è " + sum)
 }
else {
    alert("hai perso! il risultato è " + sum)  
}

}