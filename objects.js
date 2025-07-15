let user = {
    name: 'Sara',
    age: 15
};
console.log(user.name);
user['like dogs'] = true;
delete user.age;

for(let key in user){
    console.log(user[key]);
}

function checkEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let zp = 0;
// function sum(key){
//     zp = zp + key;
// }
// function calculatingSalaries(obj){
//     for (let key in obj){
//         salaries[key].sum;
//     }
//     return zp;
// }
for (let key in salaries){
        zp += salaries[key];
     }
console.log(`Общая зп сотрудников составляет ${zp}`);

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}
console.log(clone.name);