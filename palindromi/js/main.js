// inserire una parola
// dividere la parola in lettere e mettere le lettere in una array
// invertire le lettere nell array
// riunire le lettere 
// confrontare parola iniziale e parola finale
// se uguali allora è palindroma

palindroma('pippo');


function palindroma(word) {
    let wordSplit = word.split('');
    console.log(wordSplit);
    let wordReverse = wordSplit.reverse();
    console.log(wordReverse);
    let wordJoin = wordReverse.join('');
    console.log(wordJoin);
    if (wordJoin == word) {
        console.log('è palindroma!')
    }
    else {
        console.log('non è palindroma, prova un altra parola')
    }
}