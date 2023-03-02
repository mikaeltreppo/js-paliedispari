// inserire una parola
// dividere la parola in lettere e mettere le lettere in una array
// invertire le lettere nell array
// riunire le lettere 
// confrontare parola iniziale e parola finale
// se uguali allora è palindroma
let wordDom = document.getElementById("word");
let checkDom = document.getElementById("check");
checkDom.addEventListener('click', function (){
    let test = wordDom.value; 
    palindroma(test);
    wordDom.value = '';
});
function palindroma(word) {
    
    let wordSplit = word.split('');
    console.log(wordSplit);
    let wordReverse = wordSplit.reverse();
    console.log(wordReverse);
    let wordJoin = wordReverse.join('');
    console.log(wordJoin);


    if (wordJoin == word) {
        alert('è palindroma!')
    }
    else {
        alert('non è palindroma, prova un altra parola')
    }
}