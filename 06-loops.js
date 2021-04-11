'use strict'
/*
Задача 1
В строке "Я стану крутым программистом"
сделать первую букву каждого слова в верхнем регистре"
*/

const testString1 = 'Я стану крутым программистом';
const capitalizedTestString = capitalize(testString1);
console.log(capitalizedTestString);

function capitalize(string) {
    if (isStringAndNotEmpty(string)) {
        let capitalizedString = '';
        for (let i = 0; i < string.length; i++) {
            if ((i === 0) || (string[i - 1] === ' ')) {
                capitalizedString += string[i].toUpperCase();
            } else {
                capitalizedString += string[i];
            }
        }
        return capitalizedString;
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
Задача 2
Вычислить факториал числа 9
(факториал числа - это произведение всех натуральных чисел от 1 до n включительно.
Например, 2! = 2*1 или 6! = 6*5*4*3*2*1) .
*/

const numberForFactorial = 9;
const numberFactorial = factorial(numberForFactorial);

function factorial(number) {
    if (isNumber(number)) {
        let factorial = 1;
        if (number === 0) {
            return factorial;
        } else if (number < 0) {
            let error = new Error('Cant calculate factorial for negative number!');
            console.log(error.name, ' ', error.message);
            return;
        }
        for (let i = number; i >= 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
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
Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
*/

const enlightenmentThroughTen = enlightenmentThrough(10);

function enlightenmentThrough(number) {
    let string = 'Просветление наступит через:'
    if (isNumber(number)) {
        for (let i = number; i > 0; i--) {
            if (i === 1) {
                string += ` ${i}`;
            } else {
                string += ` ${i},`;
            }
        }
        return string;
    }
};

/*
Задача 4
Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
 */

function oddNumberFromTo(from, to) {
    if (isNumber(from) && isNumber(to)) {
        for (let i = from; i <= to; i++) {
            if (i % 2) {
                console.log(i);
            }
        }
    }
};

oddNumberFromTo(1, 20);

/*
Задача 5
На основе строки "теперь я мастер циклов javascript"
создать новую строку, где первые буквы каждого слова
будут в верхнем регистре и будут отсутствовать пробелы.
 */

const testString2 = 'теперь я мастер циклов javascript';
const pascalCasedTestString = toPascalCase(testString2);

function toPascalCase(string) {
    if (isStringAndNotEmpty(string)) {
        let camelCaseString = '';
        string = capitalize(string);
        for (let i = 0; i < string.length; i++) {
            if (string[i] === ' ') {
            } else {
                camelCaseString += string[i];
            }
        }
        return camelCaseString;
    }
};
