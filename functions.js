import {readFileSync, writeFileSync} from 'fs'

let variable  = 0;

function addTwoNumbers(number1, number2){
    let sum = number1 + number2;
    return sum;
}

const sum = addTwoNumbers;

function printResult(number1, number2, callback){
   console.log(`Сумма равна ${callback(number1, number2)}`) 
}

//Определяем объект
/**
 * @typedef {Object} User
 * @prop {number} id идентификатор пользоваателя
 * @prop {string} firstName имя пользователя
 * @prop {string} lastName afvbkbz gjkmpjdfntkz
 */

/**
 * 
 * @param {string} filePath путь к json файлу с пользователями
 * @returns {array<User>}
 */

function getUsers(filePath){
    return JSON.parse(readFileSync(filePath).toString())
}
// console.log(getUsers('./users.json'));
const users = getUsers('./users.json');
users.forEach((user) => {
    console.log(user.firstName)
})
users.forEach(() => {

})
function someFunc(param1, param2, callback){
    callback(param1, param2);
}
function add(param1, param2){
    console.log(param1 + param2);
}

async function asyncFunc(params) {
    return 
}