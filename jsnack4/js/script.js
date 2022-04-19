// jsnack4. Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiediamo il numero all'utente
let userNum = parseInt(prompt("Inserisci un numero a 4 cifre"));
console.log(userNum);

sum = 0;

while (userNum) {    

// Usiamo il resto della divisione per 10 per trovare la cifra da aggiungere ala somma
sum = sum + userNum % 10;

console.log(sum);

// Dopo aver aggiunto la cifra alla somma, per utilizzare nel ciclo un numero con un numero di cifre sepre più piccolo (partiamo da 4 cifre, poi 3, 2 e infine 1 cifra) finendo il ciclo quando non si puo' più andare oltre
userNum = Math.floor(userNum / 10);

}

// Output

result = sum;
console.log("La somma delle quattro cifre è", result);






