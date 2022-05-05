let array = [];
let somma = 0;

do {
    num = Number(prompt("inserisci numero"));
    array.push(num);
    somma = somma + num;
}
while(somma < 50)
alert("raggiunta somma richiesta");