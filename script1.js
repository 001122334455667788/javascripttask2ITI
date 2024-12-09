document.write("<h1>entering user info</h1>")
document.write("<hr>")
alert("Welcome to my site");
let username;
do {
    username = prompt("Please enter your name:");
} while (!username || username.trim() === "" || !isNaN(username));

let Tnumber;
let Ttestcase;
do {
    Tnumber = prompt("Please enter your Telephone number");
    Ttestcase = /^\d{8}$/;
} while (!Tnumber.match(Ttestcase));

let Mnumber;
let Mtestcase;
do {
    Mnumber = prompt("Please enter your Mobile number");
    Mtestcase=/^(012|011|010)\d{8}$/;
} while (!Mnumber.match(Mtestcase));

let Email;
let Etestcase;
do {
    Email = prompt("Please enter your Email Address");
    Etestcase= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
} while (!Email.match(Etestcase));

let colornumber;
const colortestcase = /^(1|2|3)$/;
do {
    colornumber = prompt("Please enter your color choice: 1 for Red, 2 for Green, 3 for Blue");
} while (!colornumber.match(colortestcase));

// Prepare the message
let color;
switch (colornumber) {
    case "1":
        color = "red";
        break;
    case "2":
        color = "green";
        break;
    case "3":
        color = "blue";
        break;
    default:
        color = "black";  // Default color if something goes wrong
}

document.write(`<p><strong style="color:${color}">Welcome dear guest</strong> ${username}</p>`);
document.write(`<p><strong style="color:${color}">Your telephone number is:</strong> ${Tnumber}</p>`);
document.write(`<p><strong style="color:${color}">Your mobile number is:</strong> ${Mnumber}</p>`);
document.write(`<p><strong style="color:${color}">Your email address is:</strong> ${Email}</p>`);