const array = [3,55,6,234,64,24,1,3,544];

body = document.querySelector("body");

const element1 = document.createElement("div");
element1.id = "first";
element1.style.color = "red";
body.append(element1);

const element2 = document.createElement("div");
element2.id = "second";
element2.style.color = "green";
body.append(element2);

for(let i=0; i < array.length; i++) {

    if (array[i]%2==0) {
        let element = document.getElementById("second");
        element.append(array[i]+" ");
    }
    else {
        let element = document.getElementById("first");
        element.append(array[i]+" ");
    }

}