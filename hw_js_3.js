// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
 
const result = 2
count = 0
while (count < 10){
    count ++
    console.log(result ** count)
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const result1 = 2
const degree = function(num){
        console.log(result1 ** num)
}

degree(0)
degree(2)
degree(6)
degree(12)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

a = 1
while (a <= 5){
    console.log(':)'.repeat(a))
    a += 1
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

const printSmile = function(sm, num_rows){
    a = 1
    while (a <= num_rows){
        console.log(sm.repeat(a))
        a += 1
}}

printSmile('*', 8)

// 3**.  Написclать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word){
    vowels = 'aeiouAEIOU'.split('');
    consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.split('');
    vowelsCount = 0;
    consonantsCount = 0;
    // for (let i = 0; i < word.length; i ++){
    //     if (vowels.indexOf(word[i]) !== -1) {
    //         vow_total += 1;
    //     }
    // }
    // for (let i = 0; i < word.length; i ++){
    //     if (consonants.indexOf(word[i]) !== -1) {
    //         con_total += 1;
    //     }
    // }
    for (letter of word.toLowerCase()){
        if (vowels.includes(letter)) vowelsCount ++
        else if (consonants.includes(letter)) consonantsCount ++
    }
    console.log(`Слово ${word} состоит из: ${vowelsCount} гласных и ${consonantsCount} согласных`)       
}

getWordStructure('cAse')
getWordStructure('Check-list')
getWordStructure('m')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word){
    for (i = 0; i < 1; i++){
        if (word.toLowerCase().replace(/[^a-zа-яё]/gi, '') == word.toLowerCase().split("").reverse().join("").replace(/[^a-zа-яё]/gi, '')){
            console.log('Palindrom!')
        }else {
            console.log('Not a palindrom((')
        }}}

isPalindrom('А роза упала на лапу Азора!')
isPalindrom('Abba....')
isPalindrom('abba?')
isPalindrom('assasa')