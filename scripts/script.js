let messageParagraph = document.getElementById("message-El")
let makeReserv = document.getElementById("make-reserv")
let messageParagraph1 = document.getElementById("message-Ell")
let serviceEl = document.getElementById("checkout")

let message = 'Sorry, this page is not yet availabe'

function messageEl() {
    messageParagraph.textContent = message;
    alert(message);
}

let alert1 = 'Will soon come up in a moment!';

function messageEll() {
    messageParagraph1.textContent = alert1;
    alert(alert1);
}