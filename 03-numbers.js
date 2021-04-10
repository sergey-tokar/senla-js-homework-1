'use strict'

/*
Задача 1
Получить число Pi из Math и округлить его до двух знаков после точки
*/

function isNumber(numberForCheck) {
    if (typeof (numberForCheck) === 'number') {
        return true;
    }
    let error = new Error('No number for property! Need to enter number only!');
    console.log(error.name, ' ', error.message);
    return false;
};

function getRoundPi(numberDecimalPlaces = 0) {
    if (isNumber(numberDecimalPlaces)) {
        return Number(Math.PI.toFixed(numberDecimalPlaces));
    }
};

const roundPiTwoDecimalPlaces = getRoundPi(2);

/*
Задача 2
Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
*/

const numbersRow = [10, 17, 5, 12, 15, 99, 1];

function isArrayAndNotEmpty(arrayForCheck) {
    if (Array.isArray(arrayForCheck) && (arrayForCheck.length > 0)) {
        return true;
    }
    let error = new Error('No array or array is empty!');
    console.log(error.name, ' ', error.message);
    return false;
};

function getMaxNumber(array) {
    let maxValue;
    if (isArrayAndNotEmpty(array)) {
        maxValue = Math.max(...array);
        if (isNaN(maxValue)) {
            let error = new Error('Array contains not a number values!');
            console.log(error.name, ' ', error.message);
            return;
        }
        return maxValue;
    }
};

function getMinNumber(array) {
    let minValue;
    if (isArrayAndNotEmpty(array)) {
        minValue = Math.min(...array);
        if (isNaN(minValue)) {
            let error = new Error('Array contains not a number values!');
            console.log(error.name, ' ', error.message);
            return;
        }
        return minValue;
    }
};

const maxInNumbersRow = getMaxNumber(numbersRow);
const minInNumbersRow = getMinNumber(numbersRow);

/*
Задача 3
С помощью Math.random:
    получить случайное число и округлить его до двух цифр после запятой
    получить случайное число от 0 до Х
*/

function getRoundRandomNumber(numberDecimalPlaces = 1) {
    if (isNumber(numberDecimalPlaces)) {
        return Number(Math.random().toFixed(numberDecimalPlaces));
    }
};

function getRandomNumberTo(number) {
    if (isNumber(number)) {
        return Math.random() * number;
    }
};

const roundRandomNumberTwoDecimalPlaces = getRoundRandomNumber(2);
const randomNumberToOneHundred = getRandomNumberTo(100);

/*
Задача 4
Получить число из строки '100$'
*/

const testString = '100$'

function isStringAndNotEmpty(stringForCheck) {
    if (typeof stringForCheck === 'string' && stringForCheck.length > 0) {
        return true;
    }
    let error = new Error('No string or string is empty!');
    console.log(error.name, ' ', error.message);
    return false;
};

function getNumberFromString(string) {
    if(isStringAndNotEmpty(string)) {
        return parseFloat(string);
    }
};

const numberInTestString = getNumberFromString(testString);
