/*
Задача 1
Используя функцию, найти последний элемент массива, не изменяя его.
*/

const testArray1 = [1, 2, 3, 4, 5, 6, 7];
const lastElementOfTestArray = getLastArrayElement(testArray1);

function getLastArrayElement(array) {
    if (isArrayAndNotEmpty(array)) {
        return array[array.length - 1];
    }
};

function isArrayAndNotEmpty(arrayForCheck) {
    if (Array.isArray(arrayForCheck) && (arrayForCheck.length > 0)) {
        return true;
    }
    let error = new Error('No array or array is empty!');
    console.log(error.name, ' ', error.message);
    return false;
};

/*
Задача 2
Создать такую функцию, которая принимала бы массив [1,3,6],
а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].
*/
const repeatedTestArray = repeatArray(testArray1);

function repeatArray(array) {
    if (isArrayAndNotEmpty(array)) {
        return array.concat(array);
    }
};

/*
Задача 3
Создать такую функцию, которая принимала бы любое число,
а возвращала массив, заполненный числами от 1 до n.
*/

const numbersArray = creatArrayFromOneTo(5);

function creatArrayFromOneTo(numberOfElements) {
    if (isNumber(numberOfElements)) {
        return Array.from(Array(numberOfElements), (arrayElement, index) => ++index);
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
Задача 4
Создать такую функцию, которая принимала бы любое число массивов
и удаляла из каждого массива первый элемент, а возвращала массив
оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"
*/
const testArray2 = [1, 2, 3];
const testArray3 = ["x", "y", "z"];
const arraysWithoutFirstElements = deleteArraysFirstElements(testArray2, testArray3);

function deleteArraysFirstElements(...arrays) {
    let cloneArrays = arrays.map(array => [...array]);
    return cloneArrays.map(array => array.slice(1));
};

/*
Задача 5
Создать функцию, которая упорядочит буквы в строке "екважбигёзд" 
в алфавитном порядке и возвратит строку в обратном порядке 
("кизжёедгвба").
*/

const testString = 'екважбигёзд';
const testStringReversAlphabeticOrder = sortReversAlphabeticOrder(testString);

function sortReversAlphabeticOrder(string) {
    if (isStringAndNotEmpty(string)) {
        return string.split('').sort((char1, char2) => char2.localeCompare(char1)).join('');
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
Задача 6
Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3]
в обратном порядке.
*/
const testArray4 = [5, 2, -1, 6, 9, -9, 3];
const arrayInReversOrder = sortReversNumberOrder(testArray4);

function sortReversNumberOrder(array) {
    if (isArrayAndNotEmpty(array)) {
        let cloneArray = Array.from(array);
        return cloneArray.sort((number1, number2) => number2 - number1);
    }
};

/*
Задача 7
Создать функцию, которая принимает 3 аргумента:
любой произвольный массив начальный номер элемента в массиве
конечный номер
Ваша функция должна вернуть новый массив, состоящий из элементов
исходного массива согласно аргументам (с-по)
(getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]),
не изменяя исходный массив и не используя циклы.
*/

const testArray5 = ['а', 'б', 'в', 'г', 'д', 'е'];
const newArray = getNewArray(testArray5, 1, 3);

function getNewArray(array, start, end) {
    if (isArrayAndNotEmpty(array) && isNumber(start) && isNumber(end)) {
        return array.slice(start, end + 1);
    }
};

/*
Задача 8
Удвоить элементы массива, не используя циклы.
*/

const multipliedArray = multiplyArrayByNumber(testArray4, 2);

function multiplyArrayByNumber(array, number) {
    if (isArrayAndNotEmpty(array) && isNumber(number)) {
        return array.map((element) => element * number);
    }
};

/*
Задача 9
Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
*/

let testArray6 = [1, 2, 3, 4, 5];
testArray6.splice(2, 2);

/*
Задача 10
Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы
и на их место вставить “три” и “четыре” соответственно.
*/

let testArray7 = [1, 2, 3, 4, 5];
testArray7.splice(2, 2, 'три', 'четыре');

/*
Задача 11
Вставить в произвольный массив любое значение после второго элемента.
*/

let testArray8 = creatArrayFromOneTo(10);
testArray8.splice(2, 0, 'added element');

/*
Задача 12
Отсортировать массив массивов таким образом,
чтобы вначале шли массивы с наименьшей длиной.
Создать копию произвольного массива"
*/

const testArray9 = [creatArrayFromOneTo(5), creatArrayFromOneTo(3), creatArrayFromOneTo(10), creatArrayFromOneTo(2)];
const sortedArrays = sortArraysByLength(testArray9);

function sortArraysByLength(arrays) {
    let cloneArrays = arrays.map((array) => [...array]);
    return cloneArrays.sort((array1, array2) => array1.length - array2.length);
};

/*
Задача 13
Отсортировать массив объектов по возрастающему количеству ног животных:
[ {kind: "tarantula", info: {legs: 8, eyes: 8}},
{kind: "french bulldog", info: {legs: 4, eyes: 2}},
{kind: "human", info: {legs: 2, eyes: 2}},
{kind: "lobster", info: {legs: 10, eyes: 2}}]
*/

const animals = [{kind: "tarantula", info: {legs: 8, eyes: 8}},
    {kind: "french bulldog", info: {legs: 4, eyes: 2}},
    {kind: "human", info: {legs: 2, eyes: 2}},
    {kind: "lobster", info: {legs: 10, eyes: 2}}];
const sortedAnimals = sortAnimalsByLegsQnt(animals);

function sortAnimalsByLegsQnt(array) {
    if (isArrayAndNotEmpty(array)) {
        let cloneArray = Array.from(array);
        return cloneArray.sort((animal1, animal2) => animal1.info.legs - animal2.info.legs);
    }
};

/*
Задача 14
Написать функцию, которая принимает массив услуг и два числа,
представляющих собой время исполнения услуг, а также возвращает
все услуги, находящиеся в диапазоне времени исполнения и отсортированные
от меньшего времени исполнения к большему.
const services = [ {service: "service1", executionTime: 56},
{service: "service2", executionTime: 97},
{service: "service3", executionTime: 23},
{service: "service4", executionTime: 65},
{service: "service5", executionTime: 2},
{service: "service6", executionTime: 73},
{service: "service7", executionTime: 82},
{service: "service8", executionTime: 19},
{service: "service9", executionTime: 33},
{service: "service10", executionTime: 42}, ]
Например, filterServices(services, 20, 60).
*/

const services = [{service: "service1", executionTime: 56},
    {service: "service2", executionTime: 97},
    {service: "service3", executionTime: 23},
    {service: "service4", executionTime: 65},
    {service: "service5", executionTime: 2},
    {service: "service6", executionTime: 73},
    {service: "service7", executionTime: 82},
    {service: "service8", executionTime: 19},
    {service: "service9", executionTime: 33},
    {service: "service10", executionTime: 42},];

const filteredServices = filterServices(services, 20, 60);

function filterServices(services, timeFrom, timeTo) {
    if (isArrayAndNotEmpty(services) && isNumber(timeFrom) && isNumber(timeTo)) {
        return services.filter((service) => (service.executionTime >= timeFrom) && (service.executionTime <= timeTo)).sort((service1, service2) => service1.executionTime - service2.executionTime);
    }
};
