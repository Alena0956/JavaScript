
// Task 2*
// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
// Дан массив объектов. Каждый объект является идентификационной карточкой человека.
// Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

// const fs = require("fs")
// let user = fs.readFileSync("./task2.json")
// console.log(user)

let user = require('./task2.json'); 

function uniqueUsers(list_users){
    list_of_uniqueUsers = []
    list_users.forEach(el => {
        if (!list_of_uniqueUsers.includes(JSON.stringify(el))) list_of_uniqueUsers.push(JSON.stringify(el))
    })
    return list_of_uniqueUsers.map(el => JSON.parse(el))
}
console.log(uniqueUsers(user))

uniqueUsers = Array.from(new Set(user.map(el => JSON.stringify(el)))).map(el => JSON.parse(el))
console.log(uniqueUsers)