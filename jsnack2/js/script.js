// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// Chiedo per sei volte un numero all'utente

const userNumber = [];

for (let i = 0; i < 6; i++) {
    let number = prompt("Inserisci un numero");

    // Se il numero è dispari viene inserito nell'array vuoto
    if (number % 2 == 1) {
        userNumber.push(number)
    }
    
};

// Output

let result = userNumber;
console.log(result);