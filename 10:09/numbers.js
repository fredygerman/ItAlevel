

var number = 800

var number = prompt("Write the end interger please")
let start = 0
let end = number


function range(start, end) {


for (i=start ;i<= end;i++) {

    document.write(i+"<br>")


}

}

document.write(`The start interger is ${+start} <br>
The last interger will be ${+end}`);

document.write("<br>")
range(start,end)

console.log(end);