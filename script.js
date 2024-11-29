"use strict";

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name) => {
    if (name.length < 5) { // Проверяем, если длина имени меньше 5.
        return name; // Возвращаем имя, если условие выполнено.
    }
});

console.log(shortNames); // Выводим массив имен с длиной меньше 5.

// map 

const answers = ['Ivan', 'AnnA', 'Hello'];

const result = answers.map(item => {
    return item.toLowerCase(); // Преобразуем каждую строку массива в нижний регистр.
});

console.log(result); // Выводим массив строк в нижнем регистре.

// every/some

const some = [4, 'ssswww', 'qqrrgg'];
console.log(some.some(item => typeof (item) === 'number')); // Проверяем, есть ли в массиве хотя бы один элемент типа "number". Вернет true.

/* const every = [4, 'ssswww', 'qqrrgg'];
console.log(every.every(item => typeof (item) === 'number')); */ // Проверяет, все ли элементы массива типа "number". Вернет false.

const every = [4, 5, 6];
console.log(every.every(item => typeof (item) === 'number')); // Проверяет, все ли элементы массива типа "number". Вернет true.

// reduce

/* const arr = [4, 5, 1, 3, 2, 6];
                        // 0     4 -> Начальное значение 0, добавляем 4.
                        // 4     5 -> Текущая сумма 4, добавляем 5.
                        // 9     1 -> Текущая сумма 9, добавляем 1.
                        // 10    3 -> Текущая сумма 10, добавляем 3.
                        // 13    2 -> Текущая сумма 13, добавляем 2.
                        // 15    6 -> Текущая сумма 15, добавляем 6.
                        //    21 -> Итоговая сумма.

const res = arr.reduce((sum, current) => sum + current); // Суммируем все элементы массива.

console.log(res); */ // Выводим итоговую сумму элементов массива.

/* const arr = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`); // Объединяем элементы массива в строку, разделяя их запятой.
console.log(res); */ // Выводим строку со всеми элементами массива, разделенными запятой.

const obj = {
    ivan: 'person', // Ключ "ivan" соответствует значению "person".
    ann: 'person',  // Ключ "ann" соответствует значению "person".
    dog: 'animal',  // Ключ "dog" соответствует значению "animal".
    cat: 'animal',  // Ключ "cat" соответствует значению "animal".
};

const newArr = Object.entries(obj) // Преобразуем объект в массив пар [ключ, значение].
    .filter(item => item[1] === 'person') // Оставляем только те пары, где значение равно "person".
    .map(item => item[0]); // Преобразуем массив, оставляя только ключи.

console.log(newArr); // Выводим массив ключей, где значения равны "person".
