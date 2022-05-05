let array = [];

do {
    num = Number(prompt("inserisci numero"));
    array.push(num);
}
while(func(array))

alert("raggiunta somma richiesta");

function func(array) {

    let somma = 0;

    for(let i=0; i < array.length; i++) {
        somma = somma + array[i];
    }

    if(somma < 50) {

        return true;

    } else {

        return false;
    }
}