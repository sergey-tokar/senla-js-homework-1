document.addEventListener('DOMContentLoaded', function () {
    console.clear();

    /*
    Задача 1
    Создать функцию которая принимает два елемента.
    Функция проверяет является ли первый элемент родителям
    для второго элемента isParent(parent, child) => true || false*/

    function isParent(parent, child) {
        return parent.contains(child);
    };


    /*
    Задача 2
    Найти элемент который находится перед списком ul
    */

    const elementBeforeUl = document.querySelector('ul').previousElementSibling;

    /*
    Задача 3
    Найти параграф и получить его текстовые содержимое
    */

    const paragraph = document.querySelector('p');
    let paragraphText = paragraph.textContent;

    /*
    Задача 4
    Создать функцию, которая принимает в качестве аргумента
    узел DOM и возвращает информацию виде объекта о типе узла,
    имени узла и количестве дочерних узлов.
    */

    function nodeInformation(node) {
        return {
            type: node.nodeType,
            name: node.nodeName,
            childrenQnt: node.children.length,
        }
    }

    /*
    Задача 5
    Найти список и добавить ему класс "list".
    */

    let ul = document.querySelector('ul');
    ul.className = 'list';

});
