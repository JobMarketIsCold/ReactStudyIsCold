const btn = document.getElementById("btn");
const text = document.getElementById("upText");

let n = 0;
text.innerText = n;

function upNumber() {
	n += 1;
	text.innerText = n;
}

btn.addEventListener("click", upNumber);
