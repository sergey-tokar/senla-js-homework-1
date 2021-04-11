'use strict'

/*
Получить и вывести в консоль:
head
*/

const head = document.getElementsByTagName('head')[0];
console.log(head);

/*
Получить и вывести в консоль:
body
*/

const body = document.getElementsByTagName('body')[0];
console.log(body);

/*
Получить и вывести в консоль:
все дочерние элементы body
*/

const bodyChildren = body.children;
for (let child of bodyChildren) {
    console.log(child);
}


/*
Получить и вывести в консоль:
первый div и все его дочерние узлы
4.1 вывести все дочерние узлы в консоль
4.2 вывести все дочерние узлы в консоль кроме первого
*/

const firstDiv = document.getElementsByTagName('div')[0];
const firstDivChildNodes = firstDiv.childNodes;
console.log(firstDiv);
console.log(firstDivChildNodes);

for (let firstDivChildNode of firstDivChildNodes) {
    console.log(firstDivChildNode);
}

for (let i = 1; i < firstDivChildNodes.length; i++) {
    console.log(firstDivChildNodes[i]);
}

