const N = Number(prompt("quanti array vuoi creare?"));

for(let i=0; i < N; i++) {
    let array = [];
    for(let j=0; j < 10; j++) {
        array[j] = Math.round(Math.random() * 100);
    }

    alert(array);
}