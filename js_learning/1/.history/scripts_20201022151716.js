
function myFunction1() {
    let Name = prompt("Привет, как тебя зовут?");
    let message = `Привет, ${Name}`;
    alert(message);
}
function myFunction2() {
    const NOW = 2020
    let Year = prompt("Привет, в каком году ты родился?");
    let age = Number(NOW) - Number(Year);
    let message =  `Тебе ${age}`;
    alert(message);
}
function myFunction3() {
    let a = prompt("Введите сторону квардрата");
    let p = Number(a)*4;
    let message =  `Периметр такого квадрата ${p}`;
    alert(message);
}
function myFunction4() {
    let r = prompt("Введите радиус");
    let p = Number(r)*Number(r)*3.14;
    let message =  `Периметр такой окружности ${p}`;
    alert(message);
}
function myFunction5() {
    let S = prompt("Напишите расстояния от одного до другого города в киллометрах");
    let t = prompt("Напишите за сколько вы хотите добраться");
    let V = Number(S)/Number(t);
    let message =  `Вам надо ехать со скоростью: ${V}`;
    alert(message);
}
function myFunction6() {
    const D = 0.85;
    alertz = `Курс доллара к евро: ${D}`;
    alert(alertz);
    let E = prompt("Напишите сколько долларов хотите перевести");
    let IE = Number(D)*Number(E);
    let message =  `Вы получите: ${IE}`;
    alert(message);
}
function myFunction7() {
    const M = 820;
    alertz = `1 гигабайт - это 1024 мегабайт`;
    alert(alertz);
    let G = prompt("Напишите сколько гигабайт в вашей флешке");
    let perevod = Number(G) * 1024
    let IE =  Math.floor(Number(perevod)/Number(M));
    let message =  `У вас поместиться: ${IE} файлов размером 820 мб`;
    alert(message);
}
function myFunction8() {
    let cena = prompt("Напишите сколько стоит 1 шоколадка");
    let koshelek = prompt("Напишите сколько у васденег");
    let kupit = Math.floor(Number(cena) /Number(koshelek));
    let ostanentsya = Number(koshelek) - Number(kupit)*Number(cena);
    let message =  `У вас останется: ${ostanentsya} и вы купите ${kupit}`;
    alert(message);
}