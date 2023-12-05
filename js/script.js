const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const hitung = document.getElementById("hitung");
const output = document.getElementById("output");

hitung.addEventListener("click", function () {
  let a = alas.value;
  let t = tinggi.value;
  let l = 0.5 * a * t;

  if (!a) {
    a = 0
  }

  if (!t) {
    t = 0
  }

  output.innerHTML = `
L = 1/2 x a x t <br>
L = 1/2 x ${a} x ${t} <br>
L = ${l}
`;
});

reset.addEventListener("click", function () {
  output.innerHTML = "";
});