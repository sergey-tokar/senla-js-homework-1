'use strict'

/*
Задача 1
Создать функцию multiply, которая будет принимать
любое количество чисел и возвращать их произведение:
multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.
*/

const multipliedNumbers = multiply(1, 2, 3);

function multiply(...numbers) {
    let multiplyResult = 0;
    if (numbers.length) {
        multiplyResult = numbers.reduce((result, element) => result * element);
        if (isNaN(multiplyResult)) {
            let error = new Error('You try to multiply not a number! Please use numbers only!');
            console.log(error.name, ' ', error.message);
            return;
        }
    }
    return multiplyResult;
};

/*
Задача 2
С помощью рекурсии вычислить факториал числа 10.
*/
const factorialOfNumber = factorial(10);

function factorial(number) {
    if (isNumber(number)) {
        if (number === 0) {
            return 1;
        } else if (number < 0) {
            let error = new Error('Cant calculate factorial for negative number!');
            console.log(error.name, ' ', error.message);
            return;
        }
        return calculateFactorial(number);
    }
};

function calculateFactorial(number) {
    if (number === 1) {
        return 1;
    }
    return number * calculateFactorial(number - 1);
};

function isNumber(numberForCheck) {
    if (typeof (numberForCheck) === 'number') {
        return true;
    }
    let error = new Error('No number for property! Need to enter number only!');
    console.log(error.name, ' ', error.message);
    return false;
};

/*
Задача 3
Создать функцию, которая принимает строку и возвращает перевернутую строку
('test') = 'tset'.
*/
const testString1 = 'test';
const reversedString = reverseString(testString1);

function reverseString(string) {
    if (isStringAndNotEmpty(string)) {
        return string.split('').reverse().join('');
    }
};

function isStringAndNotEmpty(stringForCheck) {
    if (typeof stringForCheck === 'string' && stringForCheck.length > 0) {
        return true;
    }
    let error = new Error('No string or string is empty!');
    console.log(error.name, ' ', error.message);
    return false;
};

/*
Задача 4
Написать функцию, которая проверяет является ли слово палиндромом
*/

const testString2 = 'madam';
const isStringPalindrome1 = isPalindrome(testString1);
const isStringPalindrome2 = isPalindrome(testString2);

function isPalindrome(string) {
    if (isStringAndNotEmpty(string)) {
        return (string === reverseString(string));
    }
};

/*
Задача 5
Создать функцию, которая в качестве аргумента принимает строку из букв
и возвращает строку, где каждый символ разделен пробелом и заменён на
значение символа из юникода. ((hello) => "104 101 108 108 111")
*/
const convertedString1 = convertToUnicode('hello');

function convertToUnicode(string) {
    if (isStringAndNotEmpty(string)) {
        return string.split('').map((char) => char.codePointAt(0)).join(' ');
    }
};

/*
Задача 6
Написать функцию-рекурсию, которая выведет каждый символ строки
в конcоль ('test') => 't' 'e' 's' 't'
*/
function charsToConsole(string) {
    if (string.length === 1) {
        console.log(string);
        return;
    }
    console.log(string[0]);
    return charsToConsole(string.split('').slice(1,string.length).join(''));
};

charsToConsole('test');

/*
Задача 7
Создать две функции и дать им осмысленные названия:
первая функция принимает массив и callback, возвращая строку из
обработанного массива.
вторая функция (callback) обрабатывает каждый элемент массива
*/

const testArray = [1, 2, 3, 4, 5];
const stringFromMultipliedArray = toStringModifiedArray(testArray, multiplyArrayElementsByTwo);

function toStringModifiedArray(array, modifyFunction) {
    return modifyFunction(array).join('');
};

function multiplyArrayElementsByTwo(array) {
    return array.map((element) => element * 2);
};





