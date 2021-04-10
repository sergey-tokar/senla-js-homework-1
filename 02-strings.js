'use strict'
const testString = 'string test example';

/*
Задача 1
Получить первую и последнюю букву строки
*/

function isStringAndNotEmpty(stringForCheck) {
    if (typeof stringForCheck === 'string' && stringForCheck.length > 0) {
        return true;
    }
    let error = new Error('No string or string is empty!');
    console.log(error.name, ' ', error.message);
    return false;
};

function getFirstStringChar(string) {
    if (isStringAndNotEmpty(string)) {
        return string[0];
    }
};

function getLastStringChar(string) {
    if (isStringAndNotEmpty(string)) {
        return string[string.length - 1];
    }
};

const firstStringChar = getFirstStringChar(testString);
const lastStringChar = getLastStringChar(testString);

/*
Задача 2
Сделать первую и последнюю буквы в верхнем регистре
*/

const modifiedString = changeFirstAndLastCharToUpperCase(testString);

function changeFirstAndLastCharToUpperCase(string) {
    if (isStringAndNotEmpty(string)) {
        let firstCharInUpperCase = getFirstStringChar(string).toUpperCase();
        let lastCharInUpperCase = getLastStringChar(string).toUpperCase();
        let substring = string.slice(1, string.length - 1);
        return firstCharInUpperCase + substring + lastCharInUpperCase;
    }

};

/*
Задача 3
Найти положение слова string в строке
*/
const target = 'string';
const positionTargetInTestString = searchSubstringPosition(testString, target);

function searchSubstringPosition(string, substring) {
    if (isStringAndNotEmpty(string) && isStringAndNotEmpty(substring)) {
        if (string.includes(substring)) {
            return string.indexOf(substring);
        }
        let error = new Error('No matches!');
        console.log(error.name, ' ', error.message);
    }
};

/*
Задача 4
Найти положение второго пробела
*/
const secondSpacePosition = searchSecondSpacePosition(testString);

function searchSecondSpacePosition(string) {
    let firstSpacePosition = searchSubstringPosition(string, ' ');
    let substring = string.slice(firstSpacePosition + 1, string.length);
    if (searchSubstringPosition(substring, ' ')) {
        return searchSubstringPosition(substring, ' ') + firstSpacePosition + 1;
    }
};

/*
Задача 5
Получить строку со 2-ого символа длинной 6 букв
*/

function getSubstringWithLength(string, positionFrom, length) {
    if (isStringAndNotEmpty(string)) {
        return string.substr(positionFrom, length);
    }
};

let substringWithLength = getSubstringWithLength(testString, 2, 6);

/*
Задача 6
Получить строку с 1 по 7 символ
*/

function getSubstringFromTo(string, positionFrom, positionTo) {
    if (isStringAndNotEmpty(string)) {
        return string.substring(positionFrom, positionTo + 1);
    }
};

const substringFromTo = getSubstringFromTo(testString, 1, 7);

/*
Задача 7
Получить из ух переменных типа number x = 20, y = 21 получить строку '2021'
*/

const x = 20;
const y = 21;

function addNumbersLikeStrings(number1, number2) {
    return '' + number1 + number2;
};

const stringSumOfNumbers = addNumbersLikeStrings(x, y);
