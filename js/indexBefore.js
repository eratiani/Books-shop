///////////////////////////////height

const body = document.body;
const html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);
console.log(height)
let main = document.querySelector(".mainWrapper")
main.style.height = height+"px";