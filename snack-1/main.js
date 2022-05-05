let array = [];

do {
    num = Number(prompt("inserisci numero"));
    if((somma(array) + num) < 50) {
        array.push(num);
    }
    alert(array);
    
}
while(somma(array) < 50)

alert("raggiunta somma richiesta");

function somma(array) {

    let somma = 0;

    for(let i=0; i < array.length; i++) {
        somma = somma + array[i];
    }

    return somma;
}