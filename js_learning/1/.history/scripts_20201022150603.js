
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
    const D = 0.85
    alert = `Курс доллара к евро: ${D}`
    let E = prompt("Напишите сколько долларов хотите перевести");
    let IE = Number(D)*Number(E);
    let message =  `Вы получите: ${IE}`;
    alert(message);
}
function myFunction7() {
    const M = 820
    alert = `1 гигабайт - это 1024 мегабайт`
    let G = prompt("Напишите сколько гигабайт в вашей флешке");
    let perevod = Number(G) * 1024
    let IE = Number(perevod)/Number(M);
    let message =  `Вы получите: ${IE}`;
    alert(message);
}