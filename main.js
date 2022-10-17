let btnFirst = document.querySelector(".btn1");
let btnsecond = document.querySelector(".btn2");
let btnthree = document.querySelector(".btn3");

btnFirst.addEventListener("click", function () {
  alert("HTML");
  console.log(prompt("3 ta semantic teglardan yozing"));
  console.log(prompt("aria-label nima uchun kerak"));
  console.log(prompt("required nima uchun kerak"));
  console.log(prompt("divnii qanday teg ichiga ochib bulmaydi"));
  console.log(prompt("u tegi nima uchun kerak"));
});
btnsecond.addEventListener("click", function () {
  alert("CSS");
  console.log(prompt("selectorlar necha xil buladi"));
  console.log(prompt("psevda elementlarga misollar yozing"));
  console.log(prompt("flex-shrink nima"));
  console.log(prompt("font decorationda nimalar kiritsak buladi"));
  console.log(prompt("root nima"));
});
btnthree.addEventListener("click", function () {
  alert("JS");
  console.log(prompt("console nima"));
  console.log(prompt("memoryning birinchi holati nima"));
  console.log(prompt("o'zgaruvchi typelar necha hil"));
  console.log(prompt("dynamic deb nimaga aytiladi"));
  console.log(prompt("falsylarga misollar keltiring"));
});
