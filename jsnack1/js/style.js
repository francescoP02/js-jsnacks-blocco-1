// Chiedo le due parole all'utente

const firstWord = prompt("Qual è la tua prima parola?");

const secondWord = prompt("Qual è la tua seconda parola?");

// Controllo le lunghezze delle parole

const firstWordLenght = firstWord.length;

const secondWordLenght = secondWord.length;

console.log(firstWord, firstWordLenght);
console.log(secondWord, secondWordLenght);

// Confronto le due parole

if (firstWordLenght > secondWordLenght) {
    result = `${secondWord} ${firstWord}`
}
else if (firstWordLenght < secondWordLenght) {
    result = `${firstWord} ${secondWord}`
}
else {
    result = `Le parole sono di grandezza uguale!`;
}

// Output

console.log(result);
