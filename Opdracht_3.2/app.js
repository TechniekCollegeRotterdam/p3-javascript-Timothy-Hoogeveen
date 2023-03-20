let h1 = document.getElementById("text");
let budget = 100;
let product = prompt();

if (budget > product) {
h1.innerText = "U heeft genoeg geld!"

} else {
    h1.innerText = "U heeft te weinig geld!"
}