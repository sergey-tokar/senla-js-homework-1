'use strict'

/*
Задача
Создать объект с полем 'notebook' равным 'MacBook'
Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равная 'dollar'
Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами)
*/

const device = {
    notebook : 'MacBook',
};

device.price = 1500;
device.currency = 'dollar';
device.details = {
    model: '',
    color: 'silver',
};
