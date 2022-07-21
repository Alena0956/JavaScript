
// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age_1 = 10
let age_12 = 18
let age_13 = 60
const checkAge1 = function(age) {
    if (age < age_12){
        console.log("You don't have access cause your age is " + age + ".", "It's less then " + age_12)
    } else if (age >= age_12 && age < age_13){
        console.log('Welcome!')
    } else if (age > age_13){
         console.log('Keep calm and look Culture channel')
    } else {
         console.log('Technical work')
}}

// checkAge1(17)
// checkAge1(18)
// checkAge1(61)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

let age_22 = 18
let age_23 = 60
const checkAge2 = function(age) {
if (typeof age == 'number'){
    if (age < age_22){
        console.log("You don't have access cause your age is " + age + ".", "It's less then " + age_22);
    } else if (age >= age_22 && age < age_23){
        console.log('Welcome!');
    } else if (age > age_23){
        console.log('Keep calm and look Culture channel');
    } else {
        console.log('Technical work');
    }
} else console.log('It is not a integer value, try again')
}
// checkAge2(17)
// checkAge2(18)
// checkAge2(61)
// checkAge2('sss')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

let age_32 = 18
let age_33 = 60
const checkAge3 = function(age) {
    console.log(age)
if (age && !isNaN(age)){
    if (age < age_32){
        console.log("You don't have access cause your age is " + age + ".", "It's less then " + age_32);
    } else if (age >= age_32 && age < age_33){
        console.log('Welcome!');
    } else if (age > age_33){
        console.log('Keep calm and look Culture channel');
    } else {
        console.log('Technical work');
    }
} else console.log('It is not a integer value, try again')
}

// checkAge3(17)
// checkAge3(18)
// checkAge3(61)
// checkAge3('sss')
// checkAge3('0')
// checkAge3('20')
// checkAge3('')
// checkAge3(0)

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
