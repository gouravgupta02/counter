
let countEl = document.getElementById("count-id");
let saveEl = document.getElementById("save-id");

let count=0;
function increment() {
    count += 1;
    countEl.innerText = count;
}

function decrement() {
    count -= 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + "   ";
    saveEl.textContent += countStr;       
    count = 0;
    countEl.textContent = count;
}

